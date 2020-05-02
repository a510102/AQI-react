import React, { Component } from 'react';
import { connect } from 'react-redux';
import Searchbox from '../components/Searchbox/Searchbox';
import AqiContent from '../components/AqiContent';
import './App.css'
import { onChangeCounty, onChangeFocusSite, requestAqi} from '../actions';

const mapStateToProps = state => {
  return {
    setCounty: state.requestAqi.County,
    setfocusSite: state.requestAqi.focusSite,
    datas: state.requestAqi.datas,
    isPending: state.requestAqi.isPending,
    error: state.requestAqi.error,
    CountyList: state.requestAqi.countyList,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  onChangeCounty: (event) => dispatch(onChangeCounty(event.target.value)),
  onChangeFocusSite: (event) => dispatch(onChangeFocusSite(event.target.textContent)),
  countyChangeSiteChange: (text) => dispatch(onChangeFocusSite(text)),
  onRequestAqi: ()=>dispatch(requestAqi()),
  }
}



class App extends Component { 
  componentDidMount(){
    const { onRequestAqi} =this.props;
    onRequestAqi();   
  }
  onchangeSite=(event)=>{
    const {datas, onChangeCounty, countyChangeSiteChange } =this.props;
    let site = datas.find(data =>{
      return data.County === event.target.value
    }).SiteName
    console.log(site)
     onChangeCounty(event);
     countyChangeSiteChange(site);
  }
  

  render() { 
    
    const {CountyList ,datas, onChangeFocusSite, setCounty, setfocusSite} = this.props;

    const filterdatas = datas.filter(data => data.County === setCounty);//篩選相同城市的資料
    const filterCity = datas.filter(data => data.SiteName === setfocusSite); //選取點選的地區資料 
    
    return filterdatas.length === 0 || filterCity.length === 0 ? 
      <h1>Loading</h1> :
      (
        <div className='wrap'>
          <Searchbox 
            CountyList={ CountyList }
            onchangeCountyAqi={this.onchangeSite} 
          />
          <AqiContent 
            County={setCounty} 
            datas={filterdatas} 
            focusSite={filterCity[0]}
            onChangeFocusSite = {onChangeFocusSite}
            />
        </div> )
      }      
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;

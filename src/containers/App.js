import React, { Component } from 'react';
import { connect } from 'react-redux';
import Searchbox from '../components/Searchbox/Searchbox';
import AqiContent from '../components/AqiContent';
import './App.css'
import { onChangeCounty, onChangeFocusSite} from '../actions';

const mapStateToProps = state => {
  return {
    setCounty: state.County,
    setfocusSite: state.focusSite,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  onChangeCounty: (event) => dispatch(onChangeCounty(event.target.value)),
  onChangeFocusSite: (event) => dispatch(onChangeFocusSite(event.target.textContent)),
  firstChangeCounty: (text) => dispatch(onChangeCounty(text)),
  firstChangeFocusSite: (text) => dispatch(onChangeFocusSite(text)),
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas:[],
      CountyList: [],
      focusSite:'',
      County:'',
    };
  }
  componentDidMount(){
    const { firstChangeCounty, firstChangeFocusSite } =this.props;
    const url = 'https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(datas=> {
        this.setState({datas});
        let countys = datas.map(data=> data.County);
        const singleCounty = countys.filter((element, index, arr) => {
          return arr.indexOf(element) === index;
        })
        this.setState({CountyList: singleCounty});
        let County = datas[0].County;
        firstChangeCounty(County)
        let focusSite = datas[0].SiteName;
        firstChangeFocusSite(focusSite)
      })
      .catch(error => console.log(error))
  }
  onchangeSite=(event)=>{
    const { onChangeCounty, firstChangeFocusSite } =this.props;
    let site = this.state.datas.find(data =>{
      return data.County === event.target.value
    }).SiteName
    onChangeCounty(event);
    firstChangeFocusSite(site);
  }

  render() {
    const {datas, CountyList} = this.state;  
    const {onChangeFocusSite, setCounty, setfocusSite} = this.props;
    const filterdatas = datas.filter(data => data.County === setCounty);//篩選相同城市的資料
    const filterCity = datas.filter(data => data.SiteName === setfocusSite); //選取點選的地區資料 
    return filterdatas.length === 0 || filterCity.length === 0 ?
      <h1>Loading</h1> :
      (
        <div className='wrap'>
          <Searchbox 
            CountyList={CountyList}
            onchangeCountyAqi={this.onchangeSite} 
          />
          <AqiContent 
            County={setCounty} 
            datas={filterdatas} 
            focusSite={filterCity[0]}
            onChangeFocusSite = {onChangeFocusSite}
            />
        </div>
      )
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;

import { 
  ON_CHANGE_COUNTY, 
  ON_CHANGE_FOCUS_SITE,
  REQUSET_AQI_PENDING,
  REQUSET_AQI_SUCCESS,
  REQUSET_AQI_ERROR,
} from './constants';

export const onChangeCounty = (text) => ({
      type: ON_CHANGE_COUNTY,
      payload: text,
})


export const onChangeFocusSite = (text) =>({
  type: ON_CHANGE_FOCUS_SITE,
  payload: text,}
})

export const requestAqi = ()=>(dispatch)=>{
  const url = 'https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json';
  dispatch({type: REQUSET_AQI_PENDING, isPending: true});
  fetch(url)
    .then(response => response.json())
      .then(datas=> {
        let countys = datas.map(data=> data.County);
        const singleCounty = countys.filter((element, index, arr) => {
        return arr.indexOf(element) === index;
      });
        let County = datas[0].County;
        let focusSite = datas[0].SiteName;
        return dispatch({type:REQUSET_AQI_SUCCESS, payload: datas, countyList:singleCounty,County:County,focusSite:focusSite})})
      .catch(error => dispatch({type:REQUSET_AQI_ERROR, payload: error,isPending: false}))
}
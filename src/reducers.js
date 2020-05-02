import { 
  ON_CHANGE_COUNTY, 
  ON_CHANGE_FOCUS_SITE,
  REQUSET_AQI_PENDING,
  REQUSET_AQI_SUCCESS,
  REQUSET_AQI_ERROR,
} from './constants';


const intialStateData ={
  datas: [],
  countyList:[],
  focusSite: '',
  County: '',
  isPending: false,
  error: '',
}

export const requestAqi = (state=intialStateData, action={}) =>{
  switch(action.type){
    case REQUSET_AQI_PENDING:
      return Object.assign({}, state, {isPending: true});
    case  REQUSET_AQI_SUCCESS:
      return Object.assign({}, state, {datas: action.payload,countyList: action.countyList,County:action.County,focusSite:action.focusSite });
    case  REQUSET_AQI_ERROR:
      return Object.assign({}, state, {error: action.payload, isPending: false})
    case ON_CHANGE_COUNTY:
        return Object.assign({},state,{County: action.payload})
    case ON_CHANGE_FOCUS_SITE:
        return Object.assign({},state,{focusSite: action.payload})  
    default:
      return state;  
  }
}
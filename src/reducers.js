import { ON_CHANGE_COUNTY, ON_CHANGE_FOCUS_SITE } from './constants';

const intialState ={
  focusSite: '',
  County: '',
}

export const changeAqi = (state=intialState, action={}) =>{
  console.log(action.type)
  switch(action.type){
    case ON_CHANGE_COUNTY:
      return Object.assign({},state,{County: action.payload})
    case ON_CHANGE_FOCUS_SITE:
      return Object.assign({},state,{focusSite: action.payload})
    default:
      return state  
  }
}
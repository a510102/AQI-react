import { ON_CHANGE_COUNTY, ON_CHANGE_FOCUS_SITE } from './constants';

export const onChangeCounty = (text) => ({
      type: ON_CHANGE_COUNTY,
      payload: text,
})


export const onChangeFocusSite = (text) =>({
  type: ON_CHANGE_FOCUS_SITE,
  payload: text,
});
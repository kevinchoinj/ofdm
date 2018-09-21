import {
  SET_PAGE,
  TOGGLE_MENU,
  TOGGLE_DARK,
} from 'actions/pages'

const DEFAULT_STATE={
  currentPage: '',
  triangleDisplayed: false,
  menuDisplayed: false,
  darkSetting: false,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case SET_PAGE:
      return state = {...state, currentPage: payload.currentPage};
    case TOGGLE_MENU:
      return {...state, menuDisplayed: payload.menuDisplayed};
    case TOGGLE_DARK:
      return {...state, darkSetting: payload.darkSetting};
    default:
      return state;
  }
};

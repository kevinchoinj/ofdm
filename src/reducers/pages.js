import {
  SET_PAGE,
  TOGGLE_MENU,
  TOGGLE_DARK,
  TOGGLE_SECTION
} from 'actions/pages'

const DEFAULT_STATE={
  currentPage: '',
  triangleDisplayed: false,
  menuDisplayed: false,
  darkSetting: false,
  sectionsDisplayed: {},
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
    case TOGGLE_SECTION:
      Object.keys(state.sectionsDisplayed).forEach(v => v !== payload.key? state.sectionsDisplayed[v] = false : null);
      return {
        ...state,
        sectionsDisplayed: {
          ...state.sectionsDisplayed,
          [payload.key]: !state.sectionsDisplayed[payload.key],
        }
      };
    default:
      return state;
  }
};

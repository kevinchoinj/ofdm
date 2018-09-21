export const SET_PAGE = Symbol('SET_PAGE');
export const TOGGLE_MENU = Symbol('TOGGLE_MENU');
export const TOGGLE_DARK = Symbol('TOGGLE_DARK');

export const setPage = (currentPage) =>{
  return{
    type: SET_PAGE,
    currentPage,
  };
}
export const toggleDark = (darkSetting) =>{
  return{
    type: TOGGLE_DARK,
    darkSetting,
  };
}
export const toggleMenu = (menuDisplayed) =>{
  return{
    type: TOGGLE_MENU,
    menuDisplayed,
  };
}
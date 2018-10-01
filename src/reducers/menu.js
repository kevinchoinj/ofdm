import {
  TOGGLE_MENU,
} from '../actions/menu'

const DEFAULT_STATE={
  menuDisplay: null,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_MENU:
      return state = {...state, menuDisplay:payload.menuDisplay};
    default:
      return state;
  }
};

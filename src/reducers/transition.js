import {
  START_TRANSITION,
  LOAD_CONTENT,
} from '../actions/transition'

const DEFAULT_STATE={
  transitionStatus: null,
  loadedContent: [],
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case START_TRANSITION:
       state = {...state,
        transitionStatus: payload.transitionStatus};
      return state;
    case LOAD_CONTENT:
      return {
        ...state,
        loadedContent: {
          ...state.loadedContent,
          [payload.location]: payload.loadStatus,
        }
    };

    default:
      return state;
  }
};

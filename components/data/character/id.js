import { SET_CURRENT_CHARACTER } from './actions';

const initState = 0;

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHARACTER:
      return action.id;
    default:
      return state;
  }
};
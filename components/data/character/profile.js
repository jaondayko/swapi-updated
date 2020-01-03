import { SET_CHARACTER_PROFILE } from './actions';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CHARACTER_PROFILE:
      return action.profile;
    default:
      return state;
  }
};
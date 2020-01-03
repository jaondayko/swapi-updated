import { SET_CHARACTER_WORLD } from './actions';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CHARACTER_WORLD:
      return action.world;
    default:
      return state;
  }
};
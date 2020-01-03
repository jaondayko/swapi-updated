import { SET_CHARACTERS } from './api/characters';

const initState = [];

export default (state = initState, action) => {
  switch(action.type) {
    case SET_CHARACTERS:
      return action.characters;
    default:
      return state;
  }
}
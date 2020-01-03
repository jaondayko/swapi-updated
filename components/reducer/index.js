import { combineReducers } from 'redux';
import characters from '../data/api/characters';
import character from '../data/character';

export default combineReducers({
  characters,
  character,
});
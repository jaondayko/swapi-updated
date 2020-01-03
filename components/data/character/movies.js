import { SET_CHARACTER_MOVIES } from './actions';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CHARACTER_MOVIES:
      return action.movies.sort((ma, mb) =>
        ma.episode_id - mb.episode_id
      );
    default:
      return state;
  }
};
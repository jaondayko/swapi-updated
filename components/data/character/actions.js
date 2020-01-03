const Url = 'https://swapi.co/api';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';
export const SET_CHARACTER_WORLD = 'SET_CHARACTER_WORLD';
export const SET_CHARACTER_MOVIES = 'SET_CHARACTER_MOVIES';

export function currCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id,
  };
}

export function currCharProfile(profile) {
  return {
    type: SET_CHARACTER_PROFILE,
    profile,
  };
}

export function setCurrCharWorld(world) {
  return {
    type: SET_CHARACTER_WORLD,
    world,
  };
}

export function currCharWorld(Url) {
return dispatch =>
    fetch(Url)
      .then(res => res.json())
      .then(world =>
        dispatch(setCurrCharWorld(world))
      );
}

export function setCurrCharMovies(movies) {
  return {
    type: SET_CHARACTER_MOVIES,
    movies,
  };
}

export function currCharMovie(moviesUrls) {
  return dispatch =>
    Promise.all(moviesUrls.map(movieUrl =>
      fetch(movieUrl)
        .then(res => res.json())
    ))
    .then(movies =>
      dispatch(setCurrCharMovies(movies))
    );
}

export function getCharProfile(id) {
  return dispatch =>
    fetch(`${Url}/people/${id}`)
      .then(res => res.json())
      .then(profile => {
        dispatch(currCharProfile(profile));
        dispatch(currCharWorld(profile.homeworld));
        dispatch(currCharMovie(profile.films));
      });
}
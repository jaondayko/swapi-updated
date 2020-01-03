const url = 'https://swapi.co/api';

export const SET_CHARACTERS = 'SET_CHARACTERS';

export function getPeople() {
  return dispatch => {
    fetch(`${url}/people`)
      .then(res => res.json())
      .then(res => res.results)
      .then(characters =>
        dispatch(setPeople(characters))
      );
  };
}

export function setPeople(characters) {
  return {
    type: SET_CHARACTERS,
    characters
  }
}
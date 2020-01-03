import React, {Component} from 'react';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './components/reducer/index';
import { MainPage } from './components/main';
import { Provider } from 'react-redux';
import { getPeople } from './components/data/api/characters';


const store = createStore(combineReducers, compose(
  applyMiddleware(thunk)
));

store.dispatch(getPeople());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

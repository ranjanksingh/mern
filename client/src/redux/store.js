import { createStore } from 'redux';
import someReducer from './reducer/someReducer';
import counterReducer from './reducer/counterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    moods: someReducer,
    counter: counterReducer,
  });

const store = createStore(rootReducer);

export default store;
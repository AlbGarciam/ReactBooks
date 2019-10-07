import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../redux';

const reducer = combineReducers(reducers);
// ApplyMiddleware allows us to use async functions!!
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import hkReducer from './hkreducer.js';
import newAdressReducer from './newadressreducer'

let store = createStore(combineReducers({
    hk:hkReducer,
    ad:newAdressReducer
}), applyMiddleware(thunk))

export default store;
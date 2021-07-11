import {createStore , applyMiddleware} from 'redux'


import reducer from './reducer'
//import sagaMiddleware from './saga/saga'
import createSagaMiddleware from 'redux-saga'
import {watchAgeUp} from './saga/saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));
//sagaMiddleware.run();
export default store;
import {createStore , applyMiddleware} from 'redux'


import reducer from './reducer'
//import sagaMiddleware from './saga/saga'
import createSagaMiddleware from 'redux-saga'
import {watchAgeUp}

const sagaMiddleware = createSagaMiddleware();
//sagaMiddleware.run();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));

export default store;
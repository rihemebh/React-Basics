//import {createStore , applyMiddleware} from 'redux'
import reducer from './reducer'
//import sagaMiddleware from './saga/saga'
import createSagaMiddleware from 'react-saga'

const sagaMiddleware = createSagaMiddleware();
//sagaMiddleware.run();/const store = createStore(reducer,applyMiddleware(sagaMiddleware));

export default store;
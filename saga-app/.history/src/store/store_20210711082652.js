import {createStore , applyMiddleware} from 'redux'
import reducer from './reducer'
import sagaMiddleware from './saga/saga'
saga
const store = createStore(reducer,applyMiddleware(sagaMiddleware));

export default store;
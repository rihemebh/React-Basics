import {createStore , applyMiddleware} from 'redux'
import reducer from './reducer'
import sagaMiddleware from ./saga/saha
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
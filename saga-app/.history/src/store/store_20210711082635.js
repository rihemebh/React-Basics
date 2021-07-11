import {createStore , applyMiddleware} from 'redux'
import reducer from './reducer'
import sagaMiddleware from './saga/saga'
const store = createStore(reducer,);

export default store;
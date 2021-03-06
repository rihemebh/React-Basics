import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action)=> {
switch(action){
  case 'increment': return state+1
  case 'decrement': return state-1
  case 'reset': return 0
  default: return state;
}

}

const init = {
  fisrtCounter:  0,
}
const reducer1 = (state, action)=> {
  switch(action.type){
    case 'increment': return {...state, firstCounter: state+action.value}
    case 'decrement': return {...state, firstCounter: state-action.value}
    case 'reset': return init
    default: return state;
  }
}  
function CounterTwo() {
  const [state, dispatch] = useReducer(reducer1, init.fisrtCounter)
  return (
    <div>
      count = {state} <br />
      <button onClick={
        ()=> dispatch({type : "increment", value : 2})
      }>+</button>
      <button onClick={
        ()=> dispatch({type : "decrement", value : 1})
      }>-</button>
      <button onClick={
        ()=> dispatch({type : "reset", value : 1})
      }>reset</button>
    </div>
  )
}

export default  CounterTwo}

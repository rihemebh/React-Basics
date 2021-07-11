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


function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      count = {state} <br />
      <button onClick={
        ()=> dispatch("increment")
      }>+</button>
      <button onClick={
        ()=> dispatch("decrement")
      }>-</button>
      <button onClick={
        ()=> dispatch("reset")
      }>reset</button>
    </div>
  )
}
const init = {
  fisrtCounter:  0,
}
const reducer1 = (state, action)=> {
  switch(action.type){
    case 'increment': return state+action.value
    case 'decrement': return state-action.value
    case 'reset': return 0
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
        ()=> dispatch({type : "reset"})
      }>reset</button>
    </div>
  )
}

export default {CounterOne, CounterTwo}

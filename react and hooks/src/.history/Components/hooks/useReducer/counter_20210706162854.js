import React, {useReducer} from 'react'

const init = {
  fisrtCounter:  0,
}
const reducer = (state, action)=> {
  switch(action.type){
    case 'increment': return {firstCounter: state.firstCounter+action.value}
    case 'decrement': return {firstCounter: state.firstCounter-action.value}
    case 'reset': return init
    default: return state;
  }
}  
function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, init.firstCounter)
  return (
    <div>
      count = {state.firstCounter} <br />
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

export default  CounterTwo

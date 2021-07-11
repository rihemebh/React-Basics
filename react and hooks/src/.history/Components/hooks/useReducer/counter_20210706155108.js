import React, {useReducer} from 'react'

const initialState = 0;
const reducer = ()=> {

}


function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      count = {state}
      <button onClick={
        ()=> dispatch(increment)
      }>+</button>
    </div>
  )
}

export default CounterOne

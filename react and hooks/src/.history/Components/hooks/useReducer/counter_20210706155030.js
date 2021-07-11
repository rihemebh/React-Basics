import React, {useReducer} from 'react'

const initialState = 0;
const reducer = ()=> {

}


function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      count = {state}
      
    </div>
  )
}

export default CounterOne

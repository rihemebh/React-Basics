import React, { useReducer } from "react";
const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
function CounterOne() {
 const [count , dispatch]= useReducer(reducer, initialstate);
  return (
    <div>
        <div>Count = {count}</div>
      <button onClick={()=> dispatch('inc')}>Inc</button>
      <button  onClick={()=> dispatch('dec')} >dec</button>

      <button  onClick={()=> dispatch('reset')}>reset</button>
    </div>
  );
}

export default CounterOne;

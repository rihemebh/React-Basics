//import logo from "./logo.svg";
import "./App.css";
import store from "./store/store";
import { ageUp, ageDown } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
function App() {
  console.log(store.getState);
  const dispatch = useDispatch();
  //const age = useSelector((state) => state.age);
  return (
    <div className="App">
      <h1>Age = </h1>
      <div>
        <button onClick={() => dispatch(ageUp())}>Age Up</button>
        <button onClick={() => dispatch(ageDown())}>Age Down</button>
      </div>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import React from "react";
import "./App.css";
import store from "./store/store";
import { ageUp, ageDown ,ageUpAsync} from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  console.log(store.getState);
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age);
  return (
    <div className="App">
      <h1>Age = {age}</h1>
      <div>
        <button onClick={() => dispatch(ageUpAsync())}>Age Up after 1 second</button>
        <button onClick={() => dispatch(ageUp())}>Age Up</button>
        <button onClick={() => dispatch(ageDown())}>Age Down</button>
      </div>
    </div>
  );
}

export default App;

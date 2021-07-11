import logo from './logo.svg';
import './App.css';
import {useDispatch , useSelector} from 'react-redux';
import {increment , decrement} from './store/actions/action'

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count)
  return (
    <div className="App">
     <button onClick= {
       ()=>{
         dispatch(increment())
       }
     }><h1>+</h1></button>
     Count = {counter}
     <button onClick= {
       ()=>{
         dispatch(increment)
       }
     }><h1>-</h1></button>
    </div>
  );
}

export default App;

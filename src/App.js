import logo from './logo.svg';
import './App.css';
import Message from './Components/Message'
import Counter from './Components/counter';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
     <ParentComponent/> 
     {/*  <EventBind/>
      <Counter/>

     <Message/>

       <FunctionClick/>*/}
    </div>
  );
}

export default App;

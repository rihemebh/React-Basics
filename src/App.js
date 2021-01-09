import logo from './logo.svg';
import './App.css';
import Message from './Components/Message'
import Counter from './Components/counter';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';

function App() {
  return (
    <div className="App">
 <NameList />
     {/*  <EventBind/>
      <Counter/>
    <ParentComponent/> 
     <Message/>
<UserGreeting/>
       <FunctionClick/>*/}
    </div>
  );
}

export default App;

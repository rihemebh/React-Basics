import logo from './logo.svg';
import './App.css';
import Message from './Components/Message'
import Counter from './Components/counter';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import LifeCycleB from './Components/LifeCycleB';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <Table/>
    
  
     {/* 
    <FragmentDemo/>
     <LifeCycleA/>
      <LifeCycleB/>
       <Form />
      <NameList />
     <EventBind/>
      <Counter/>
    <ParentComponent/> 
     <Message/>
<UserGreeting/>
       <FunctionClick/>*/}
    </div>
  );
}

export default App;

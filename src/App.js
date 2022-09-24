// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      
    </div>
  );
}

function Counter(){
  const [count,setCount] =useState(0);

  const increaseCount =() =>{
    const newCounter = count +1;
    setCount(newCounter);
  }
  const decreaseCount =() =>{
    const newCounter = count -1;
    setCount(newCounter);
  }

  return (
    <div>
      <h1>counter :{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

export default App;

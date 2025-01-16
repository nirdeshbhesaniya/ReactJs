
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  const addValue = ()=>{
    counter = counter +1;
    setCounter(counter);
    console.log("addCounter",Math.random)
  }
  const removeValue = ()=>{
    counter = counter - 1;
    setCounter(counter);
    console.log("addCounter",Math.random)
  }

  return (
 
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Increment</button>
     <br /> 
     <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App

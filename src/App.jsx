import { useState, useRef } from "react";
import "./App.css";


function App() {

  const inputRef = useRef(null);
  const h1Ref = useRef(null);



  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = 'red'
    inputRef.current.placeholder = "Enter Password"
    inputRef.current.value = "123"
  }

  const toggleHandler = () => {
    
    if(inputRef.current.style.display != 'none'){
      inputRef.current.style.display = 'none'
    }
    else{
      inputRef.current.style.display = 'inline'
    }
  }

    const h1Handler = () => {
      h1Ref.current.style.color = 'green'
    }
  

  return (
    <div>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>

      <input ref={inputRef} type="text" placeholder="Enter Username" />
      <button onClick={inputHandler}>Focus on Input React</button>

      <h1 ref={h1Ref}>Code Step By Step</h1>
      <button onClick={h1Handler}>Handler</button>
    </div>
  )
}

export default App;


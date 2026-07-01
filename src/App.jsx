import { useState } from "react";
import "./App.css";
import LifeCycle from "./LifeCycle";

function App() {

  const[count,setCount] = useState(0);
  const[data,setData] = useState(0);
  const[display,setDisplay] = useState(true);

  return (
    <div>
      
      {
        display? <LifeCycle count={count} data={data} ></LifeCycle>: null
      }
      
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setData(data+1)}>Data</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      
      
    </div>
  );
}

export default App;


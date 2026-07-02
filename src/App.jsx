import "./App.css";
import { useRef } from "react";                     

function App() {


  const userRef = useRef();
  const passwordRef = useRef();


  //  BY USING DOM
  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log(user);
    console.log(password);
  }

  

  //  BY USING REF
  const handleFormRef = (event) => {
    event.preventDefault();

    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user,password);
    
  }
  

  return (
    <div>
      <h1>UnControlled Components</h1>
      <form action="" method="post" onSubmit= {handleForm}>
        <input type="text" id="user" placeholder="Enter your name" />
        <br /><br />

        <input type="password" id="password" placeholder="Enter your password" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>      


        <hr />

      <h1>UnControlled Components with useref</h1>
      <form action="" method="post" onSubmit= {handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder="Enter your name" />
        <br /><br />

        <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter your password" />
        <br /><br />

        <button type="submit">Submit with Ref </button>
      </form>   
    </div>
  )
}

export default App;


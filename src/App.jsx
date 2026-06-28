import { useState } from "react";
import "./App.css";
import User from "./User";
import College from "./College";
import Student from "./Student";

function App() {
  /*  FOR DYNAMIC OBJECT PROPS - Only to pass user object as props to User component and name, age , email will accessed in User component 
using props.user.name, props.user.age, props.user.email */

  let userObject = {
    name: "Anil Sidhu",
    age: 29,
    email: "anil@example.com",
  };

  let userObject2 = {
    name: "Peter Parker",
    age: 39,
    email: "peter@example.com",
  };

    let userObject3 = {
    name: "Sam Smith",
    age: 19,
    email: "sam@example.com",
  };


  let collegeNames = ['IIT','NIT','MIT'];

  const[student, setStudent] = useState("sam");

  return (
    <div>

      <h1>Props in React</h1>

      <Student name= {student} />
      
      <College name={collegeNames[0]} />

      <College name={collegeNames[1]} />

      <College name={collegeNames[2]} />
      




      <User user={userObject} />

      <User user={userObject2} />

      <User user={userObject3} />
    </div>
  );
}

export default App;





//  FOR DYNAMIC PROPS
// let username="Anil Sidhu";
// let age=29;
// let email="anil@example.com";

// return (
//   <div>
//     <h1>Props in React</h1>
//     <User name={username} age={age} email={email} />
//   </div>
// )

//  FOR STATIC PROPS
//   return (
//     <div>
//       <h1>Props in React</h1>
//       <User name="Anil Sidhu" age={29} email="anil@example.com" />
//     </div>
//   )
// }

//  export default App

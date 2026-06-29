import { useState } from "react";

function Radio_DropDown() {

    const [gender, setGender] = useState("male");
    const[city, setCity] = useState("Mumbai");


    return(
        <div>
            <h1>Handle Radio Button and Dropdown in React Js</h1>
            <h4>Select Gender:</h4>

            <input type="radio" onChange={(event) => setGender(event.target.value)}  type="radio" 
                name="gender" id="male" value={"male"} checked={gender == 'male'}/>
            <label htmlFor="male">Male</label>

            <input type="radio" onChange={(event) => setGender(event.target.value)} type="radio" 
                name="gender" id="female" value={"female"} checked={gender == 'female'}/>
            <label  htmlFor="female">Female</label>
            
            <h4>Selected Gender: {gender}</h4>
            <br />
            <br />


            

            <select onChange={(event) => setCity(event.target.value)} defaultValue={"Mumbai"}>
                <option value="Noida">Noida NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Gurugram">Gurugram</option>
            </select>


            <h4>Selected City: {city}</h4>
        </div>
    )    
}

export default Radio_DropDown;
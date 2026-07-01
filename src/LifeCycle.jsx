import {useEffect} from "react";


const LifeCycle = ({count,data}) =>{

useEffect(() => {
    console.log("Component Mounted");
},[])


useEffect(() => {
    console.log("Component Updated");
},[count])


useEffect(() => {
    return() => {
        console.log("Component Unmounted");
    }
},[])

    return(
        <div>
            <h1>Counter Value:- {count}</h1>
            <h1>Data Value:- {data}</h1>
        </div>
    )
}

export default LifeCycle;
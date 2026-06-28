function User({ user }) {
    
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);


    return(
        <div>
            <hr/>
            <h1>User Component</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>          
            <p>Email: {user.email}</p>                                                                                                                                                         
        </div>
    )
}

export default User;





// function User(data){
    
//     console.log(data.name);
//     console.log(data);
//     return(
//         <div>
//             <h1>User Component</h1>
//             <h1>{data.name}</h1>
//         </div>
//     )
// }

// export default User;
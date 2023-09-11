import React from "react";

const Person = (props) => {

    return (
        // <h1>my name is Sail </h1>
      
 
        <>
            <h1 onClick={props.removal}>My name is {props.name}</h1>
        </>
   

    )
}

export default Person;
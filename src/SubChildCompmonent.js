import React, { useContext } from "react";
import { UserContext } from "./UseContaxt";

const SubChildCompmonent = (props) => {

  const data = useContext(UserContext);

  console.log(data);

  const { firstName, lastName, email } = data;

  return (

    <div>

      <h3>Sub child component</h3>

      <div>firstName:{firstName}</div>

      <div>lastname:{lastName}</div>

      <div>email:{email}</div>
    
      <div>
      <h2>Child Component</h2>
      <button onClick={props.onButtonClick}>Click me</button>
    </div>

    </div>

  );

};

 

export default SubChildCompmonent;
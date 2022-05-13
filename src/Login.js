import React from 'react';
import { useState ,useContext } from 'react';
//import LoginContext from "./LoginContext";

function Login() {
//   const {setUsername ,setShowProfile} =useContext(LoginContext);

  return (
    <div>
      <input
        type="text"
        placeholder="username..."
        // onChange={(e) => {
        //   setUsername(e.target.value);
        // }}
      />
      <input type="text" placeholder="Password..." />
      {/* <button onClick={() =>{setShowProfile(true)}}> Login</button> */}
    </div>
  );
}
export default Login;

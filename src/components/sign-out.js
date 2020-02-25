import React, {useState} from "react";
import "../styles.css";

// import ajax from '../lib/ajax'
// import axios from 'axios';

const SignOut = (props) => {
    // console.log("logOut: ", logOut);
    const logOut = () => {
      console.log(props)

      // window.localStorage.setItem(, undefined)
      window.localStorage.removeItem("token");
      console.log(window.localStorage.getItem("token"));
      props.history.push('/signin');
    }

  return (
    <button className="signOut" onClick={logOut}>Sign out</button>
  )
};

export default SignOut

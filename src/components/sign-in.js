import React, {useState} from "react";
import ajax from '../lib/ajax'
import axios from 'axios';
import {
Route,
Link,
HashRouter as Router, Redirect,
} from 'react-router-dom';
// let AUTH_TOKEN
const SignIn = (props) => {

  const [email, setEmail] = useState("Joely@gmail.com")
  const [password, setPassword] = useState("abc123")

  const signIn = (e) => {
    e.preventDefault()
    ajax.signIn(email, password)
      .then(res => {
        console.log("successfull sign in: ", res)
        console.log("token: ", res.data.token);
        window.localStorage.setItem("token", res.data.token)
        window.localStorage.setItem("userId", res.data.user.id)
        axios.defaults.headers.common['Authorization'] = res.data.token;
        console.log('header in signin', axios.defaults.headers.common['Authorization']);
        props.history.push('/user');
      })
      .catch(
        err => {
          console.warn(err);
        }
      )

      setEmail(undefined)
      setPassword(undefined)
  }

  const handleEmail = (e) => {
    let email = e.target.value
    setEmail(email)
  }
  const handlePassword = (e) => {
    let password = e.target.value
    setPassword(password)
  }

  return(
    <div className="signInForm">
      <form onSubmit={signIn}>
        <label>Email:</label>
        <input type="text" onChange={handleEmail} value="harry@gamil.com"/>
        <label>password:</label>

        <input type="text" onChange={handlePassword} value="abc123"/>
          <input type="submit"/>
      </form>
    </div>
  )
};

export default SignIn

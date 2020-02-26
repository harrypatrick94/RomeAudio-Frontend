import React, {useState} from "react";
import ajax from '../lib/ajax'
import axios from 'axios';
import "../styles.css";
// let AUTH_TOKEN
const SignIn = (props) => {

  const [email, setEmail] = useState("harry@gmail.com")
  const [password, setPassword] = useState("123456")

  const signIn = (e) => {
    e.preventDefault()
    ajax.signIn(email, password)
      .then(res => {
        // res.header("Access-Control-Allow-Origin", '*')
        // console.log("successfull sign in: ", res)
        console.log("token created: ", res.data.token);
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
    <div className="container">
    <div className="signInForm">
      <form onSubmit={signIn}>
        <ul className="signInFormUl">
          <li className="signInFormLi">
            <label>Email</label>
          </li>
          <li className="signInFormLi">
            <input type="text" onChange={handleEmail} value="harry@gmail.com"/>
          </li>
          <li className="signInFormLi">
            <label>Password</label>
          </li>
          <li className="signInFormLi">
            <input type="text" onChange={handlePassword} value="123456"/>
          </li>
          <li className="signInFormLi">
            <input type="submit"/>
          </li>
        </ul>
      </form>
    </div>
    </div>
  )
};

export default SignIn

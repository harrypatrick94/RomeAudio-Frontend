import React, {useState} from "react";
import {Link} from "react-router-dom"
import ajax from '../lib/ajax'
import axios from 'axios';
import "../styles.css";

const Register = (props) => {
  const [userName, setUserName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const register = (e) => {

    ajax.registerUser(userName, email, password)
      .then(res => {
        console.log("successfull sign up ", res)
        // sign in on sign up
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
        // this.$emit(res.data)
      })
      .catch(
        err => {
          console.warn(err);
        }
      )


        console.log("after");
      setUserName(undefined)
      setEmail(undefined)
      setPassword(undefined)
  }
  const handleUserName = (e) => {
    let name = e.target.value
    setUserName(name)
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
      <div className="registerForm">
        <form onSubmit={register}>
          <ul className="registerFormUl">
            <li className="registerFormLi">
              <label>User name</label>
            </li>
            <li className="registerFormLi">
              <input type="text" className="input" onChange={handleUserName}/>
            </li>
            <li className="registerFormLi">
              <label>Email</label>
            </li>
            <li className="registerFormLi">
              <input type="text" className="input" onChange={handleEmail}/>
            </li>
            <li className="registerFormLi">
              <label>password</label>
            </li>
            <li className="registerFormLi">
              <input type="text" className="input" onChange={handlePassword}/>
            </li>
            <li >
              <input type="submit" className="signInUp"/><Link to="/signin">Sign in</Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
};

export default Register

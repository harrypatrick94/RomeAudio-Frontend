import React, {useState} from "react";
import ajax from '../lib/ajax'
import "../styles.css";

const Register = () => {
  const [userName, setUserName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const register = (e) => {

    ajax.registerUser(userName, email, password)
      .then(res => {
        console.log("successfull sign up ", res)
        this.$emit(res.data)
      })
      .catch(
        err => {
          console.warn(err);
        }
      )
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
              <input type="text" onChange={handleUserName}/>
            </li>
            <li className="registerFormLi">
              <label>Email</label>
            </li>
            <li className="registerFormLi">
              <input type="text" onChange={handleEmail}/>
            </li>
            <li className="registerFormLi">
              <label>password</label>
            </li>
            <li className="registerFormLi">
              <input type="text" onChange={handlePassword}/>
            </li>
            <li className="registerFormLi">
              <input type="submit"/>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
};

export default Register

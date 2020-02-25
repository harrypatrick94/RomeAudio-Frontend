import React, {useState} from "react";
import ajax from '../lib/ajax'

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
    <div className="registerForm">
      <form onSubmit={register}>
        <label>User name:</label>
        <input type="text" onChange={handleUserName}/>
        <label>Email:</label>
        <input type="text" onChange={handleEmail}/>
        <label>password:</label>
        <input type="text" onChange={handlePassword}/>
        <input type="submit"/>
      </form>
    </div>
  )
};

export default Register

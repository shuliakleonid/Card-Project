import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './Login.scss'
import Spinner from '../../components/spinner/Spinner';
import axios from 'axios';
import {setInterval} from 'timers';

const Login: FC<any> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [validPassword, setValidPassword] = useState<boolean>(false)
  const isLoading = false


  useEffect(()=>{
    const date = Date.now()

    axios.get("http://localhost:7542/2.0/ping/?frontTime="+date.toString()).then(r=>console.log(r)).catch(e=>console.log(e))
    axios.post("http://localhost:7542/2.0/auth/login/",{email: "nya-admin@nya.nya",password: "1qazxcvBG",
      rememberMe: false}).then(r=>console.log(r)).catch(e=>console.log(e))

  },[])
  const changeEmail = ({target}: ChangeEvent<HTMLInputElement>) => {
    setValidEmail(false)
    setEmail(target.value)
  }

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setValidPassword(false)
    setPassword(e.target.value)
  }
  const onSubmit = () => {
    const pattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (!pattern.test(email)) {
      setValidEmail(true)
    }
    if (password.length < 6) {
      setValidPassword(true)
    }
  }

  return (
      <div className="container">
        <div className="box">
          <h2>Login</h2>
          {isLoading
              ? (<Spinner/>)
              : (<form action="">
                <div className="inputBox">
                  <input type="text" required={true} value={email} onChange={changeEmail}/>
                  <label>Email</label>
                </div>
                <div className="inputBox">
                  <input type="password" required={true} value={password} onChange={changePassword}/>
                  <label>Password</label>
                </div>
                {validEmail && <p className="error">Enter valid email</p>}
                {validPassword && <p className="error">Enter longer password more then 6 symbols</p>}
                <input type="submit" value="Submit" onClick={onSubmit}/>
              </form>)
          }
        </div>
      </div>
  )

};

export default Login;

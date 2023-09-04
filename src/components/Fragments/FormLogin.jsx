import React, { useEffect, useRef, useState } from 'react'
import InputForm from '../Elements/Input/InputForm'
import { login } from '../../services/auth.services';

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const handleLogin = (e) => {
    e.preventDefault(); //prevent default agar tidak reload halaman

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/kasir"
      } else {
        setLoginFailed(res.response.data.message)
        console.log(res)
      }
    })
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleLogin}>
        <InputForm 
            label="Username"
            type="text"
            placeholder="John Doe"
            name="username"
            ref={usernameRef}
        />
        <InputForm 
            label="Password"
            type="password"
            placeholder="********"
            name="password"
        />
        <button className='bg-cyan-800 text-white font-bold rounded w-full h-10' type='submit'>Log In</button>
        {loginFailed && <div className="text-red-500 font-medium text-center mt-5">Username/Password Salah</div>}
    </form>
  )
}

export default FormLogin
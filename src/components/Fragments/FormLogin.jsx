import React from 'react'
import InputForm from '../Elements/Input/InputForm'

const FormLogin = () => {
  return (
    <form>
        <InputForm 
            label="Username"
            type="text"
            placeholder="John Doe"
            name="username"
            ref={username}
        />
        <InputForm 
            label="Password"
            type="password"
            placeholder="********"
            name="password"
        />
    </form>
  )
}

export default FormLogin
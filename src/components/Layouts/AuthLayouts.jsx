import React from 'react'
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
    const {children, title, type} = props;
  return (
    <div className='flex justify-center bg-cyan-100 min-h-screen items-center'>
      <div className="w-full max-w-xs">
          <h1 className="text-cyan-800 text-3xl font-bold mb-2">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details.</p>
          {children}

          <p className='my-5 text-center text-slate-500 font-medium text-sm'>
            {type === 'login' ? "Don't have an account?" : 'Already have an account?'}
            {type === 'login' ? <Link className='text-cyan-800' to="/register"> Call Your Boss</Link> : <Link className='text-cyan-800' to="/login"> Login</Link>}
          </p>
      </div>
    </div>
  )
}

export default AuthLayouts
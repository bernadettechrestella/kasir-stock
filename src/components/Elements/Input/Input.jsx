import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const {type, placeholder, name} = props;

  return (
    <input 
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
        className='text-sm border rounded w-full py-2 px-3 text-slate-70 placeholder:opacity-50'    
    />
  )
})

export default Input
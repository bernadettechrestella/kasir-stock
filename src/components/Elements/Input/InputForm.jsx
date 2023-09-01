import React, { forwardRef } from 'react'
import Label from './Label';
import { Input } from 'postcss';

const InputForm = forwardRef((props, ref) => {
    const {label, name, type, placeholder} = props;

    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} id={name} ref={ref}/>
        </div>
    )
})

export default InputForm
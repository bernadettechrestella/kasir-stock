import React from 'react'
import { addToCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CardProduct = (props) => {
    const {image, title, id} = props;
    const dispatch = useDispatch();

  return (
    <div>
        <img src={image} className='rounded-t-2xl h-[100px] w-full border border-cyan-800 cursor-pointer'
             onClick={() => dispatch(addToCart({id, qty: 1}))}/>
        <div className='rounded-b-2xl border border-cyan-800 text-center font-semibold cursor-default'>
            <h1>{title.substring(0, 14)}</h1>
        </div>
    </div>
  )
}

export default CardProduct
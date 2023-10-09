import React from 'react'
import { addToCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CardProduct = (props) => {
    const {image, title, id} = props;
    const dispatch = useDispatch();

  return (
    <div>
      <div className='hidden md:block'>
        <img src={image} className='rounded-t-2xl h-[100px] w-full border border-cyan-800 cursor-pointer'
             onClick={() => dispatch(addToCart({id, qty: 1}))}/>
        <div className='rounded-b-2xl border border-cyan-800 text-center font-semibold cursor-default'>
            <h1>{title.substring(0, 14)}</h1>
        </div>
      </div>

      {/* Mobile view */}
      <div className='block md:hidden'>
        <div className='grid grid-cols-3 gap-3 border-b-2 py-2'
          onClick={() => dispatch(addToCart({id, qty: 1}))}>
          <div className='col-span-1'>
            <img src={image} alt="" />
          </div>
          <div className='col-span-2 my-auto'>
            <h1>{title.substring(0, 14)}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
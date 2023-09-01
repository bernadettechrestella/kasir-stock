import React, { useEffect, useState } from 'react'
import { ImMinus, ImPlus } from 'react-icons/im'
import { TbDiscount2 } from 'react-icons/tb'
import { MdOutlineCancel } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/slices/cartSlice'
import Tanggal from '../Elements/Tanggal'
import Jam from '../Elements/Jam'
import useTotalPrice from '../../hooks/useTotalPrice'

const Nota = (props) => {
  const {products} = props;
  const cart = useSelector((state) => state.cart.data);
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (products.length > 0 && cart.length >= 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;  
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]);

  return (
    <div className='bg-neutral-200 h-screen min-w-[400px]'>
        <div className='flex flex-col h-screen'>

          <div className='overflow-auto flex-1'>
          <div className='flex-none pt-5 pb-2 px-3 '>
              <div className='text-center'>
                <h3 className='font-bold'>Toko SUNDORO</h3>
                <h1>Jl. Tahiti, Bintuni Timur</h1>
                <h1>Teluk Bintuni - Papua Barat</h1>
                <h1>Telp. 0852 540 88 999</h1>
              </div>

            <div className='text-right'>
              <h1>ID: 20032301</h1>
            </div>

              <div className='border-b border-t border-gray-700'>
                <div className='flex justify-between'>
                  <h1>Nama Kasir</h1>
                  <Jam />
                  <Tanggal />
                </div>
              </div>
          </div>

            {products.length > 0 && cart.map((item) => {
              const product = products.find((product) => product.id === item.id);
              return (
                <div className='px-3' key={item.id}>
                  <div className='flex justify-between items-center'>
                    <h1 className='font-semibold'>{product.title.substring(0, 15)}</h1>
                    <BsFillTrashFill size={15} className='text-red-500'
                      onClick={() => dispatch(removeFromCart({id: item.id}))}/>
                  </div>
                  <div className='flex pl-3 justify-between'>
                    <h1>{parseFloat(product.price*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
                    <div className='flex gap-2'>
                      {/* <ImMinus className='mt-1 text-cyan-800' onClick={() => setCount(count - 1)}/> */}
                      <h1 className='border border-cyan-800 rounded-md px-2'>{item.qty}</h1>
                      {/* <ImPlus className='mt-1 text-cyan-800' onClick={() => setCount(count + 1)}/> */}
                    </div>
                    <h1>{parseFloat(product.price*item.qty*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
                  </div>
                </div>
              )
            })}
          </div>
              

          {/* <div className='flex-none'> */}
            {/* <div className='border-b border-t border-gray-700 mt-2 mb-2 mx-3'>
                <div className='flex justify-between font-semibold'>
                  <h1 className='font-bold'>Jumlah</h1>
                  <h1>Rp 135.000</h1>
                </div>
                <div className='flex justify-between font-semibold'>
                  <h1>Diskon</h1>
                  <h1>Rp 5.000</h1>
                </div>
            </div>
                <div className='flex justify-between mb-2 mx-4'>
                  <button className='text-center' data-modal-target="defaultModal" data-modal-toggle="defaultModal">
                    <TbDiscount2 size={50} className='text-cyan-800'/>
                    <p className='text-sm'>Diskon</p>
                  </button>

                  <button className='text-center'>
                    <MdOutlineCancel size={50} className='text-red-500'/>
                    <p className='text-sm'>Cancel</p>
                  </button>
                </div> */}

            <div className='mt-5 bottom-0'>
              <Link to='/checkout'>
              <button className='bg-cyan-800 text-white w-full h-[60px] rounded-t-2xl font-semibold text-2xl'>
              {parseFloat(useTotalPrice(products)*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
              </button>
              </Link>
            </div>
          {/* </div> */}
        </div>
    </div>
  )
}

export default Nota
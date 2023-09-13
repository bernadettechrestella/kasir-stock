import React, { useEffect, useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/slices/cartSlice'
import Tanggal from '../Elements/Tanggal'
import Jam from '../Elements/Jam'
import useTotalPrice from '../../hooks/useTotalPrice'
import useLogin from '../../hooks/useLogin'

const Nota = (props) => {
  const {products, uangTunai, kembalian} = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const firstName = useLogin();

  const location = useLocation();
  const path = location.pathname; //mendapatkan path dari window yang terbuka
  const isCheckoutPage = path === '/checkout';
  const isPrintNotaPage = path === '/printNota';

  const [stopJam, setStopJam] = useState(false);

  useEffect(() => {
    if (path === '/printNota') {
      setStopJam(true)
    } else {
      setStopJam(false)
    }
  }, [path]);

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
                  <h1>{firstName}</h1>
                  <Jam stop={stopJam}/>
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
                    {isCheckoutPage || !isPrintNotaPage && (
                      <BsFillTrashFill size={15} className='text-red-500 cursor-pointer'
                      onClick={() => dispatch(removeFromCart({id: item.id}))}/>
                      )}
                  </div>
                  <div className='flex pl-3 justify-between'>
                    <h1>{parseFloat(product.price*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
                    <div className='flex gap-2'>
                      {/* <ImMinus className='mt-1 text-cyan-800' onClick={() => setCount(count - 1)}/> */}
                      <h1 className={`${isCheckoutPage || isPrintNotaPage ? 'font-semibold' : 'border border-cyan-800 rounded-md px-2 font-semibold'}`}>{item.qty}</h1>
                      {/* <ImPlus className='mt-1 text-cyan-800' onClick={() => setCount(count + 1)}/> */}
                    </div>
                    <h1>{parseFloat(product.price*item.qty*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
                  </div>
                </div>
              )
            })}
          </div>

            <div className='mt-5 bottom-0'>
              {!isPrintNotaPage ? (
                <Link to='/checkout'>
                  <button
                    className='bg-cyan-800 text-white w-full h-[60px] rounded-t-2xl font-semibold text-2xl'
                    disabled={isCheckoutPage || cart.length === 0}>
                      {parseFloat(useTotalPrice(products)*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                  </button>
                </Link>
              ) : (
                <div className='mx-2'>
                  <div className='flex justify-between border-b border-t border-gray-700 font-bold'>
                    <h1>Total</h1>
                    <h1>{parseFloat(useTotalPrice(products)*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
                  </div>
                  <div>
                    <div className='flex justify-between'>
                      <h1>Tunai</h1>
                      <h1>{(uangTunai*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
                    </div>
                    <div className='flex justify-between'>
                      <h1>Kembalian</h1>
                      <h1>{(kembalian*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
                    </div>
                    <div className='text-center mb-2 mt-4 text-xs text-gray-700 font-mono'>
                      <h1>Barang yang sudah dibeli tidak dapat dikembalikan.</h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          {/* </div> */}
        </div>
    </div>
  )
}

export default Nota
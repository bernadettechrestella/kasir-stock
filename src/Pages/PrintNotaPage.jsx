import React from 'react'
import Nota from '../components/Fragments/Nota'
import { useGetProducts } from '../hooks/useProducts'
import { Link, useLocation } from 'react-router-dom'
import { BsCheckCircle } from 'react-icons/bs'
import { AiFillPrinter, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { resetCart } from '../redux/slices/cartSlice'

const PrintNotaPage = () => {
  const location = useLocation();
  const { uangTunai, kembalian } = location.state || {};
  const {products} = useGetProducts();
  const dispatch = useDispatch();

  const handleDeleteProducts = () => {
    dispatch(resetCart());
  }

  return (
    <div className='flex'>
        <div className='w-[400px] flex-1'>
            <Nota products={products} uangTunai={uangTunai} kembalian={kembalian}/>
        </div>
        <div className='w-full'>
          <div className='justify-end flex m-5'>
            <Link to='/kasir'>
              <AiOutlineCloseCircle size={45} className='text-red-500'
                onClick={handleDeleteProducts}/>
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <div className='text-center'>
              <BsCheckCircle size={65} className='text-green-500 w-full my-6'/>
              <h1 className='font-bold pb-2 text-lg'>Pembayaran Berhasil</h1>
              <h1 className='font-bold text-red-500 text-lg'>Kembalian: {(kembalian*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</h1>
              <button>
                <AiFillPrinter size={50} className='text-cyan-800 mt-10 ml-4'/>
                <p className='font-semibold'>Cetak Nota</p>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PrintNotaPage
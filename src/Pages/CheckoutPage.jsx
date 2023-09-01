import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nota from '../components/Fragments/Nota'
import { getProducts } from '../services/product.service';
import useTotalPrice from '../hooks/useTotalPrice';

const CheckoutPage = () => {
    const [products, setProducts] = useState({});
    const totalPrice = useTotalPrice(products);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        })
    }, [])

  return (
    <div className='flex-1 min-w-0'>
        <div className='h-screen w-full flex'>
        <div className='flex-none'>
            <Nota products={products}/>
        </div>
            
        <div className='flex-1'>
            <div className='m-10'>
                <div className='border-b border-gray-400 mb-6'>
                    <div className='grid grid-cols-5 gap-2'>
                        <h1 className='col-span-1 mr-10 font-bold'>Tunai</h1>
                        <button className='col-span-2 rounded-xl h-[40px] border border-cyan-800 bg-white text-black text-center font-semibold'>
                            {parseFloat(totalPrice*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                        </button>
                        <button className='col-span-2 rounded-xl border border-cyan-800 text-black text-center font-semibold'>Rp 150.000</button>
                    </div>
                    <div className='grid grid-cols-5 gap-2 mt-3'>
                        <input
                            placeholder='Masukkan Jumlah Uang Tunai' 
                            className='col-end-6 col-span-4 h-[40px] rounded-xl border border-cyan-800 text-black text-center'>
                        </input>
                    </div>
                    <div className='grid grid-cols-5 gap-2 mb-6 mt-3 items-center'>
                        <h1 className='col-end-5 col-span-1 font-semibold text-end'>Kembalian</h1>
                        <h1 className='col-end-6 col-span-1 rounded-xl border border-red-700 text-red-600 font-bold text-center'>
                            Rp 20.000
                        </h1>
                    </div>
                </div>
                <div className='border-b border-gray-400 mb-6'>
                    <div className='grid grid-cols-5 gap-2'>
                        <h1 className='col-span-1 mr-10 font-bold'>Transfer Bank</h1>
                        <button className='col-span-4 rounded-xl border border-cyan-800 bg-white text-black text-center font-semibold'>
                            <h1>Bank Mandiri</h1>
                            <h1>Joko</h1>
                            <h1>16 0000 1869 003</h1>
                        </button>
                    </div>
                    <div className='grid grid-cols-5 gap-2 my-2'>
                        <button className='col-end-6 col-span-4 rounded-xl border border-cyan-800 text-black text-center font-semibold'>
                            <h1>Bank BRI</h1>
                            <h1>Joko</h1>
                            <h1>16 0000 1869 003</h1>
                        </button>
                    </div>
                    <div className='grid grid-cols-5 gap-2 mt-2 mb-6 items-center'>
                        <h1 className='col-end-5 col-span-2 font-semibold text-sm text-end'>Nomor Rekening Pengirim 4 Digit Terakhir</h1>
                        <input
                            placeholder='0 0 0 0' 
                            className='col-end-6 col-span-1 h-[40px] rounded-xl border border-cyan-800 text-black text-center tracking-widest'>
                        </input>
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-2'>
                    <Link to='/kasir' className='col-end-5 col-span-1'>
                        <div className='h-[40px] rounded-xl font-bold text-center pt-1.5 border border-cyan-800 text-black'>
                            Batal
                        </div>
                    </Link>
                    <button className='col-end-6 col-span-1 h-[40px] rounded-xl font-bold text-center items-center bg-cyan-800 text-white'>Bayar</button>
                </div>
            </div>
        </div>
        </div>

            {/* <div className='hidden sm:block right-0 bottom-0 flex-none'>
                
            </div> */}
        
    </div>
  )
}

export default CheckoutPage
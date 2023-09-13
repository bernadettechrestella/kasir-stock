import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nota from '../components/Fragments/Nota'
import useTotalPrice from '../hooks/useTotalPrice';
import {BsCheckCircle, BsQuestionCircle} from 'react-icons/bs'
import { useGetProducts } from '../hooks/useProducts';

const CheckoutPage = () => {
    const { products } = useGetProducts();
    const totalPrice = useTotalPrice(products);
    const [selectedButton, setSelectedButton] = useState(null);
    const [kembalian, setKembalian] = useState(0);
    const [uangTunai, setUangTunai] = useState(0);
    const [showPopup1, setShowPopup1] = useState(false);
    const [pembayaran, setPembayaran] = useState(false);
    const navigate = useNavigate();

    let pembulatan = Math.ceil(totalPrice/10) * 10;

    const handleBayar1Click = () => {
        setShowPopup1(true);
    }
    
    const handleUang = () => {
        navigate('/printNota', { state: { uangTunai: uangTunai, kembalian: kembalian }});
    }

    const handleButtonClicked = (buttonIndex) => {
        setKembalian(0);
        setSelectedButton(buttonIndex);
        setUangTunai(totalPrice);

        if (buttonIndex === 1) {
            setKembalian(pembulatan-totalPrice);
            setUangTunai(pembulatan);
        }
    }

    const handleUangTunaiChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        event.target.value = parseInt(value).toLocaleString('id-ID', {style: "currency", currency: "IDR", minimumFractionDigits: 0});
        
        setUangTunai(value);
        const parsedValue = parseInt(value);
        setKembalian((parsedValue/10000) - totalPrice);
    }

  return (
    <div>
        <div className='h-screen w-full flex'>
        <div className='flex-none'>
            <Nota products={products}/>
        </div>
            
        <div className='flex-1'>
            <div className='m-10'>
                <div className='border-b border-gray-400 mb-6'>
                    <div className='grid grid-cols-5 gap-2'>
                        <h1 className='col-span-1 mr-10 font-bold'>Tunai</h1>
                        <button
                            className={`col-span-2 rounded-xl h-[40px] border border-cyan-800 bg-white text-black text-center font-semibold
                                        ${selectedButton === 0 ? 'bg-blue-900 text-white' : ''}`}
                            onClick = {() => {handleButtonClicked(0), setPembayaran(true)}}>
                            {(totalPrice*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                        </button>
                        <button
                            className={`col-span-2 rounded-xl h-[40px] border border-cyan-800 bg-white text-black text-center font-semibold
                            ${selectedButton === 1 ? 'bg-blue-900 text-white' : ''}`}
                            onClick = {() => {handleButtonClicked(1), setPembayaran(true)}}>
                            {((pembulatan)*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                        </button>
                    </div>
                    <div className='grid grid-cols-5 gap-2 my-3'>
                        <input
                            placeholder='Masukkan Jumlah Uang Tunai' 
                            className='col-end-6 col-span-4 h-[40px] rounded-xl border border-cyan-800 text-black font-semibold text-center'
                            onClick = {() => {
                                setSelectedButton(null);
                                setKembalian(0);
                                setPembayaran(true)}}
                            onKeyDown = {(event) => {
                                if (event.key === 'Backspace' || /[0-9]/.test(event.key)) {
                                    handleUangTunaiChange(event)
                                } else {
                                    event.preventDefault(); //untuk menghentikan input
                                }}}
                            onChange = {handleUangTunaiChange}
                            >
                        </input>
                    </div>
                    {/* <div className='grid grid-cols-5 gap-2 mb-6 mt-3 items-center'>
                        <h1 className='col-end-5 col-span-1 font-semibold text-end'>Kembalian</h1>
                        <h1 className='col-end-6 col-span-1 rounded-xl border border-red-700 text-red-600 font-bold text-center'>
                            {(kembalian*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                        </h1>
                    </div> */}
                </div>
                {/* <div className='border-b border-gray-400 mb-6'>
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
                </div> */}

                <div className='grid grid-cols-5 gap-2'>
                    <Link to='/kasir' className='col-end-5 col-span-1'>
                        <div className='h-[40px] rounded-xl font-bold text-center pt-1.5 border border-cyan-800 text-black'>
                            Batal
                        </div>
                    </Link>
                    <button 
                        className='col-end-6 col-span-1 h-[40px] rounded-xl font-bold text-center items-center bg-cyan-800 text-white'
                        onClick={handleBayar1Click}
                        disabled={pembayaran === false}>
                            Bayar
                    </button>
                </div>
            </div>
            
        </div>
        </div>
        {showPopup1 && (
            <>
                <div className='popup-overlay'></div>
                <div className="popup-card bg-white shadow-xl w-80 h-52 rounded-xl border-2 border-cyan-800 flex flex-col">
                    <div className='flex-1 text-center'>
                        <BsQuestionCircle size={45} className='text-red-500 w-full my-6'/>
                        <h1 className='font-bold'>Apakah Anda Yakin Ingin Membayar?</h1>
                    </div>
                    <div className='flex flex-row justify-around h-10 font-semibold'>
                        <button className='bg-white text-cyan-800 border-cyan-800 border-t w-full rounded-bl-xl' onClick={() => setShowPopup1(false)}>Batal</button>
                        <button className='bg-cyan-800 text-white w-full rounded-br-lg' onClick={handleUang}>Bayar</button>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default CheckoutPage
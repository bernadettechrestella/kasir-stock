import React, { useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {GiReceiveMoney} from 'react-icons/gi'
import {TbFileInvoice} from 'react-icons/tb'
import {BsFillInboxesFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const SideBar = ({}) => {
    const activeLink = 'rounded-full p-1 flex text-cyan-800 bg-white'
    const normalLink = 'hover:bg-white hover:rounded-full hover:text-cyan-800 flex text-white p-1'

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const handleClose = () => {
        setNav(!nav)
    }

  return (
      <div className='flex-none'>
        <div className='hidden sm:h-screen sm:w-[70px] sm:bg-cyan-800 sm:block bg-fixed'>
            <div className='flex flex-col items-center pt-4'>
                    {/* <NavLink to='/user' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <CgProfile size={40} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold'>User</p> */}

                    <NavLink to='/kasir' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <GiReceiveMoney size={40} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold'>Kasir</p>

                    {/* <NavLink to='/invoice' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <TbFileInvoice size={40} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold'>Invoice</p> */}

                    <NavLink to='/stock' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <BsFillInboxesFill size={40} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold'>Stock</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar
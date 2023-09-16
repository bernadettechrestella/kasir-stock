import React, { useEffect, useState } from 'react'
import SideBar from '../components/Fragments/SideBar'
import { useUsers } from '../hooks/useUsers'
import useLogin from '../hooks/useLogin';

const UserPage = () => {
    const { userID } = useLogin();
    const users = useUsers();

    const [dataUser, setDataUser] = useState(() => {
        const storedDataUser = localStorage.getItem('dataUser'); //mengambil data dari local storage
        return storedDataUser ? JSON.parse(storedDataUser) : null; //mengubah data menjadi objek
    });

    useEffect(() => {
        if (users.length > 0 && userID > 0) {
            setDataUser(users[userID - 1])
        }
    }, [users, userID])

    useEffect(() => {
        localStorage.setItem('dataUser', JSON.stringify(dataUser));
    }, [dataUser]);

    if (dataUser) {
        console.log(dataUser.id)
    }


  return (
    <>
        <div className='flex'>
            <SideBar />
            <div className='flex-1 min-w-0'>
                <div className='flex justify-center min-h-screen items-center'>
                <div className='w-full grid grid-cols-7 p-5'>
                    <div className='col-start-2 col-span-2'>
                        <img src={dataUser.image} alt="#" className='border border-cyan-800'/>
                    </div>
                    <div className='col-start-4 col-span-1'>
                        <p className='mb-5'>ID</p>
                        <p className='mb-5'>First Name</p>
                        <p className='mb-5'>Last Name</p>
                        <p className='mb-5'>Gender</p>
                        <p className='mb-5'>Email</p>
                        <p className='mb-5'>Phone</p>
                        <p className='mb-5'>Birth Date</p>
                    </div>
                    <div className='col-start-5 col-span-2'>
                            <input type="text" className='border border-cyan-800 rounded-lg h-8 mb-3 w-full px-4' value="" disabled/>
                            <input type="text" className='border border-cyan-800 rounded-lg h-8 mb-3 w-full px-4' value="" disabled/>
                            <input type="text" className='border border-cyan-800 rounded-lg h-8 mb-3 w-full px-4' value="" disabled/>
                            <input type="text" className='border border-cyan-800 rounded-lg h-8 mb-3 w-full px-4' value="" disabled/>
                            <input type="text" className='border border-cyan-800 rounded-lg h-8 mb-3 w-full px-4' value="" disabled/>
                            <input type="text" className='border border-cyan-800 rounded-lg h-8 mb-3 w-full px-4' value="" disabled/>
                            <input type="text" className='border border-cyan-800 rounded-lg h-8 mb-3 w-full px-4' value="" disabled/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserPage
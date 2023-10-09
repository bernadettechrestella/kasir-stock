import React, { Fragment, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { BsBasket2Fill } from 'react-icons/bs'
import CardProduct from '../components/Fragments/CardProduct'
import Nota from '../components/Fragments/Nota'
import SideBar from '../components/Fragments/SideBar'
import useLogin from '../hooks/useLogin'
import { useGetProducts } from '../hooks/useProducts'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const KasirPage = () => {
    const {products, category, filteredProducts, handleCategoryChange} = useGetProducts();
    const [searchText, setSearchText] = useState('');
    useLogin();

    const cart = useSelector((state) => state.cart.data);

  return (
    <Fragment>
        <div className='hidden md:block'>
        <div className='flex'>
            <SideBar />
            <div className='flex-1 min-w-0'>
                <div className='h-screen w-full flex'>
                    
                    <div className='overflow-auto flex-1'>
                        <div className='m-5'>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                
                            <select className='rounded-2xl border-2 border-cyan-800 p-2 w-full' 
                                onChange={handleCategoryChange}>
                                <option>Semua Produk</option>
                                {category.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </select>

                                <div className='rounded-2xl border-2 border-cyan-800 p-2 w-full flex justify-between'>
                                    <form>
                                        <input 
                                            onChange={(e) => setSearchText(e.target.value)}
                                            type="text"
                                            placeholder='Cari Barang'/>
                                    </form>
                                    <BiSearchAlt size={25} className='text-cyan-800'/>
                                </div>
                            </div>

                            {/* item */}
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 grid-flow-row gap-4'>
                                {products.length > 0 && filteredProducts?.filter((product) => {
                                    if (searchText === '') {
                                        return product
                                    } else if (product && product.title && product.title.toLowerCase().includes(searchText.toLowerCase())) {
                                        return product
                                    }
                                }).map((product) => (
                                    <CardProduct
                                        key={product.id}
                                        id={product.id} 
                                        image={product.images[0]}
                                        title={product.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='hidden sm:block right-0 bottom-0 flex-none'>
                        <Nota products={products}/>
                    </div>
                </div>
            </div>
      </div>
      </div>

{/* Mobile view */}
      <div className='block md:hidden w-full h-screen'>
        <Link to='/cart'>
            <BsBasket2Fill size={45} className='absolute bottom-4 right-4 bg-cyan-800 p-2 rounded-full text-white'/>
        </Link>
        <p className='absolute bottom-12 right-3 bg-yellow-500 rounded-full p-1 text-center'>
            {cart.reduce((total, item) => total + item.qty, 0)}
        </p>
        <div className='grid grid-cols-2 m-4 gap-1'>
                                
            <select className='rounded-2xl border-2 border-cyan-800 p-2' 
                onChange={handleCategoryChange}>
                <option>Semua Produk</option>
                {category.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
    
            <div className='rounded-2xl border-2 border-cyan-800 flex p-2 gap-1'>
                <input 
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder='Cari Barang'
                    className='w-5/6'/>
                <BiSearchAlt size={24} className='text-cyan-800'/>
            </div>
        </div>
        <div className='w-full h-screen px-4 overflow-auto'>
            {products.length > 0 && filteredProducts?.filter((product) => {
                if (searchText === '') {
                    return product
                } else if (product && product.title && product.title.toLowerCase().includes(searchText.toLowerCase())) {
                    return product
                }
            }).map((product) => (
                <CardProduct
                    key={product.id}
                    id={product.id} 
                    image={product.images[0]}
                    title={product.title}
                />
            ))}
        </div>
      </div>
    </Fragment>
  )
}

export default KasirPage
import React, { Fragment, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import CardProduct from '../components/Fragments/CardProduct'
import Nota from '../components/Fragments/Nota'
import SideBar from '../components/Fragments/SideBar'
import useLogin from '../hooks/useLogin'
import { useGetProducts } from '../hooks/useProducts'

const KasirPage = () => {
    const {products, category, filteredProducts, handleCategoryChange} = useGetProducts();
    const [searchText, setSearchText] = useState('');
    useLogin();

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default KasirPage
import React, { Fragment, useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { BiSearchAlt } from 'react-icons/bi'
import CardProduct from '../components/Fragments/CardProduct'
import Nota from '../components/Fragments/Nota'
import { getProductCategory, getProducts } from '../services/product.service'
import SideBar from '../components/Fragments/SideBar'

const KasirPage = () => {
    const [products, setProducts] = useState({});
    const [category, setCategory] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
            setFilteredProducts(data);
        }),
        getProductCategory((data) => {
            setCategory(data);
        })
    }, [])

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;

        if (selectedCategory === "Semua Produk") {
            setFilteredProducts(products);
        } else {
            const filteredProducts = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(filteredProducts);
        }
    }

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
                                    type="text"
                                    placeholder='Cari Barang'/>
                            </form>
                            <BiSearchAlt size={25} className='text-cyan-800'/>
                        </div>
                    </div>

                    {/* item */}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 grid-flow-row gap-4'>
                        {products.length > 0 && filteredProducts.map((product) => (
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
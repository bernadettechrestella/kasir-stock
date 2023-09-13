import React, { useState } from 'react'
import SideBar from '../components/Fragments/SideBar'
import { useGetProducts } from '../hooks/useProducts'
import { FaEye, FaPencilAlt } from 'react-icons/fa'
import { BsArrowDownUp } from 'react-icons/bs' 

const StockPage = () => {
    const {products, category, filteredProducts, setFilteredProducts, handleCategoryChange} = useGetProducts();
    const [sortDirection, setSortDirection] = useState(null);

    const handleSortClick = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
          if (sortDirection === 'asc') {
            return a.stock - b.stock;
          } else {
            return b.stock - a.stock;
          }
        });
    
        setFilteredProducts(sortedProducts);
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      };

  return (
    <>
    <div className='flex'>
        <SideBar/>
        <div className="flex-1 min-w-0">
            <div className='grid grid-cols-8 gap-4 mx-5 my-5'>
                <div className='col-start-1 col-span-3'>
                    <select className='rounded-2xl border-2 border-cyan-800 p-2 w-full' 
                        onChange={handleCategoryChange}>
                        <option>Semua Produk</option>
                        {category.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='col-end-9 col-span-1'>
                    <button className='bg-cyan-800 text-white w-full h-[40px] rounded-2xl font-semibold'>Tambah</button>
                </div>
            </div>

            <div className="flex flex-col h-[650px] mx-5 border-2 border-cyan-800">
                <div className="flex-grow overflow-auto">
                    <table className="w-full relative">
                    <thead>
                        <tr className='text-center items-center'>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">ID</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">Gambar</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">Nama</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">Harga Jual</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">
                                <div className='flex justify-around'>
                                    <h1>Stock</h1>
                                    <BsArrowDownUp className='mt-1 cursor-pointer text-blue-700' onClick={handleSortClick}/>
                                </div>
                            </th>
                            <th scope="col" className="sticky top-0 bg-white"></th>
                            <th scope="col" className="sticky top-0 bg-white"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 && filteredProducts.map((product, index) => (
                            <tr
                            className = {`border-b bg-cyan-800 text-center font-semibold ${index % 2 === 0 ? 'bg-opacity-40' : 'bg-opacity-10'}`}
                            key={product.id}>
                                <td className="px-6 py-4 font-medium">{product.id}</td>
                                <td className="px-4 py-4 w-44">
                                    <img src={product.images[0]} className='w-36'/>
                                </td>
                                <td className="px-4 py-4">{product.title}</td>
                                <td className="px-4 py-4">{(product.price*10000).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}</td>
                                <td className="px-4 py-4">{product.stock}</td>
                                <td className=''>
                                    <FaPencilAlt className='text-red-600'/>
                                </td>
                                <td className=''>
                                    <FaEye className='text-blue-800'/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default StockPage
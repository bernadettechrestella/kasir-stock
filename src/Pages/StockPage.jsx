import React from 'react'
import SideBar from '../components/Fragments/SideBar'
import { useGetProducts } from '../hooks/useProducts'
import { FaEye, FaPencilAlt } from 'react-icons/fa'

const StockPage = () => {
    const {products, category, filteredProducts, handleCategoryChange} = useGetProducts();

  return (
    <>
    <div className='flex font-mono'>
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
                        <tr className='text-center'>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">ID</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">Gambar</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">Nama</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">Harga Jual</th>
                            <th scope="col" className="sticky top-0 px-6 py-4 bg-white">Stock</th>
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
                                <td className="px-4 py-4">{product.price}</td>
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
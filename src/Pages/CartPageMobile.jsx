import React from 'react'
import Nota from '../components/Fragments/Nota'
import { useGetProducts } from '../hooks/useProducts';

const CartPageMobile = () => {
    const {products} = useGetProducts();
    
  return (
    <div>
        <Nota products={products}/>
    </div>
  )
}

export default CartPageMobile
import { useEffect, useState } from "react";
import { getProductCategory, getProducts } from "../services/product.service";

export const useGetProducts = (callback) => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;

        if (selectedCategory === "Semua Produk") {
            setFilteredProducts(products);
        } else {
            const updatedFilteredProducts = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(updatedFilteredProducts);
        }
    }

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
            setFilteredProducts(data);
            callback(data); //callback untuk mengirim data
        }),
        getProductCategory((data) => {
            setCategory(data);
        })
    }, []);

    return { products, category, filteredProducts, handleCategoryChange };
}
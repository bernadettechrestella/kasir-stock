import axios from "axios";

export const getProducts = (callback) => {
    axios
    .get('https://dummyjson.com/products?limit=0')
    .then((res) => {
        callback(res.data.products);
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getProductCategory = (callback) => {
    axios
    .get('https://dummyjson.com/products/categories')
    .then((res) => {
        callback(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}
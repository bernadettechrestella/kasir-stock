import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useTotalPrice(products) {
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (products.length > 0 && cart.length >= 0) {
        const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;  
        }, 0);
        setTotalPrice(sum);
        localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    return totalPrice;

}
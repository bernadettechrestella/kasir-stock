import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find((item) => item.id === action.payload.id)

            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const {id} = action.payload;
            const itemIndex = state.data.findIndex((item) => item.id === id); //findIndex untuk mencari index dari item
            
            if (itemIndex !== -1) { //jika itemIndex tidak -1
                const item = state.data[itemIndex]; //mengambil item untuk dihapus
                
                if (item.qty > 0){ //jika qty lebih dari 0
                    item.qty--; //kurangi qty
                    if (item.qty === 0){ //jika qty 0
                        state.data.splice(itemIndex, 1); //hapus item
                    }
                }
            }
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
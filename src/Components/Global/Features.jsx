import { createSlice } from "@reduxjs/toolkit";
// import { Toast } from "react-toastify/dist/components";
const initialState = {
    Allproducts: [],
    CartItem: localStorage.getItem("cartItem")
        ? JSON.parse(localStorage.getItem("cartItem"))
        : [],
    CartTotalQuantity: 0,
    CartTotalAmount: 0,
    AllCategories: [],

};

const Features = createSlice({
    name: "product",
    initialState,

    reducers: {
        GetAllProduct: (state, { payload }) => {
            state.Allproducts = payload
            // console.log(payload);
        },
        GetAllCategories: (state, { payload }) => {
            state.AllCategories = payload
            console.log(payload);
        },
        AddToChart(state, action) {

            const itemIndex = state.CartItem.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.CartItem[itemIndex].cartQuantity += 1;

            } else {
                const tempProduct = { ...action.payload, cartQuantity: +1 };
                state.CartItem.push(tempProduct);

                localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
            };
            // removeFromCart(state, action) {
            //     const nextCartItems = state.CartItem.filter(
            //         (CartItem) => CartItem.id !== action.id
            //     )
            //     state.CartItem = nextCartItems;

            // };
 }


    }
})
export const { GetAllProduct, AddToChart, GetAllCategories} = Features.actions;
export default Features.reducer; 
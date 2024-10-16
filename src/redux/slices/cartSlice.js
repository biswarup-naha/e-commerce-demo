import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { productId} = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.productId === productId
            );            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            // state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const { productId } = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.productId !== productId
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const getItemsSelector = createSelector(
    (state) => state.cart,
    (state) => state
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
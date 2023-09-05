import { createSlice } from '@reduxjs/toolkit';

/**
 * productsArray = [
 *  {
 *      productID
 *      amount
 *  }
 * ]
 */

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsArray: [],
        totalAmount: 0,
    },
    reducers: {
        fetchFromLocalStorage(state) {
            const cartJSON = window.localStorage.getItem('cart');
            if (!cartJSON) return;
            const cart = JSON.parse(cartJSON);

            state.productsArray = cart.productsArray;
            state.totalAmount = cart.totalAmount;
        },
        addToCart(state, action) {
            console.log(action.payload, state.productsArray, state.totalAmount);
            const payloadProduct = action.payload;
            const existingProductIndex = state.productsArray.findIndex(
                (product) => product.productID === payloadProduct.productID
            );
            console.log(existingProductIndex);
            if (existingProductIndex === -1) {
                state.productsArray.push(payloadProduct);
                state.totalAmount++;
            } else {
                state.productsArray[existingProductIndex].amount +=
                    payloadProduct.amount;
            }
            state.totalAmount = state.productsArray.length;

            window.localStorage.setItem('cart', JSON.stringify(state));
        },
        remoteToCart(state, action) {
            const payloadID = action.payload;
            const existingProductIndex = state.productsArray.findIndex(
                (product) => product.productID === payloadID
            );
            console.log(existingProductIndex);

            if (existingProductIndex !== -1) {
                state.productsArray.splice(existingProductIndex, 1);
            }

            state.totalAmount = state.productsArray.length;

            window.localStorage.setItem('cart', JSON.stringify(state));
        },
        changeAmount(state, action) {
            const payload = action.payload;
            const indexProduct = state.productsArray.findIndex(
                (product) => product.productID === payload.productID
            );
            if (indexProduct === -1) return;

            state.productsArray[indexProduct].amount = payload.amount;

            if (state.productsArray[indexProduct].amount < 1) {
                state.productsArray.splice(indexProduct, 1);
                state.totalAmount = state.productsArray.length;
            }

            window.localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, remoteToCart, fetchFromLocalStorage, changeAmount } =
    cartSlice.actions;

export default cartSlice.reducer;

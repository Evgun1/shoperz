import { createSlice } from '@reduxjs/toolkit';

/**
 * @constant
 * @type {object{productsArray: [{productID: number}], wishlistIsVisible: boolean}}
 */
const initialState = {
    productsArray: [],
};

const wishlist = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        init(state, action) {
            state.productsArray = action.payload ? action.payload : [];
        },
        addToWishlist(state, action) {
            const payloadProduct = action.payload;
            const existingProductIndex = state.productsArray.findIndex(
                (product) => product.productID === payloadProduct.productID
            );
            if (existingProductIndex === -1) {
                state.productsArray.push(payloadProduct);
                fetch(
                    'https://shopez-53fe0-default-rtdb.europe-west1.firebasedatabase.app/HomePage/wishlist.json',
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(state.productsArray),
                    }
                ).then((res) => console.log(res));
            }
        },
        removeFromWishlist(state, action) {
            const productId = action.payload;
            const existingProductIndex = state.productsArray.findIndex(
                (product) => product.productID === productId
            );

            if (existingProductIndex !== -1) {
                state.productsArray.splice(existingProductIndex, 1);

                fetch(
                    'https://shopez-53fe0-default-rtdb.europe-west1.firebasedatabase.app/HomePage/wishlist.json',
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(state.productsArray),
                    }
                ).then((res) => console.log(res));
            }
        },
    },
});

export default wishlist.reducer;

export const { addToWishlist, removeFromWishlist, init } = wishlist.actions;

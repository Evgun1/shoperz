import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cart';
import { responsiveReducer } from './responsive';
import wishlistReducer from './wishlist/wishlist';
import popup from './popup/popup';
import search from './search/search';

export default configureStore({
    reducer: {
        search: search,
        popup: popup,
        cart: cartReducer,
        wishlist: wishlistReducer,
        responsive: responsiveReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cart';
import uiSlice from './cart/ui-slice';
import { responsiveReducer } from './responsive';
import uiSliceMenu from './mobileMenu/ui-sliceMobile';

export default configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiSlice,
        uiMobileMenu: uiSliceMenu,
        responsive: responsiveReducer
    },
});

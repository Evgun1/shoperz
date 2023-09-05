import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state, action) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export default uiSlice.reducer;
export const uiAction = uiSlice.actions;

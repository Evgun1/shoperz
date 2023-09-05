import { createSlice } from '@reduxjs/toolkit';

const uiSliceMenu = createSlice({
    name: 'mobileMenu',
    initialState: { menuIsVisible: false },
    reducers: {
        toggle(state) {
            state.menuIsVisible = !state.menuIsVisible;
        },
    },
});

export default uiSliceMenu.reducer
export const uiActionMenu = uiSliceMenu.actions

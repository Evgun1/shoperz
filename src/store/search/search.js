import { createSlice } from '@reduxjs/toolkit';

const search = createSlice({
    name: 'search',
    initialState: {
        arrayProducts: null,
    },
    reducers: {
        update(state, action) {
            state.arrayProducts = action.payload ? action.payload : null;
        },
    },
});

export default search.reducer;
export const searchcAtions = search.actions;

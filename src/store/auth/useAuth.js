import { createSlice } from '@reduxjs/toolkit';

const useAuth = createSlice({
    name: 'Auth',
    initialState: {
        email: null,
        token: null,
        id: null,
    },
    reducers: {
        setUsers(state, acion) {
            state.email = acion.payload.email;
            state.token = acion.payload.token;
            state.id = acion.payload.id;
        },
        removeUsers(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export default useAuth.reducer;
export const { setUsers, removeUsers } = useAuth.actions;

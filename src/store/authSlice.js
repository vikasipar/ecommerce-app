import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isCartVisible: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token;
        },
        clearAuth: (state) => {
            state.token = null;
        },
        toggleCart: (state) => {
            state.isCartVisible = !state.isCartVisible;
        }
    },
});

export const {setAuth, clearAuth, toggleCart} = authSlice.actions;
export const authReducer = authSlice.reducer;
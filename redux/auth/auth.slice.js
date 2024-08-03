import { createSlice } from "@reduxjs/toolkit";
import { ThisUser, RegisterUser, LoginUser } from "./auth.reducer"; // Adjust the import path as needed

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    success: false,
    user: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(ThisUser.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMessage = null;
                state.success = false;
            })
            .addCase(ThisUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.success = true;
            })
            .addCase(ThisUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMessage = action.payload;
                state.success = false;
            })
            .addCase(RegisterUser.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMessage = null;
                state.success = false;
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.success = true;
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMessage = action.payload;
                state.success = false;
            })
            .addCase(LoginUser.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMessage = null;
                state.success = false;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.success = true;
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMessage = action.payload;
                state.success = false;
            });
    }
});

export const { reducer: authReducer } = authSlice;
export default authReducer;

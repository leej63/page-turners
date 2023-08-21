import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../services/auth-thunks";


const authSlice = createSlice({
    name: 'auth',
    initialState: { currentUser: null, id: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            state.id = payload._id;
        },
        [loginThunk.rejected]: (state, { payload }) => {
            state.currentUser = null;
            state.id = null;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
            state.id = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [profileThunk.rejected]: (state, { payload }) => {
            state.currentUser = null;
            state.id = null;
        },
        [profileThunk.pending]: (state, action) => {
            state.currentUser = null;
            state.id = null;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            state.id = payload._id;
        },
    },
});
export default authSlice.reducer;
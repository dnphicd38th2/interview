import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicRequest } from '../requestMethods';

export const login = createAsyncThunk("auth/login", async (user) => {
    console.log("okie");
    const res = await publicRequest.post("/auth/login", user)
    return res.data
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    }, reducers: {
        // loginStart: (state) => {
        //     state.isFetching = true;
        // },
        // loginSuccess: (state, action) => {
        //     state.isFetching = false;
        //     state.currentUser = action.payload
        // },
        // loginFailure: (state) => {
        //     state.isFetching = false;
        //     state.error = true;
        // },
    },
    extraReducers: {
        //get User
        [login.pending]: (state) => {
            state.isFetching = true;
        },
        [login.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        [login.rejected]: (state) => {
            state.isFetching = false;
            state.error = true;
        }

    }
}
)
// export const { loginSuccess, loginFailure, loginStart } = userSlice.actions
export default userSlice.reducer
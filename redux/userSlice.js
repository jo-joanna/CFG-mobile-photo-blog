import {createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    username: 'username',
    initialState: {
        username: 'elle',
        email: 'elle@gmail.com',
        password: 'elle1'
    },
    reducers: {
        update: (state, action) => {
                action.payload = {
                    state. = action.payload.username;
                    state.email = action.payload.email;
                    state.password = action.payload.password;
                },
        },
});

export const {update} = userSlice.actions;
export default userSlice.reducer;

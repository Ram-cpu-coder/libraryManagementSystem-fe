import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        // setUser reducer is another way of creating a reducer in slice
        // you can reference another way of creating the reducer in bookSlice
        setUser: (state, { payload }) => {
            state.user = payload
        },
        resetUser: (state => {
            state.user = {};
        }),

    }
})

export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoggedIn: false
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
            state.isLoggedIn = false;
        }),
        setIsLogged: (state => {
            state.isLoggedIn = true
        }),
        setIsLoggedOut: (state => {
            state.isLoggedIn = false
        })

    }
})

export const { setUser, resetUser, setIsLogged, setIsLoggedOut } = userSlice.actions

export default userSlice.reducer
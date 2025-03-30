import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: [],
    user: {},
    students: [],
    isLoggedIn: false,
    menu: ''
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
        setStudents: (state, action) => {
            state.students = action.payload
        },
        setAllUsers: (state, { payload }) => {
            state.allUsers = payload
        },
        setMenu: (state, action) => {
            state.menu = action.payload
        }
        ,
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

export const { setUser, setAllUsers, resetUser, setIsLogged, setIsLoggedOut, setIsPrivate, setIsPublic, setStudents, setMenu } = userSlice.actions

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    adminBooks: [],
    isUpdate: false
}
const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        setAdminBooks: (state, action) => {
            state.adminBooks = action.payload;
        },
        setIsUpdate: (state) => {
            state.isUpdate = !state.isUpdate
        },
        setUpdateBook: (state) => {
            state.books = action.payload;
        }
    }
})

export const { setBooks, setAdminBooks, setIsUpdate } = bookSlice.actions
export default bookSlice.reducer
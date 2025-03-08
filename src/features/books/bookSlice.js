import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    adminBooks: []
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
        }
    }
})

export const { setBooks, setAdminBooks } = bookSlice.actions
export default bookSlice.reducer
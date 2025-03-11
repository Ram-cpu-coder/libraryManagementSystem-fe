import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    selectedBook: {}
}
const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        setSelectedBook: (state, action) => {
            state.selectedBook = action.payload
        }
    }
})

export const { setBooks, setAdminBooks, setIsUpdate, setAddBook, setUpdateBook } = bookSlice.actions
export default bookSlice.reducer
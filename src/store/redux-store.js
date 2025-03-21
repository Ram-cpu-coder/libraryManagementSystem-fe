import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../slice/pizzaSlice.js"
import bookReducer from "../features/books/bookSlice.js"
import userReducer from "../features/users/userSlice.js"
import borrowReducer from "../features/borrows/borrowSlice.js"

export default configureStore({
    reducer: {
        pizza: pizzaReducer,
        books: bookReducer,
        users: userReducer,
        borrows: borrowReducer
    }
})
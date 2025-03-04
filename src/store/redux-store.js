import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../slice/pizzaSlice.js"
import bookReducer from "../features/books/bookSlice.js"

export default configureStore({
    reducer: {
        pizza: pizzaReducer,
        books: bookReducer
    }
})
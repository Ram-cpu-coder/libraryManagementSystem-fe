
import { fetchAdminLevelBooks, fetchAllBookApi } from "./bookAxios";
import { setAdminBooks, setBooks } from "./bookSlice";

export const getAllBookAction = () => async (dispatch) => {
    // call api
    const data = await fetchAllBookApi()
    // console.log("Public books", data.books)
    // update the book store
    dispatch(setBooks(data.books));
}

export const fetchAdminLevelBooksAction = () => async (dispatch) => {
    const data = await fetchAdminLevelBooks()
    // console.log(data, "books from action")
    dispatch(setAdminBooks(data.books))
}

import { fetchAdminLevelBooks, fetchAllBookApi, updateBookApi } from "./bookAxios";
import { setAdminBooks, setBooks, setIsUpdate } from "./bookSlice";

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
export const isUpdateToggle = () => (dispatch) => {
    dispatch(setIsUpdate())
}
export const updateBookAction = () => async (dispatch) => {
    const data = await updateBookApi();
    console.log(data, "updatedbook")
    dispatch(setUpdateBook(data.books))
}
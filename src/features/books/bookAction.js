
import { addBookApi, fetchAllBookApi, updateBookApi } from "./bookAxios";
import { setAddBook, setBooks, setIsUpdate } from "./bookSlice";

export const getAllBookAction = (isPrivate) => async (dispatch) => {
    // call api
    const data = await fetchAllBookApi(isPrivate)
    // update the book store
    dispatch(setBooks(data.books));
}

export const isUpdateToggle = () => (dispatch) => {
    dispatch(setIsUpdate())
}
export const updateBookAction = () => async (dispatch) => {
    const data = await updateBookApi();
    console.log(data, "updatedbook")
    dispatch(setUpdateBook(data.books))
}
export const addBookAction = (form) => async (dispatch) => {
    const data = await addBookApi({ ...form });
    console.log(data.status)
    dispatch(setAddBook(data.user))
}
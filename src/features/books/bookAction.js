
import { addBookApi, deleteBookApi, fetchAllBookApi } from "./bookAxios";
import { setBooks } from "./bookSlice";

export const getAllBookAction = (isPrivate) => async (dispatch) => {
    // call api
    const data = await fetchAllBookApi(isPrivate)
    // update the book store
    dispatch(setBooks(data.books));
}

export const addBookAction = (form) => async (dispatch) => {
    await addBookApi({ ...form });

    dispatch(getAllBookAction(true));
}

export const deleteBookAction = (_id) => async (dispatch) => {
    await deleteBookApi(_id)
    dispatch(getAllBookAction(true))
} 
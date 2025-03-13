
import { addBookApi, deleteBookApi, fetchAllBookApi, updateBookApi } from "./bookAxios";
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
export const updateBookAction = (form, navigate) => async (dispatch) => {
    const data = await updateBookApi({ ...form })
    navigate("/admin")
    dispatch(getAllBookAction(true))
    console.log("Updated:", data)
}
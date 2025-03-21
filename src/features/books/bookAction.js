
import { toast } from "react-toastify";
import { addBookApi, deleteBookApi, fetchAllBookApi, updateBookApi } from "./bookAxios";
import { setBooks } from "./bookSlice";

export const getAllBookAction = (isPrivate) => async (dispatch) => {
    // call api
    const data = await fetchAllBookApi(isPrivate)
    // update the book store
    dispatch(setBooks(data.books));
}

export const addBookAction = (form) => async (dispatch) => {
    const data = await addBookApi(form);
    dispatch(getAllBookAction(true));
    toast[data.status](data.message)
}

export const deleteBookAction = (_id) => async (dispatch) => {
    const data = await deleteBookApi(_id)
    dispatch(getAllBookAction(true))
    // toast.error(data.book + "deleted successfully!")
    toast[data.status](data.message)
}
export const updateBookAction = (formObj, navigate) => async (dispatch) => {
    const data = await updateBookApi(formObj)
    dispatch(getAllBookAction(true))
    console.log("Updated:", data)
    toast[data.status](data.message)

    return data.status === "success";
}
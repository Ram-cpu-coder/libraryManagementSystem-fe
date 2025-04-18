
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
    const pending = addBookApi(form);
    toast.promise(pending, {
        pending: "Adding Book..."
    })
    const data = await pending;
    dispatch(getAllBookAction(true));
    toast[data.status](data.message)
}

export const deleteBookAction = (_id) => async (dispatch) => {
    const pending = deleteBookApi(_id);
    toast.promise(pending, {
        pending: "Deleting Book..."
    })
    const data = await pending
    dispatch(getAllBookAction(true))
    // toast.error(data.book + "deleted successfully!")
    toast[data.status](data.message)
}
export const updateBookAction = (formObj, navigate) => async (dispatch) => {
    const pending = updateBookApi(formObj)
    toast.promise(pending, { pending: "Updating Book..." })
    const data = await pending
    dispatch(getAllBookAction(true))
    // console.log("Updated:", data)
    toast[data.status](data.message)

    return data.status === "success";
}
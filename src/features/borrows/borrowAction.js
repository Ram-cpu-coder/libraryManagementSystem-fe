import { toast } from "react-toastify";
import { createBorrowApi, getBorrowApi, getUserBorrowApi, returnBorrowApi } from "./borrowAxios.js";
import { setBorrows, setUserBorrows } from "./borrowSlice.js";
import { getAllBookAction } from "../books/bookAction.js";

export const createBorrowAction = (borrowObj) => async (dispatch) => {
    const pending = createBorrowApi(borrowObj);
    toast.promise(pending, {
        pending: "Please Wait!",

    })

    const { data, status, message } = await pending;
    toast[status](message)
    dispatch(getBorrowAction())
    dispatch(getAllBookAction())
}
// get all the borrows
export const getBorrowAction = () => async (dispatch) => {
    const response = await getBorrowApi();
    dispatch(setBorrows(response.data))
}

// get borrows by the userId
export const getUserBorrows = () => async (dispatch) => {
    const response = await getUserBorrowApi()
    dispatch(setUserBorrows(response.borrowedBooks))
}
// return borrow action 
export const returnBorrowAction = (id, status) => async (dispatch) => {
    const response = await returnBorrowApi(id, status)
    dispatch(setBorrows(response.data))
    dispatch(getUserBorrows())
    response && toast[response.status](response.message)
} 
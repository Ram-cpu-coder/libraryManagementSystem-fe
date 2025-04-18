import { toast } from "react-toastify";
import { createBorrowApi, deleteBorrowApi, getBorrowApi, getUserBorrowApi, returnBorrowApi } from "./borrowAxios.js";
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
    const pending = returnBorrowApi(id, status)
    toast.promise(pending, {
        pending: "Updating ..."
    })
    const response = await pending
    dispatch(setBorrows(response.data))
    dispatch(getUserBorrows())
    response && toast[response.status](response.message)
}

// delete borrow action 
export const deleteBorrowAction = (_id) => async (dispatch) => {
    const pending = deleteBorrowApi(_id);

    toast.promise(pending, {
        pending: "Deleting!!!"
    })

    const { data, status, message } = await pending;
    toast[status](message);
    console.log(data, "deletedBorrow")
    dispatch(getBorrowAction())
}
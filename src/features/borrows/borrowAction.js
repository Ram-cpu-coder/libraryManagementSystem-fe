import { toast } from "react-toastify";
import { createBorrowApi, getBorrowApi, getUserBorrowApi, returnBorrowApi } from "./borrowAxios.js";
import { setBorrows, setUserBorrows } from "./borrowSlice.js";

export const createBorrowAction = () => async (dispatch) => {
    const { data } = await createBorrowApi();
    // dispatch(setBorrows({ data }))
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
export const returnBorrowAction = (id) => async (dispatch) => {
    const response = await returnBorrowApi(id)
    dispatch(setBorrows(response.data))
    dispatch(getUserBorrows())
    response && toast[response.status](response.message)
} 
import { createBorrowApi, getBorrowApi } from "./borrowAxios.js";
import { setBorrows } from "./borrowSlice.js";

export const createBorrowAction = () => async (dispatch) => {
    const { data } = await createBorrowApi();
    // dispatch(setBorrows({ data }))
}

export const getBorrowAction = () => async (dispatch) => {
    const response = await getBorrowApi();
    console.log(response.data)
    dispatch(setBorrows(response.data))
}
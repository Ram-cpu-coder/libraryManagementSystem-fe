
import { fetchAllBookApi } from "./bookAxios";
import { setBooks } from "./bookSlice";

export const getAllBookAction = () => async (dispatch) => {
    // call api
    const data = await fetchAllBookApi()
    // update the book store
    dispatch(setBooks(data.books));
}
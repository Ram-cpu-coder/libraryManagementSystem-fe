import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    borrows: [],
    userBorrows: []
}
const borrowSlice = createSlice({
    name: "borrows",
    initialState,
    reducers: {
        setBorrows: (state, action) => {
            state.borrows = action.payload;
        },
        setUserBorrows: (state, action) => {
            state.userBorrows = action.payload;
        }
    }
})
export const { setBorrows, setUserBorrows } = borrowSlice.actions
export default borrowSlice.reducer
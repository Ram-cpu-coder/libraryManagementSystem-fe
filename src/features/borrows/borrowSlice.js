import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    borrows: [],
}
const borrowSlice = createSlice({
    name: "borrows",
    initialState,
    reducer: {
        setBorrows: (state, action) => {
            state.borrows = action.payload;
        }
    }
})
export const { setBorrows } = borrowSlice.actions
export default borrowSlice.reducer
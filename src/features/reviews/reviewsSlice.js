import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
    userReviews: []
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        setReviews: (state, action) => {
            state.reviews = action.payload;
        },
        setUserReview: (state, action) => {
            state.userReviews = action.payload;
        }
    }
})

export const { setReviews, setUserReview } = reviewSlice.actions
export default reviewSlice.reducer
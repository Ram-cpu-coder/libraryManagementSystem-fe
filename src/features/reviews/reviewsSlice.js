import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
    userReviews: [],
    publicReviews: []
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
        },
        setPublicReviews: (state, action) => {
            state.publicReviews = action.payload
        }
    }
})

export const { setReviews, setUserReview, setPublicReviews } = reviewSlice.actions
export default reviewSlice.reducer
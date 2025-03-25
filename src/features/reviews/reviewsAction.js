import { fetchAdminReviewsApi, postReviewApi } from "./reviewsAxios"
import { setReviews } from "./reviewsSlice"

export const fetchAdminReviewsAction = () => async (dispatch) => {
    const { data } = await fetchAdminReviewsApi()
    // console.log(response)
    dispatch(setReviews(data))
}

export const postReviewAction = () => async (dispatch) => {
    const pending = postReviewApi()

    toast.promise(pending,
        { pending: "Posting Review!" }
    )
    const { status, message, data } = await pending;

    toast[status](message);

    dispatch(setReviews(data));
}
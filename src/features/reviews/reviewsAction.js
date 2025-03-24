import { fetchAdminReviewsApi } from "./reviewsAxios"
import { setReviews } from "./reviewsSlice"

export const fetchAdminReviewsAction = () => async (dispatch) => {
    const { data } = await fetchAdminReviewsApi()
    // console.log(response)
    dispatch(setReviews(data))
}
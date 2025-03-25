import { toast } from "react-toastify"
import { fetchAdminReviewsApi, postReviewApi } from "./reviewsAxios"
import { setReviews } from "./reviewsSlice"
import { getUserBorrows } from "../borrows/borrowAction"

export const fetchAdminReviewsAction = () => async (dispatch) => {
    const { data } = await fetchAdminReviewsApi()
    // console.log(response)
    dispatch(setReviews(data))
}

export const postReviewAction = (form) => async (dispatch) => {
    const pending = postReviewApi(form)

    toast.promise(pending,
        { pending: "Posting Review!" }
    )
    const { status, message, data } = await pending;

    toast[status](message);

    dispatch(setReviews(data));
    dispatch(getUserBorrows())
    if (status == "success") {
        return true;
    }

}
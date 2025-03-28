import { toast } from "react-toastify"
import { deleteReviewByIdApi, fetchAdminReviewsApi, postReviewApi, updateReviewApi } from "./reviewsAxios"
import { setReviews } from "./reviewsSlice"
import { getUserBorrows } from "../borrows/borrowAction"

export const fetchAdminReviewsAction = () => async (dispatch) => {
    const { data } = await fetchAdminReviewsApi()
    // console.log()
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
    dispatch(fetchAdminReviewsAction())
    dispatch(getUserBorrows())

    if (status == "success") {
        return true;
    }

}

export const updateReviewAction = ({ _id, status }) => async (dispatch) => {
    const response = await updateReviewApi({ _id, status });
    console.log(response, "updateReview")
    dispatch(setReviews(response.response))
    if (response.status === "success") {
        dispatch(fetchAdminReviewsAction())
    }
}

export const deleteReviewByIdAction = (_id) => async (dispatch) => {
    const pending = deleteReviewByIdApi(_id);
    toast.promise(pending, {
        pending: "Deleting Review!"
    })

    const { status, message, data } = await pending;
    // console.log(data, "data")
    toast[status](message)
    dispatch(fetchAdminReviewsAction())
}
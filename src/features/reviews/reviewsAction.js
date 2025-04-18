import { toast } from "react-toastify"
import { deleteReviewByIdApi, fetchAdminReviewsApi, fetchPublicReviews, fetchUsersReviewsApi, postReviewApi, updateReviewApi } from "./reviewsAxios"
import { setPublicReviews, setReviews, setUserReview } from "./reviewsSlice"
import { getUserBorrows } from "../borrows/borrowAction"

export const fetchUsersReviewsAction = () => async (dispatch) => {
    const { reviews, status } = await fetchUsersReviewsApi()
    // console.log(reviews, "userReview")
    if (status === "success") {
        dispatch(setUserReview(reviews))
    }
}
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
    const pending = updateReviewApi({ _id, status });
    toast.promise(pending, { pending: "Updating Review..." })
    const response = await pending
    if (response.status === "success") {
        dispatch(setReviews(response.response))
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

export const fetchPublicReviewsAction = () => async (dispatch) => {
    const { data } = await fetchPublicReviews()
    dispatch(setPublicReviews(data))
}
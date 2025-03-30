import { apiProcessor } from "../../helpers/axiosHelper";
const reviewEP = import.meta.env.VITE_APP_REVIEW_URL;

export const fetchUsersReviewsApi = () => {
    return apiProcessor({
        method: "get",
        url: reviewEP + "/user-review",
        isPrivate: true,
    })
}
export const fetchAdminReviewsApi = () => {
    return apiProcessor({
        method: "get",
        url: reviewEP + "/admin-reviews",
        isPrivate: true,
    })
}
export const fetchPublicReviews = () => {
    return apiProcessor({
        method: "get",
        url: reviewEP,
        isPrivate: true
    })
}

export const postReviewApi = (form) => {
    return apiProcessor({
        method: "post",
        url: reviewEP + "/add-review",
        isPrivate: true,
        data: form
    })
}

export const updateReviewApi = ({ _id, status }) => {
    return apiProcessor({
        method: "put",
        url: reviewEP + "/admin-edit-review",
        isPrivate: true,
        data: { _id, status }
    })
}

export const deleteReviewByIdApi = (_id) => {
    return apiProcessor({
        method: "delete",
        url: reviewEP + "/delete-review",
        isPrivate: true,
        data: { _id }
    })
}
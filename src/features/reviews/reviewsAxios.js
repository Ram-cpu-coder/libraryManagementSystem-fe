import { apiProcessor } from "../../helpers/axiosHelper";
const reviewEP = import.meta.env.VITE_APP_REVIEW_URL;

export const fetchAdminReviewsApi = () => {
    return apiProcessor({
        method: "get",
        url: reviewEP + "/admin-reviews",
        isPrivate: true,
    })
}
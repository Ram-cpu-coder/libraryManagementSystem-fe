import { apiProcessor } from "../../helpers/axiosHelper.js";
const authEP = import.meta.env.VITE_API_BASE_URL + "/auth"

export const loginApi = (loginObj) => {
    return apiProcessor({
        method: "post",
        url: authEP + "/login",
        data: loginObj,
        isPrivate: false,
        isRefreshToken: false,
    })
}

export const fetchUserData = () => {
    return apiProcessor({
        method: "get",
        url: authEP,
        isPrivate: true,
        isRefreshToken: false,
    })
}
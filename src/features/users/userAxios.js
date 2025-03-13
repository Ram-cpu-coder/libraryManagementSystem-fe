import { apiProcessor } from "../../helpers/axiosHelper.js";
const userEP = import.meta.env.VITE_APP_ROOT_URL + "/users";
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

export const fetchUserDataApi = () => {
    return apiProcessor({
        method: "get",
        url: authEP,
        isPrivate: true,
        isRefreshToken: false,
    })
}

export const createNewUserApi = (newUserObj) => {
    return apiProcessor({
        method: "post",
        url: userEP,
        isPrivate: true,
        data: newUserObj
    })
}
export const getStudentsApi = () => {
    return apiProcessor({
        method: "get",
        url: authEP + "/students",
        isPrivate: true,
        isRefreshToken: true
    })
}
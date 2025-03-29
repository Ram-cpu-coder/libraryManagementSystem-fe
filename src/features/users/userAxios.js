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

export const fetchUserDataApi = () => {
    return apiProcessor({
        method: "get",
        url: authEP,
        isPrivate: true,
        isRefreshToken: false,
    })
}

export const createNewUserApi = ({ ...form }) => {
    return apiProcessor({
        method: "post",
        url: authEP + "/register",
        isPrivate: false,
        data: form
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
export const updateUserProfileApi = (form) => {
    return apiProcessor({
        method: "put",
        url: authEP + "/edit-profile",
        isPrivate: true,
        data: form
    })
}

export const deleteUserApi = (_id) => {
    return apiProcessor({
        method: "delete",
        url: authEP + "/delete-user",
        isPrivate: true,
        data: { _id }
    })
}
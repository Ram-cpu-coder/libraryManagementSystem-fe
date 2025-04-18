import { apiProcessor } from "../../helpers/axiosHelper.js";

const rootEP = import.meta.env.VITE_APP_ASSET_URL;
const authEP = import.meta.env.VITE_API_BASE_URL + "/auth"
console.log(authEP, rootEP)
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
export const getAllUsersAPi = () => {
    return apiProcessor({
        method: "get",
        url: authEP + "/users",
        isPrivate: true
    })
}
export const updateUserProfileApi = (form) => {
    return apiProcessor({
        method: "put",
        url: authEP + "/edit-profile",
        isPrivate: true,
        contentType: "multipart/form-data",
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
export const verifyUserApi = ({ sessionId, token }) => {
    return apiProcessor({
        method: "get",
        url: rootEP + `/verify-user?sessionId=${sessionId}&t=${token}`
    })
}
export const verifyEmailAndSendOtpApi = (email) => {
    return apiProcessor({
        method: "post",
        url: rootEP + "/verify-user/verifyEmail",
        data: { email }
    })
}
export const verifyOtpApi = ({ email, Otp }) => {
    return apiProcessor({
        method: "post",
        url: rootEP + "/verify-user/verifyOtp",
        data: { email, Otp }
    })
}

export const verifyOtpAndUpdatePasswordApi = ({ email, Otp, password, confirmPassword }) => {
    return apiProcessor({
        method: "post",
        url: rootEP + "/verify-user/updatePassword",
        data: { email, Otp, password, confirmPassword }
    })
}
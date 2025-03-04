import { apiProcessor } from "../../helpers/axiosHelper";
const authEP = import.meta.env.VITE_API_BASE_URL + "/auth"


export const loginApi = (loginObj) => {
    return apiProcessor({
        method: "post",
        url: loginEP + "/auth/login",
        data: { loginObj },
        isPrivate: false,
        isRefreshToken: false,
    })
}
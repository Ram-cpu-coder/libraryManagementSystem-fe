import axios from "axios"
// const authEP = "import.meta.env.ROOT_URL"
const authEP = import.meta.env.VITE_API_BASE_URL + "/auth"

const getAccessJWT = () => {
    return sessionStorage.getItem("accessJWT");
}

const getRefreshJWT = () => {
    return localStorage.getItem("refreshJWT")
}

export const apiProcessor = async ({ method, url, data, isPrivate, isRefreshToken, contentType = 'application/json' }) => {

    const headers = {
        Authorization: isPrivate
            ? getAccessJWT()
            : isRefreshToken
                ? getRefreshJWT() = false
                : null,

        "Content-type": contentType
    }
    try {
        const response = await axios({
            method,
            url,
            data,
            headers
        })
        return response.data;
    } catch (error) {

        // 1. check error message for "jwt expired"
        if (error?.response?.data?.message == "jwt expired") {
            // call renew jwt token 
            // get the access token and store it in session storage

            const refreshData = apiProcessor({
                method: "get",
                url: authEP + "/renew-jwt",
                isPrivate: false,
                isRefreshToken: true,
            })
            if (refreshData && refreshData?.status == "success") {
                // update sessionStorage
                sessionStorage.setItem("accessJWT", refreshData.accessJWT)
                // return the original call
                return apiProcessor({
                    method,
                    url,
                    data,
                    isPrivate
                })
            } else {
                return {
                    status: "error",
                    message: "Error renewing refresh token"
                }
            }
        }

        const message = error?.response?.data?.message ?? error.message;
        return {
            status: "error",
            message,
        }
    }
}

export const renewAccessJWT = async () => {
    const { accessJWT } = await apiProcessor({
        method: "get",
        url: authEP + "/renew-jwt",
        isPrivate: true,
        isRefreshToken: true
    })

    sessionStorage.setItem("accessJWT", accessJWT)
    return accessJWT
}

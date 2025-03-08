import { apiProcessor } from "../../helpers/axiosHelper"

const bookApi = import.meta.env.VITE_API_BASE_URL;
// api 
export const fetchAllBookApi = () => {
    const apiObj = {
        method: "get",
        url: bookApi + "/books/pub-books",
        isPrivate: false,
        isRefreshToken: false,
    }
    return apiProcessor(apiObj)
}
export const fetchAdminLevelBooks = () => {
    return apiProcessor({
        method: "get",
        url: bookApi + "/books",
        isPrivate: true,
        isRefreshToken: true
    })
}
export const updateBookApi = () => {
    return apiProcessor({
        method: "put",
        url: bookApi + "/books",
        isPrivate: true,
        isRefreshToken: true
    })
}
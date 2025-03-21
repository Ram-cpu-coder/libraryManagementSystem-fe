import { apiProcessor } from "../../helpers/axiosHelper"

const bookApi = import.meta.env.VITE_API_BASE_URL;
// api 
export const fetchAllBookApi = (isPrivate) => {
    const apiObj = {
        method: "get",
        url: `${bookApi}/${isPrivate ? "books" : "books/pub-books"}`,
        isPrivate,
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
export const updateBookApi = ({ _id, ...formObj }) => {
    return apiProcessor({
        method: "put",
        url: bookApi + "/books",
        isPrivate: true,
        isRefreshToken: true,
        data: _id, ...formObj
    })
}
export const addBookApi = (form) => {
    return apiProcessor({
        method: 'post',
        url: bookApi + "/books/add",
        isPrivate: true,
        isRefreshToken: true,
        data: form,
        contentType: 'multipart/form-data'
    })
}
export const deleteBookApi = (_id) => {
    return apiProcessor({
        method: "delete",
        url: bookApi + "/books/" + _id,
        isPrivate: true,
        isRefreshToken: true
    })
}
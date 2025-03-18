import { apiProcessor } from "../../helpers/axiosHelper";

const borrowEp = import.meta.env.VITE_API_BASE_URL + "/borrow"

export const createBorrowApi = (borrowObj) => {
    return apiProcessor({
        method: "post",
        url: borrowEp,
        isPrivate: true,
        isRefreshToken: true,
        data: borrowObj
    })

}

// get all the borrows
export const getBorrowApi = () => {
    return apiProcessor({
        method: "get",
        url: borrowEp + "/get-all",
        isPrivate: true,
        isRefreshToken: true,
    })
}
// get user Borrows
export const getUserBorrowApi = () => {
    return apiProcessor({
        method: "get",
        url: borrowEp,
        isPrivate: true,
        isRefreshToken: true
    })
}
// returning the borrows
export const returnBorrowApi = (id) => {
    return apiProcessor({
        method: "put",
        url: borrowEp + "/" + id,
        isPrivate: true,
        isRefreshToken: true,
    })
}
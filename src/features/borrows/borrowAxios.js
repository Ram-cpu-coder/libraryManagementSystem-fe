import { apiProcessor } from "../../helpers/axiosHelper";

const borrowEp = import.meta.env.VITE_API_BASE_URL + "/borrow"

export const createBorrowApi = () => {
    return apiProcessor({
        method: "post",
        url: borrowEp,
        isPrivate: true,
        isRefreshToken: true,
    })

}

export const getBorrowApi = () => {
    return apiProcessor({
        method: "get",
        url: borrowEp,
        isPrivate: true,
        isRefreshToken: true,
    })
}
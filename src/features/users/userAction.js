import { fetchUserData, loginApi } from "./userAxios";
import { setUser } from "./userSlice";
export const loginAction = (form) => async (dispatch) => {
    // call the log in api
    const data = await loginApi({ ...form });
    console.log(data)
    // update the user store

    if (data.status === "success") {
        dispatch(setUser(data.user));
        // update the sesssion storage for access
        sessionStorage.setItem("accessJWT", data.accessToken);
        // updating the local storage for refresh
        localStorage.setItem("refreshJWT", data.refreshToken);
    };
}


export const getUserDetail = () => async (dispatch) => {
    // call api
    const data = await fetchUserData()
    console.log("fetchDAta", data)
    dispatch(setUser(data.user))
}
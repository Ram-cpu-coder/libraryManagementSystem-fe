import { loginApi } from "./userAxios";
import { useDispatch } from "react-redux";

export const loginAction = (form) => async (dispatch) => {
    // call the log in api
    const data = await loginApi({ ...form });

    // update the user store

    if (data.status === "success") {
        dispatch(setUser(data.user));
        // update the sesssion storage for access
        sessionStorage.setItem("accessJWT", data.accessToken);
        // updating the local storage for refresh
        localStorage.setItem("refreshJWT", data.refreshToken);

    };
} 
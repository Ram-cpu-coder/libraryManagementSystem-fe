import { fetchUserDataApi, loginApi } from "./userAxios";
import { resetUser, setIsLogged, setIsLoggedOut, setUser } from "./userSlice";
export const loginAction = (form, navigate) => async (dispatch) => {
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
        dispatch(setIsLogged())
        navigate("/user")
    };
}

export const userDataAction = () => async (dispatch) => {

    const data = await fetchUserDataApi()
    dispatch(setUser(data.user))
    // console.log(data.isPrivate)
}

export const logOutAction = () => async (dispatch) => {
    await dispatch(resetUser());
    sessionStorage.removeItem("accessJWT");
    localStorage.clear();
}

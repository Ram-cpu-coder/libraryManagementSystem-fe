import { fetchUserDataApi, loginApi } from "./userAxios";
import { setIsLogged, setUser } from "./userSlice";
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
    console.log("fetchUSerDAta", data)
    dispatch(setUser(data.user))
}
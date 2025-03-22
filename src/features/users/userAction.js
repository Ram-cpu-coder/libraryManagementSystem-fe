import { toast } from "react-toastify";
import { renewAccessJWT } from "../../helpers/axiosHelper";
import { createNewUserApi, fetchUserDataApi, getStudentsApi, loginApi } from "./userAxios";
import { resetUser, setStudents, setUser } from "./userSlice";

export const loginAction = (form, navigate) => async (dispatch) => {
    // call the log in api
    const pending = loginApi({ ...form });
    const data = await pending;

    toast.promise(pending, {
        pending: "Logging ... "
    })

    // update the user store

    if (data.status === "success") {
        dispatch(setUser(data.user));
        // update the sesssion storage for access
        sessionStorage.setItem("accessJWT", data.accessToken);
        // updating the local storage for refresh
        localStorage.setItem("refreshJWT", data.refreshToken);
        navigate("/admin")
    };

    toast[data.status](data.message)
}


// creating the user 
export const createNewUser = (form, navigate) => async (dispatch) => {
    const pending = createNewUserApi(form)
    const data = await pending;
    toast.promise(pending, {
        pending: "Registering ... "
    })
    data.status === "success" ? navigate("/signin") : ""
    console.log(data)
    toast[data.status](data.message)
}



// individual user detail
export const userDataAction = () => async (dispatch) => {

    const data = await fetchUserDataApi()
    dispatch(setUser(data.user))
}

export const logOutAction = () => async (dispatch) => {
    await dispatch(resetUser());
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT")
}

export const autoLogin = () => async (dispatch) => {
    const refreshToken = localStorage.getItem("refreshJWT")
    const accessToken = sessionStorage.getItem("accessJWT")
    // console.log("AUTO LOGIN")

    if (accessToken) {
        dispatch(userDataAction())
        // console.log("accessToken")
        return;
    }
    // in case of no accesstoken 
    if (refreshToken) {
        const token = await renewAccessJWT()
        token && dispatch(userDataAction())
        // console.log("refreshToken")
    }
}
export const getStudentsAction = () => async (dispatch) => {
    const data = await getStudentsApi();
    // console.log(2000, data.users)
    dispatch(setStudents(data.users))
}
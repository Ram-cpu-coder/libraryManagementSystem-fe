import { toast } from "react-toastify";
import { renewAccessJWT } from "../../helpers/axiosHelper";
import { createNewUserApi, deleteUserApi, fetchUserDataApi, getAllUsersAPi, getStudentsApi, loginApi, updateUserProfileApi, verifyEmailAndSendOtpApi, verifyOtpAndUpdatePasswordApi, verifyOtpApi, verifyUserApi } from "./userAxios";
import { resetUser, setAllUsers, setStudents, setUser } from "./userSlice";
// login the user
export const loginAction = (form, navigate) => async (dispatch) => {
    // call the log in api
    const pending = loginApi({ ...form });

    toast.promise(pending, {
        pending: "Logging ... "
    })
    const data = await pending;

    // update the user store

    if (data.status === "success") {
        dispatch(setUser(data.user));
        // update the sesssion storage for access
        sessionStorage.setItem("accessJWT", data.accessToken);
        // updating the local storage for refresh
        localStorage.setItem("refreshJWT", data.refreshToken);
        navigate("/books")
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
    // console.log(data)
    toast[data.status](data.message)
    data.status === "success" ? navigate("/") : ""
}
// individual user detail
export const userDataAction = () => async (dispatch) => {

    const data = await fetchUserDataApi()
    dispatch(setUser(data.user))
}
// logging the user out
export const logOutAction = () => async (dispatch) => {
    await dispatch(resetUser());
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT")
}
// auto login feature
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
// getting students list
export const getStudentsAction = () => async (dispatch) => {
    const data = await getStudentsApi();
    // console.log(2000, data.users)
    dispatch(setStudents(data.users))
}
// get all users
export const getAllUsers = () => async (dispatch) => {
    const { data, status, message } = await getAllUsersAPi()
    dispatch(setAllUsers(data));
}
// updating the user profile
export const updateUserProfileAction = (form) => async (dispatch) => {
    const pending = updateUserProfileApi(form);
    toast.promise(pending, {
        pending: "Uploading !"
    })
    const { data, message, status } = await pending;
    dispatch(setUser(data))
    toast[status](message);
    dispatch(fetchUserDataApi())
}
// delete the user action
export const deleteUserAction = (_id) => async (dispatch) => {
    const pending = deleteUserApi(_id)
    toast.promise(pending, {
        pending: "Deleting..."
    })
    const { status, message, data } = await pending;
    dispatch(getStudentsAction())
    console.log(data)
    toast[status](message)
}
// verifying the user
export const verifyingUserAction = ({ sessionId, token }) => async (dispatch) => {
    const pending = verifyUserApi({ sessionId, token })
    toast.promise(pending, {
        pending: "Verifying ..."
    })
    const { message, status, verifiedUpdateUser } = await pending
    toast[status](message)
}

// forgot password feature action 
export const verifyEmailAndSendOTPAction = (email) => async (dispatch) => {
    const pending = verifyEmailAndSendOtpApi(email);
    toast.promise(pending, {
        pending: "Verifying ..."
    })
    const { status, message } = await pending;
    toast[status](message)
    if (status === "success") {
        return true;
    }
}

export const verifyOtpAction = (email, Otp) => async (dispatch) => {
    const pending = verifyOtpApi(email, Otp);
    toast.promise(pending, {
        pending: "Verifying ..."
    })
    const { status, message } = await pending;
    toast[status](message)
}
export const verifyOtpAndUpdatePasswordAction = (email, Otp, password, confirmPassword) => async (dispatch) => {
    const pending = verifyOtpAndUpdatePasswordApi(email, Otp, password, confirmPassword);
    toast.promise(pending, {
        pending: "Verifying ..."
    })
    const { status, message } = await pending;
    toast[status](message)
}

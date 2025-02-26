import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { userSignInInputFields } from "../../assets/form-data/UserAuthInput.js";
import { apiProcessor } from "../../helpers/axiosHelper.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

const UserSignInForm = ({ setSigninDisplay }) => {
  const authEP = "http://localhost:9001/api/v1";
  const initialState = {
    email: "",
    password: "",
  };
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // call the log in api
    const data = await apiProcessor({
      method: "post",
      url: authEP + "/auth/login",
      data: { email: form.email, password: form.password },
      isPrivate: false,
      isRefreshToken: false,
    });
    console.log(data);
    if (data.status == "success") {
      // update the sesssion storage for access
      sessionStorage.setItem("accessJWT", data.accessToken);
      // updating the local storage for refresh
      localStorage.setItem("refreshJWT", data.refreshToken);
      // toast message
      toast.success("Logged in Successfully!!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column min-vh-100">
      <h3 className="d-flex justify-content-between align-items-center w-25">
        <IoArrowBackCircleOutline
          className="cursor-pointer"
          onClick={() => setSigninDisplay(false)}
        />
        <span>Sign In</span> <span> </span>
      </h3>
      <hr className="w-25" />
      <Form
        onSubmit={handleOnSubmit}
        className="d-flex align-items-center flex-column w-25"
      >
        {userSignInInputFields.map((item) => {
          return (
            <CustomInput
              key={item.name}
              {...item}
              onChange={handleOnChange}
              className="mb-3"
            />
          );
        })}
        <Button type="submit" className="mt-4 w-100">
          SignIn
        </Button>
      </Form>
    </div>
  );
};

export default UserSignInForm;

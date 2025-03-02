import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { userSignInInputFields } from "../../assets/form-data/UserAuthInput.js";
import { apiProcessor } from "../../helpers/axiosHelper.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const UserSignInForm = () => {
  const loginEP = import.meta.env.VITE_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };
  const { form, handleOnChange } = useForm(initialState);
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // call the log in api
    const data = await apiProcessor({
      method: "post",
      url: loginEP + "/auth/login",
      data: { email: form.email, password: form.password },
      isPrivate: false,
      isRefreshToken: false,
    });

    if (data.status === "success") {
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
      navigate("/user");
      setIsLoading(false);
    } else {
      console.log("error", data);
      setIsLoading(false);
      toast.error(data.message);
    }
  };
  if (isLoading == true) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <SyncLoader color="blue" margin={5} size={10} speedMultiplier={1} />
      </div>
    );
  }
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column min-vh-100">
      <h3 className="d-flex justify-content-between align-items-center w-100">
        <Button
          variant="light"
          onClick={() => navigate("/")}
          className="fs-2 d-flex align-items-center bg-white"
        >
          <IoArrowBackCircleOutline />
        </Button>
        <span>Sign In</span> <span> </span>
      </h3>
      <hr className="w-100" />
      <div className="d-flex w-100 align-items-center justify-content-center gap-5 signinForm container">
        <img src="./login.png" alt="Log in" srcset="" className="col-4" />
        <Form
          onSubmit={handleOnSubmit}
          className="d-flex align-items-center flex-column col-6"
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
            Sign In
          </Button>
          <span className="mt-2">
            Don't have an account ? <Link to="/signup">Sign up here</Link>
          </span>
        </Form>
      </div>
    </Container>
  );
};

export default UserSignInForm;

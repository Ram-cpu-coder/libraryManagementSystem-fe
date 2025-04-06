import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { userSignInInputFields } from "../../assets/form-data/UserAuthInput.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import {
  loginAction,
  userDataAction,
} from "../../features/users/userAction.js";
import { useDispatch, useSelector } from "react-redux";

const UserSignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm({});
  const navigate = useNavigate();
  const location = useLocation();

  const sentTo = location?.state?.from?.location?.pathname || "/books";
  const { user } = useSelector((state) => state.users);

  const handleOnSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    // login action
    dispatch(loginAction(form, navigate));
    dispatch(userDataAction());
    // navigate("/dashboard");
    setIsLoading(false);
  };

  useEffect(() => {
    user?._id && navigate(sentTo);
  }, [user?._id]);

  if (isLoading == true) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <SyncLoader color="blue" margin={5} size={10} speedMultiplier={1} />
      </div>
    );
  }
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column min-vh-100">
      <h3 className="d-flex justify-content-between align-items-center w-50">
        <Button
          variant="light"
          onClick={() => navigate("/dashboard")}
          className="fs-2 d-flex align-items-center bg-white"
        >
          <IoArrowBackCircleOutline />
        </Button>
        <span>Sign In</span>
        <span></span>
      </h3>
      <hr className="w-50" />
      <div className="d-flex w-50 align-items-center justify-content-center gap-5 signinForm container shadow p-3 rounded">
        <Form
          onSubmit={handleOnSubmit}
          className="d-flex align-items-center flex-column w-50"
        >
          {userSignInInputFields.map((item, index) => {
            return (
              <CustomInput
                key={index}
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
          <span>
            <Link to="/forgotPassword">Forgot Password</Link>
          </span>
        </Form>
      </div>
    </Container>
  );
};

export default UserSignInForm;

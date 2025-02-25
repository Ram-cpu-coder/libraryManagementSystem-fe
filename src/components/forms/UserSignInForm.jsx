import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { userSignInInputFields } from "../../assets/form-data/UserAuthInput.js";
import { apiProcessor } from "../../helpers/axiosHelper.js";

const UserSignInForm = () => {
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
    }
  };
  return (
    <div className="d-flex align-items-center flex-column">
      <h3>Sign In</h3>
      <hr />
      <Form
        onSubmit={handleOnSubmit}
        className="d-flex align-items-center flex-column"
      >
        {userSignInInputFields.map((item) => {
          return (
            <CustomInput
              key={item.name}
              {...item}
              onChange={handleOnChange}
              className="w-100"
            />
          );
        })}
        <Button type="submit">SignIn</Button>
      </Form>
    </div>
  );
};

export default UserSignInForm;

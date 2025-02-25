import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import { userSignUpInputFields } from "../../assets/form-data/UserAuthInput.js";
import useForm from "../../hooks/useForm.js";
import { apiProcessor } from "../../helpers/axiosHelper.js";

const UserSignUpForm = () => {
  const registerEp = "http://localhost:9001/api/v1/auth/register";
  const initialState = {
    fName: "",
    lName: "",
  };
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const data = await apiProcessor({
      method: "post",
      data: { ...form },
      url: registerEp,
      isPrivate: false,
    });
    console.log(data);
  };
  return (
    <div className="d-flex align-items-center flex-column">
      <h3>Join Our Community</h3>
      <hr />
      <Form
        onSubmit={handleOnSubmit}
        className="d-flex align-items-center flex-column"
      >
        {userSignUpInputFields.map((item) => {
          return (
            <CustomInput
              key={item.name}
              {...item}
              onChange={handleOnChange}
              className="w-100"
            />
          );
        })}
        <Button type="submit">SignUp</Button>
      </Form>
    </div>
  );
};

export default UserSignUpForm;

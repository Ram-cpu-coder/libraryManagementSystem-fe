import React from "react";
import { Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import { userSignUpInputFields } from "../../assets/form-data/UserAuthInput.js";
import useForm from "../../hooks/useForm.js";

const UserSignUpForm = () => {
  const initialState = {
    fName: "",
    lName: "",
  };
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <h3>Join Our Community</h3>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {userSignUpInputFields.map((item) => {
          return (
            <CustomInput key={item.name} {...item} onChange={handleOnChange} />
          );
        })}
      </Form>
    </div>
  );
};

export default UserSignUpForm;

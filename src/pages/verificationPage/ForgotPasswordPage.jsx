import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import VerifyEmailAndSendOtp from "./VerifyEmailAndSendOtp";
import OTPform from "./OTPform";
import UpdatePassword from "./UpdatePassword";

const ForgotPasswordPage = () => {
  const [heading, setHeading] = useState("Generate OTP");
  const [isOTPui, setIsOTPui] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const initialState = {
    email: "",
    Otp: "",
    password: "",
    confirmPassword: "",
  };
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleGenerateOTP = () => {
    console.log("clicked");

    // here add field and button means make the set the state //

    // generate action

    // if successful sending mail with the otp to the user email, disable the email field with the value entered and also the button should be disabled

    // add one more input field to enter field and one button to verify the otp

    // if otp is verified, disable the otp field with otp entered and button also disabled

    // if otp not verified do nothing
    // give chance to enter otp three times

    // if verified add one more field to update pw and confirm it
  };
  return (
    <div
      className="text-center mt-2 d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "50vh" }}
    >
      <h1 className="mb-3 col-4">{heading}</h1>
      <div className="w-75 d-flex justify-content-center">
        <Form className="d-flex flex-column gap-3 col-md-6 col-12 px-5">
          <VerifyEmailAndSendOtp
            handleOnChange={handleOnChange}
            form={form}
            setHeading={setHeading}
            setIsOTPui={setIsOTPui}
            isOTPui={isOTPui}
          />
          {isOTPui && (
            <OTPform
              setForm={setForm}
              form={form}
              setHeading={setHeading}
              isOTPui={isOTPui}
              setIsUpdatePassword={setIsUpdatePassword}
              isUpdatePassword={isUpdatePassword}
            />
          )}
          {isUpdatePassword && (
            <UpdatePassword
              form={form}
              handleOnChange={handleOnChange}
              isUpdatePassword={isUpdatePassword}
            />
          )}
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

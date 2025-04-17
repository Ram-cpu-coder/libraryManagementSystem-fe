import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import VerifyEmailAndSendOtp from "./VerifyEmailAndSendOtp";
import OTPform from "./OTPform";

const ForgotPasswordPage = () => {
  const [heading, setHeading] = useState("Generate OTP");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOTPui, setIsOTPui] = useState(false);
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
      <h1 className="mb-5 col-4">{heading}</h1>
      <Form className="d-flex gap-3 col-4">
        <VerifyEmailAndSendOtp
          handleOnChange={handleOnChange}
          form={form}
          setIsOTPui={setIsOTPui}
          isOTPui={isOTPui}
          setHeading={setHeading}
        />
      </Form>
      {isOTPui && <OTPform />}
    </div>
  );
};

export default ForgotPasswordPage;

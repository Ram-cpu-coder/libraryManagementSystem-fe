import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ForgotPasswordPage = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOTPVerified, setIsOTPVerified] = useState(false);
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
      style={{ height: "50vh" }}
    >
      <h1 className="mb-5">Generate OTP</h1>
      <div className="d-flex gap-5">
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => e.target.value}
          required
          placeholder="Enter your Email..."
          className="rounded px-3 py-2"
        />
        <Button variant="primary" onClick={handleGenerateOTP}>
          Send OTP
        </Button>
      </div>
      {/* <h1>Verify OTP</h1>
      <p>Please enter OTP sent to your mail</p>
      <input type="text" name="otp" id="otp" className="rounded px-3 py-2" /> */}
    </div>
  );
};

export default ForgotPasswordPage;

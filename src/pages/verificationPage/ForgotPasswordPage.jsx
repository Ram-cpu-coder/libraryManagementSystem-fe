import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div
      className="text-center mt-2 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <h1>Verify OTP</h1>
      <p>Please enter OTP sent to your mail</p>
      <input type="text" name="otp" id="otp" className="rounded px-3" />
    </div>
  );
};

export default ForgotPasswordPage;

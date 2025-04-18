import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { verifyOtpAction } from "../../features/users/userAction";
import OTPInput from "react-otp-input";
import { useDispatch } from "react-redux";

const OTPform = ({
  form,
  setForm,
  setHeading,
  isOTPui,
  isUpdatePassword,
  setIsUpdatePassword,
}) => {
  const dispatch = useDispatch();
  const handleOnChange = (otpValue) => {
    setForm((prev) => ({
      ...prev,
      Otp: otpValue,
    }));
  };
  const handleOTP = async () => {
    console.log("clicked");
    const verification = await dispatch(
      verifyOtpAction({
        email: form.email,
        Otp: form.Otp,
      })
    );
    if (verification === true) {
      setHeading("Enter your new Password!");
      setIsUpdatePassword(true);
    }
    console.log("here");
  };
  return (
    isOTPui && (
      <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
        <OTPInput
          value={form.Otp}
          inputType="number"
          onChange={handleOnChange}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => (
            <input {...props} disabled={isUpdatePassword ? true : false} />
          )}
          inputStyle={{
            width: "45px",
            height: "45px",
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #ced4da",
          }}
          focusStyle={{
            border: "2px solid #007bff",
            outline: "none",
          }}
        />
        <Button
          disabledStyle={isUpdatePassword ? true : false}
          style={{ height: "35.75px" }}
          onClick={handleOTP}
        >
          Verify OTP
        </Button>
      </div>
    )
  );
};

export default OTPform;

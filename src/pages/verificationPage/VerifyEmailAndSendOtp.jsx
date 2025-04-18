import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { verifyEmailAndSendOTPAction } from "../../features/users/userAction";

const VerifyEmailAndSendOtp = ({
  handleOnChange,
  form,
  setHeading,
  setIsOTPui,
  isOTPui,
}) => {
  const dispatch = useDispatch();
  const handleGenerateOTP = async (e) => {
    e.preventDefault();
    const otp = await dispatch(verifyEmailAndSendOTPAction(form.email));
    if (otp === true) {
      setIsOTPui(true);
      setHeading("Enter your OTP ...");
    }
  };
  console.log(form, 999);
  return (
    <div className="d-flex gap-3 justify-content-center">
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleOnChange}
        required
        disabled={isOTPui ? true : false}
        placeholder="Enter your Email..."
        className="rounded px-3"
        style={{ minWidth: "350px" }}
      />
      <Button
        variant="primary"
        disabled={isOTPui ? true : false}
        onClick={handleGenerateOTP}
        style={{ height: "35.75px", width: "100px" }}
      >
        Send OTP
      </Button>
    </div>
  );
};

export default VerifyEmailAndSendOtp;

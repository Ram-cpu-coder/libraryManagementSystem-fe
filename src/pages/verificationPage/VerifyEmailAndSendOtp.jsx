import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { verifyEmailAndSendOTPAction } from "../../features/users/userAction";

const VerifyEmailAndSendOtp = ({
  handleOnChange,
  form,
  setIsOTPui,
  isOTPui,
  setHeading,
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
    <>
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleOnChange}
        required
        disabled={isOTPui ? true : false}
        placeholder="Enter your Email..."
        className="rounded px-3 col-9"
      />
      <Button
        variant="primary"
        disabled={isOTPui ? true : false}
        onClick={handleGenerateOTP}
        className="col-3"
      >
        Send OTP
      </Button>
    </>
  );
};

export default VerifyEmailAndSendOtp;

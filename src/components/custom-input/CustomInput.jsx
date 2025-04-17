import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const CustomInput = ({ label, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="w-100 my-2">
      <Form.Group className="position-relative">
        <Form.Label className="">{label}</Form.Label>
        <Form.Control
          {...rest}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
        />
        {type === "password" && (
          <span
            onClick={handleShowPassword}
            style={{ cursor: "pointer", right: "10px", top: "35px" }}
            className="position-absolute"
          >
            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
          </span>
        )}
      </Form.Group>
    </div>
  );
};

export default CustomInput;

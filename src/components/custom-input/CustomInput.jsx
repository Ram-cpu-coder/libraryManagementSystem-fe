import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, ...rest }) => {
  return (
    <div className="w-100">
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Label className="">{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};

export default CustomInput;

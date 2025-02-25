import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
        <Form.Label className="ps-2">{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};

export default CustomInput;

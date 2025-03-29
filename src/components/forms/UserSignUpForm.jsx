import React, { useState } from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import { userSignUpInputFields } from "../../assets/form-data/UserAuthInput.js";
import useForm from "../../hooks/useForm.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../features/users/userAction.js";

const UserSignUpForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
  };
  const { form, setForm, handleOnChange } = useForm(initialState);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(createNewUser(form, navigate));
    // console.log("registered");
    // setForm({ ...initialState });
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <Card
        className="m-4 p-2 rounded shadow-lg"
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Card.Body className="">
          <h3
            className="mb-4 d-flex align-items-center"
            style={{ color: "#333" }}
          >
            <Button
              variant="light"
              onClick={() => navigate("/")}
              className="fs-2 d-flex align-items-center bg-white"
            >
              <IoArrowBackCircleOutline />
            </Button>
            Join Our Library Community
          </h3>
          <hr className="mb-4" />
          <Form onSubmit={handleOnSubmit}>
            <Row>
              {userSignUpInputFields.map((item, index) => (
                <Col key={index} xs={12} md={item.half ? 6 : 12}>
                  <CustomInput
                    {...item}
                    key={index}
                    onChange={handleOnChange}
                  />
                </Col>
              ))}
            </Row>
            <div className="d-grid mt-4">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                style={{ border: "none" }}
              >
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="text-center mt-4">
            <p className="mb-0" style={{ color: "#555" }}>
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-decoration-none"
                style={{ color: "#2575fc" }}
              >
                Login here
              </a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserSignUpForm;

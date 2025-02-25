import React from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import { userSignUpInputFields } from "../../assets/form-data/UserAuthInput.js";
import useForm from "../../hooks/useForm.js";
import { apiProcessor } from "../../helpers/axiosHelper.js";

const UserSignUpForm = () => {
  const registerEp = "http://localhost:9001/api/v1/auth/register";
  const initialState = {
    fName: "",
    lName: "",
  };
  const { form, handleOnChange } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const data = await apiProcessor({
      method: "post",
      data: { ...form },
      url: registerEp,
      isPrivate: false,
    });
    console.log(data);
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 bg-primary"
    >
      <Card
        className="p-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Card.Body className="">
          <h3 className="text-center mb-4" style={{ color: "#333" }}>
            Join Our Library Community
          </h3>
          <hr className="mb-4" style={{ borderTop: "2px solid #6a11cb" }} />
          <Form onSubmit={handleOnSubmit}>
            <Row>
              {userSignUpInputFields.map((item) => (
                <Col
                  key={item.name}
                  xs={12}
                  md={item.half ? 6 : 12}
                  className="mb-3"
                >
                  <CustomInput {...item} onChange={handleOnChange} />
                </Col>
              ))}
            </Row>
            <div className="d-grid mt-4">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                style={{ background: "#6a11cb", border: "none" }}
              >
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="text-center mt-4">
            <p className="mb-0" style={{ color: "#555" }}>
              Already have an account?{" "}
              <a
                href="/login"
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

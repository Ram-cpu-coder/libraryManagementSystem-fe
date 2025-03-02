import React, { useState } from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import { userSignUpInputFields } from "../../assets/form-data/UserAuthInput.js";
import useForm from "../../hooks/useForm.js";
import { apiProcessor } from "../../helpers/axiosHelper.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";

const UserSignUpForm = () => {
  const registerEp = process.env.VITE_API_BASE_URL;
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
  };
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsLoading(true);
    const data = await apiProcessor({
      method: "post",
      data: { ...form },
      url: registerEp + "/auth/register",
      isPrivate: false,
    });
    if (data.status == "success") {
      console.log("after", data);
      setForm({ ...initialState });
      setIsLoading(false);
      toast.success(data.message);
      navigate("/signin");
    } else {
      toast.error(data.message);
    }

    // why try catch did not work here while handling the error
  };
  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <SyncLoader color="blue" margin={5} size={10} speedMultiplier={1} />
      </div>
    );
  }
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
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
              {userSignUpInputFields.map((item) => (
                <Col
                  key={item.name}
                  xs={12}
                  md={item.half ? 6 : 12}
                  className="mb-3"
                >
                  <CustomInput
                    {...item}
                    key={item.name}
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

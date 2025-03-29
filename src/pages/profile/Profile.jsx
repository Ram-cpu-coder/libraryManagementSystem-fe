import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Button, Col, Form, Image } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { CiCamera } from "react-icons/ci";

const Profile = () => {
  const { user } = useSelector((state) => state.users);
  const { form, handleOnChange } = useForm();

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <UserLayout pageTitle="Profile">
      <div className="w-50 border shadow rounded p-2 d-flex justify-content-center flex-column">
        <div className="text-center bold">
          <div className="d-flex justify-content-center w-100">
            <Col xs={6} md={4} className="w-50 position-relative">
              <Image
                src={user.profilePic}
                roundedCircle
                className=""
                style={{ height: "200px", width: "200px" }}
              />
              <Button
                variant="light"
                onClick={() =>
                  document.getElementById("profilePicUpload").click()
                }
                className="position-absolute z-3"
                style={{
                  bottom: "0",
                  transform: "translate(0%, 0%)",
                }}
              >
                <CiCamera className="text-dark" />
              </Button>
            </Col>

            <Form onSubmit={handleOnSubmit} className="visually-hidden">
              <Form.Group className="mb-3 w-100" controlId="profilePic">
                <Form.Control
                  type="file"
                  accept="image"
                  id="profilePicUpload"
                  name="profilePic"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="mt-4">
            {user.fName} {user.lName}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center w-100">
          <div className="w-100 mt-2 d-flex flex-column justify-content-center align-items-between px-5">
            <p className="d-flex justify-content-between">
              Phone <span>{user.phone}</span>
            </p>
            <p className="d-flex justify-content-between">
              Email <span>{user.email}</span>
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;

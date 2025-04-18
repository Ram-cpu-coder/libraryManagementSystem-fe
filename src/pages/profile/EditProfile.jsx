import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updateProfileInputFields } from "../../assets/form-data/UserAuthInput";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfileAction } from "../../features/users/userAction";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const { form, handleOnChange } = useForm(user || {});

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (
        updateProfileInputFields.find((item) => item.name == key) ||
        key == "profilePic"
      ) {
        formData.append(key, form[key]);
      }
    });
    console.log(formData);
    dispatch(updateUserProfileAction(formData)) && navigate("/profile");
  };

  return (
    <UserLayout pageTitle="Edit Profile">
      <div className="d-flex flex-column align-items-center w-100 mb-3">
        <div
          className="d-flex justify-content-between col-12 col-md-9"
          style={{ maxWidth: "600px" }}
        >
          <button
            onClick={() => navigate("/profile")}
            className="my-2 fs-4"
            style={{
              width: "20px",
              outline: "none",
              border: "none",
              background: "white",
              cursor: "pointer",
            }}
          >
            <IoArrowBackCircleOutline />
          </button>
          {/* this button is here just to occupy space */}
          <Button
            variant="light"
            onClick={() => navigate("/profile")}
            className="w-25 my-2"
            style={{ visibility: "hidden" }}
          >
            <IoArrowBackCircleOutline />
          </Button>
        </div>
        <Form
          className="col-12 col-md-9"
          style={{ maxWidth: "600px" }}
          onSubmit={handleOnSubmit}
        >
          {updateProfileInputFields.map((item, index) => {
            return (
              <CustomInput
                {...item}
                key={index}
                onChange={handleOnChange}
                value={form[item.name]}
              />
            );
          })}
          {/* profile pic  */}

          <Form.Group className="mb-3 w-100" controlId="bookFile">
            <Form.Label>Upload your profile image</Form.Label>
            <Form.Control
              type="file"
              accept="image"
              name="profilePic"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" className="w-100" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </UserLayout>
  );
};

export default EditProfile;

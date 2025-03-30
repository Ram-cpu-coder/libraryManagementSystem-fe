import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updateProfileInputFields } from "../../assets/form-data/UserAuthInput";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfileAction } from "../../features/users/userAction";

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
      <div className="d-flex flex-column align-items-center w-100">
        <Button
          variant="light"
          onClick={() => navigate("/profile")}
          className="w-25 my-2"
        >
          &lt; Back
        </Button>
        <Form
          className="w-100 w-sm-50 w-md-25"
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

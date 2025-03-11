import React from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { bookUpdateInputFields } from "../../assets/form-data/BooksInput.js";
import { Link, useNavigate } from "react-router-dom";
import UserLayout from "../../components/layout/UserLayout.jsx";

const UpdateBooksAdmin = () => {
  const { form, handleOnChange } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setIsLoading(false);
  };
  return (
    <UserLayout pageTitle="Update Book">
      <div className="w-100 d-flex flex-column my-5 min-vh-100 align-items-center justify-content-center">
        <h1 className="d-flex justify-content-evenly align-items-center w-50">
          <Link to="/admin">
            {" "}
            <Button
              variant="light"
              onClick={() => navigate("/admin")}
              className="fs-2 d-flex align-items-center bg-white"
            >
              <IoArrowBackCircleOutline />
            </Button>
          </Link>
          <span>Update Book!</span>
          <span></span>
        </h1>
        <hr className="w-50" />
        <Form
          onSubmit={handleOnSubmit}
          className="d-flex align-items-center flex-column w-50"
        >
          {bookUpdateInputFields.map((item, index) => {
            return (
              <CustomInput
                key={index}
                {...item}
                onChange={handleOnChange}
                className="mb-3"
              />
            );
          })}
          <Button type="submit" className="mt-4 w-100">
            Update
          </Button>
        </Form>
      </div>
    </UserLayout>
  );
};

export default UpdateBooksAdmin;

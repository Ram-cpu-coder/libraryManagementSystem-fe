import React from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { bookUpdateInputFields } from "../../assets/form-data/BooksInput.js";
import { Link, useNavigate } from "react-router-dom";
import UserLayout from "../../components/layout/UserLayout.jsx";
import { updateBookAction } from "../../features/books/bookAction.js";

const UpdateBooksAdmin = () => {
  const { form, handleOnChange } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    dispatch(updateBookAction(form, navigate));
    setIsLoading(false);
  };
  return (
    <UserLayout pageTitle="">
      <div className="w-100 d-flex flex-column my-5 min-vh-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center flex-column shadow py-3 rounded w-50">
          <h1 className="d-flex justify-content-evenly align-items-center w-100">
            <Link to="/admin">
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
          <hr className="w-75" />
          <Form
            onSubmit={handleOnSubmit}
            className="d-flex align-items-center flex-column w-75"
          >
            {bookUpdateInputFields.map((item, index) => {
              return (
                <CustomInput
                  key={index}
                  {...item}
                  onChange={handleOnChange}
                  className=""
                />
              );
            })}
            <Button type="submit" className="mt-4 w-100">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </UserLayout>
  );
};

export default UpdateBooksAdmin;

import React from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setIsUpdate } from "../../features/books/bookSlice";
import { bookUpdateInputFields } from "../../assets/form-data/BooksInput.js";

const UpdateBooksAdmin = () => {
  const { form, handleOnChange } = useForm({});
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    // login action
    // dispatch(loginAction(form, navigate));
    setIsLoading(false);
  };
  return (
    <div className="w-100 d-flex flex-column my-5 min-vh-100 align-items-center justify-content-center">
      <h1 className="d-flex justify-content-evenly align-items-center w-50">
        <Button
          variant="light"
          onClick={() => dispatch(setIsUpdate())}
          className="fs-2 d-flex align-items-center bg-white"
        >
          <IoArrowBackCircleOutline />
        </Button>
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
  );
};

export default UpdateBooksAdmin;

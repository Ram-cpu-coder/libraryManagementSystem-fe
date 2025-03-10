import React from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { bookAddInputFields } from "../../assets/form-data/BooksInput";
import useForm from "../../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookAction } from "../../features/books/bookAction";

const AddBook = () => {
  const { form, handleOnChange } = useForm({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnAdd = (e) => {
    e.preventDefault();
    dispatch(addBookAction());
    console.log("clicked", form);
  };
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="w-75 d-flex flex-column justify-content-center align-items-center mb-4">
        <h1 className="mt-4 d-flex justify-content-evenly align-items-center w-75">
          <Button
            variant="light"
            onClick={() => navigate("/user")}
            className="fs-2 d-flex align-items-center bg-white"
          >
            <IoArrowBackCircleOutline />
          </Button>
          <span>Add Book!</span> <span></span>
        </h1>
        <hr className="w-50" />
        <div className="w-50 d-flex flex-column align-items-center p-4 rounded my-2 shadow-lg">
          <Form className="w-100 px-2" onSubmit={handleOnAdd}>
            {bookAddInputFields.map((item, index) => {
              return (
                <CustomInput {...item} key={index} onChange={handleOnChange} />
              );
            })}
            <Button type="submit" className="my-2 w-100">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

import React from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { bookAddInputFields } from "../../assets/form-data/BooksInput";
import useForm from "../../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookAction } from "../../features/books/bookAction";
import UserLayout from "../../components/layout/UserLayout";

const AddBook = () => {
  const { form, handleOnChange } = useForm({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnAdd = (e) => {
    e.preventDefault();
    dispatch(addBookAction(form));
    console.log("clicked", form);
    navigate("/admin");
  };
  return (
    <UserLayout pageTitle="Create Book">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="w-75 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75 d-flex flex-column align-items-center p-4 rounded shadow-lg">
            <Form className="w-100 px-2" onSubmit={handleOnAdd}>
              {bookAddInputFields.map((item, index) => {
                return (
                  <CustomInput
                    {...item}
                    key={index}
                    onChange={handleOnChange}
                  />
                );
              })}
              <Button type="submit" className="my-2 w-100">
                Add
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default AddBook;

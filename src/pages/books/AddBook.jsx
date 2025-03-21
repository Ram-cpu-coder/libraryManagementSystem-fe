import React from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { bookAddInputFields } from "../../assets/form-data/BooksInput";
import useForm from "../../hooks/useForm";
import { Button, Form } from "react-bootstrap";
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

    // these is the cheatsheet for converting the normal form to the formData
    const formData = new FormData();
    console.log(101, form);
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    console.log(formData, 111);

    dispatch(addBookAction(formData));
    navigate("/admin");
  };
  console.log(form);
  return (
    <UserLayout pageTitle="Create Book">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="w-75 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75 d-flex flex-column align-items-center p-4">
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
              <Form.Group className="mb-3" controlId="bookFile">
                <Form.Label>Upload your book cover image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image"
                  name="bookFile"
                  onChange={handleOnChange}
                />
              </Form.Group>
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

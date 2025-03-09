import React from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { bookAddInputFields } from "../../assets/form-data/BooksInput";
import useForm from "../../hooks/useForm";
import { Button, Form } from "react-bootstrap";

const AddBook = () => {
  const { form, handleOnChange } = useForm({});
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="my-2">Add Book !</h1>
      <hr className="w-50" />
      <div className="w-50 d-flex flex-column align-items-center p-4 rounded my-2 shadow-lg">
        <Form className="w-100 px-2">
          {bookAddInputFields.map((item, index) => {
            return (
              <CustomInput {...item} key={index} onChange={handleOnChange} />
            );
          })}
        </Form>
        <Button className="my-2 w-100">Add</Button>
      </div>
    </div>
  );
};

export default AddBook;

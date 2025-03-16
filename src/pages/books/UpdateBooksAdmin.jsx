import React, { useEffect } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { bookUpdateInputFields } from "../../assets/form-data/BooksInput.js";
import { useNavigate, useParams } from "react-router-dom";
import UserLayout from "../../components/layout/UserLayout.jsx";
import {
  getAllBookAction,
  updateBookAction,
} from "../../features/books/bookAction.js";

const UpdateBooksAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams();

  const { books } = useSelector((state) => state.books);

  const selectedBook = books.filter((item) => {
    return item._id === _id;
  });
  const { form, handleOnChange } = useForm(selectedBook || {});

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formObj = { _id, ...form };
    dispatch(updateBookAction(formObj, navigate));
    console.log(_id, form);
  };

  useEffect(() => {
    dispatch(getAllBookAction());
  }, [_id]);
  return (
    <UserLayout pageTitle="Update Books">
      <div className="w-100 d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center flex-column shadow py-3 rounded w-50">
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

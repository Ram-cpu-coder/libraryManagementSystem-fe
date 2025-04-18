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
import { IoArrowBackCircleOutline } from "react-icons/io5";

const UpdateBooksAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams();

  const { books } = useSelector((state) => state.books);

  const selectedBook = books.find((item) => {
    return item._id === _id;
  });
  const { form, handleOnChange } = useForm(selectedBook || {});

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      // skip isbn
      // skip thumbnail
      if (
        bookUpdateInputFields.find((item) => item.name == key) ||
        key == "_id" ||
        key == "status" ||
        key == "bookFile"
      ) {
        formData.append(key, form[key]);
      }
    });

    (await dispatch(updateBookAction(formData))) && navigate("/admin");
  };

  useEffect(() => {
    dispatch(getAllBookAction());
  }, [_id]);
  return (
    <UserLayout pageTitle="Update Books">
      <div className="w-100 d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center flex-column shadow py-3 rounded col-12 col-md-9">
          <Form
            onSubmit={handleOnSubmit}
            className="d-flex align-items-start flex-column w-75"
          >
            <button
              className="my-3 fs-4"
              onClick={() => navigate("/admin")}
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
            <Form.Check
              name="status"
              onChange={handleOnChange}
              checked={form?.status === "active"}
              type="switch"
              id="custom-switch"
              label={form?.status?.toUpperCase()}
              className={`${
                form?.status === "active"
                  ? "mb-3 text-success"
                  : "mb-3 text-danger"
              } w-100 position-relative my-2`}
            />
            {bookUpdateInputFields.map((item, index) => {
              return (
                <CustomInput
                  key={index}
                  {...item}
                  onChange={handleOnChange}
                  className=""
                  value={form[item.name]}
                />
              );
            })}

            {/* thumbnail  */}

            <Form.Group className="mb-3 w-100" controlId="bookFile">
              <Form.Label>Upload your book cover image</Form.Label>
              <Form.Control
                type="file"
                accept="image"
                name="bookFile"
                onChange={handleOnChange}
              />
            </Form.Group>

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

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBookAction } from "../../features/books/bookAction";
import { Button } from "react-bootstrap";
import UserLayout from "../../components/layout/UserLayout";

const DeleteBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const handleOnDelete = () => {
    dispatch(deleteBookAction(_id));
    navigate("/admin");
  };

  return (
    <UserLayout pageTitle="Delete Book">
      <div className="d-flex flex-column shadow-lg px-4 py-2 rounded">
        Are you sure to delete the book?
        <div className="row gap-3 m-3">
          <Button variant="danger" onClick={handleOnDelete} className="col">
            Yes
          </Button>
          <Button
            variant="light"
            onClick={() => navigate("/admin")}
            className="col"
          >
            No
          </Button>
        </div>
      </div>
    </UserLayout>
  );
};

export default DeleteBook;

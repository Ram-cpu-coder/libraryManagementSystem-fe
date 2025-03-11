import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBookAction } from "../../features/books/bookAction";

const DeleteBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const handleOnDelete = () => {
    dispatch(deleteBookAction(_id));
    navigate("/admin");
  };

  return (
    <div>
      DeleteBook
      <button onClick={handleOnDelete}>Delete</button>
    </div>
  );
};

export default DeleteBook;

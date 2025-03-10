import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookAction,
  isUpdateToggle,
} from "../../features/books/bookAction";

const BooksTable = ({ books, isPrivate }) => {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.users);

  const handleOnEditToggle = () => {
    dispatch(isUpdateToggle());
  };

  // use effect to fetch all books
  useEffect(() => {
    dispatch(getAllBookAction(isPrivate));
  }, []);

  return (
    <tbody>
      {books.map((books, index) => {
        return (
          <tr key={books.isbn}>
            <td>{index + 1}</td>
            <td
              style={{
                display: userStore.user.role == "admin" ? "block" : "none",
              }}
            >
              <p
                style={{
                  color: books.status == "active" ? "green" : "red",
                }}
              >
                {books.status}
              </p>
            </td>
            <td>
              <img
                src={books.thumbnail}
                alt="books"
                style={{ height: "100px" }}
              />
            </td>
            <td>
              <h2>
                {books.title.length > 30
                  ? books.title.slice(0, 30) + "..."
                  : books.title}
              </h2>
              <p>{books.author}</p>
            </td>
            <td>
              <Button
                className="d-flex gap-1 align-items-center justify-content-center"
                onClick={handleOnEditToggle}
              >
                <MdModeEdit /> Edit
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default BooksTable;

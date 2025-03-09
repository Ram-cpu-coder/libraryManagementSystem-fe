import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { isUpdateToggle } from "../../features/books/bookAction";

const BooksTable = ({ books }) => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);
  const handleOnEditToggle = () => {
    dispatch(isUpdateToggle());
  };

  return (
    <tbody>
      {books.map((books, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <p
                style={
                  books.status == "active"
                    ? { color: "green" }
                    : { color: "red" }
                }
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
              <h2>{books.title}</h2>
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

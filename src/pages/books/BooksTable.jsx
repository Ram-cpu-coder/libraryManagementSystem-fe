import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const rootUrl = import.meta.env.VITE_APP_ASSET_URL;

const BooksTable = ({ books, setShowDisplay }) => {
  const { user } = useSelector((state) => state.users);

  // const handleOnDelete = (id) => {
  //   setShowDisplay(true);
  // };

  return (
    <tbody>
      {books.map((book, index) => {
        return (
          <tr key={book.isbn}>
            <td>{index + 1}</td>
            <td
              style={{
                display: user.role == "admin" ? "" : "none",
              }}
            >
              <p
                style={{
                  color: book.status == "active" ? "green" : "red",
                }}
              >
                {book.status}
              </p>
            </td>
            <td>
              <img
                src={`${rootUrl}${book.thumbnail}`}
                alt="books"
                style={{ width: "100px", height: "100px", overflow: "hidden" }}
              />
            </td>
            <td>
              <h3>
                {book.title.length > 30
                  ? book.title.slice(0, 30) + "..."
                  : book.title}
              </h3>
              <p>{book.author}</p>
            </td>
            <td>
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <Link
                  to={`/admin/updateBook/${book._id}`}
                  // onClick={() => console.log(book)}
                >
                  <Button className="d-flex gap-1 align-items-center justify-content-center">
                    <MdModeEdit /> Edit
                  </Button>
                </Link>
                <Link to={"/admin/delete/" + book._id}>
                  <Button variant="danger" className="">
                    <MdDelete />
                  </Button>
                </Link>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default BooksTable;

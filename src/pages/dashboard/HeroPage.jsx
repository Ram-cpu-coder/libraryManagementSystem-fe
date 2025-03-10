import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminBooks from "../books/AdminBooks";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const HeroPage = ({ isPrivate, books }) => {
  // const bookStore = useSelector((state) => state.books);
  const userStore = useSelector((state) => state.users);

  // const books = bookStore.books;
  console.log(books);

  return (
    <div className="w-100 d-flex flex-column py-2 px-5">
      <h1>Book List</h1>
      <hr />
      <div
        className="justify-content-end my-3"
        style={{
          display: userStore.user.role == "admin" ? "flex" : "none",
        }}
      >
        <Link to="/user/addBook">
          <Button
            variant="primary"
            className="w-10 d-flex align-items-center gap-2"
          >
            <IoIosAddCircleOutline />
            Add New Book
          </Button>
        </Link>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <p>{books.length} Books Found!</p>
        <input
          type="search"
          name="search"
          className="rounded p-1"
          placeholder="Search books ..."
        />
      </div>
      <AdminBooks books={books} isPrivate={isPrivate} />
    </div>
  );
};

export default HeroPage;

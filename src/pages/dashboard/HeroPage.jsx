import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminBooks from "../books/AdminBooks";

const HeroPage = () => {
  const bookStore = useSelector((state) => state.books);
  const books = bookStore.adminBooks;
  console.log(111, books);
  return (
    <div className="w-100 d-flex flex-column py-2 px-5">
      <h1>Book List</h1>
      <hr />
      <div className=" d-flex justify-content-end my-3">
        <Button variant="primary" className="w-10">
          Add New Book
        </Button>
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
      <hr />
      <AdminBooks books={books} />
    </div>
  );
};

export default HeroPage;

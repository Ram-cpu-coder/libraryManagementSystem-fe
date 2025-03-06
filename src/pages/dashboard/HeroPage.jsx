import React from "react";
import { Button } from "react-bootstrap";

const HeroPage = () => {
  return (
    <div className="w-75 d-flex flex-column px-2">
      <h1>Book List</h1>
      <hr />
      <div className=" d-flex justify-content-end my-3">
        <Button variant="primary" className="w-25">
          Add New Book
        </Button>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <p>Number Books Found!</p>
        <input
          type="search"
          name="search"
          className="rounded p-1"
          placeholder="Search books ..."
        />
      </div>
      <hr />
    </div>
  );
};

export default HeroPage;

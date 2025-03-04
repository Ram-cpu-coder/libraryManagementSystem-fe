import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const BooksLandingPage = () => {
  const location = useLocation();
  const { _id } = useParams();
  const { books } = useSelector((store) => store.books);
  console.log("CURRENT LOCATION", location);

  const selectedBook = books.find((item) => item._id == _id);
  return (
    <div>
      <h1>BooksLandingPage</h1>
      {selectedBook.title}
    </div>
  );
};

export default BooksLandingPage;

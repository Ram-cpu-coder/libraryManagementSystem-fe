import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const BooksLandingPage = () => {
  const location = useLocation();
  const { _id } = useParams();
  const { books } = useSelector((store) => store.books);
  console.log("CURRENT LOCATION", location);

  const [book, setBook] = useState({});

  const selectedBook = books.find((item) => item._id == _id);

  console.log(selectedBook);
  useEffect(() => {
    setBook(selectedBook);
  });
  return (
    <div>
      <h1>BooksLandingPage</h1>
      {book.title}
    </div>
  );
};

export default BooksLandingPage;

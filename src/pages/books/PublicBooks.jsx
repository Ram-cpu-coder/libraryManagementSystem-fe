import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helpers/axiosHelper";
import { Button, Card, Container } from "react-bootstrap";

const PublicBooks = () => {
  const [book, setBooks] = useState([]);
  const bookApi = "http://localhost:9001/api/v1/books/pub-books";
  const fetchPublicBooks = async () => {
    try {
      const data = await apiProcessor({
        method: "get",
        url: bookApi,
        isPrivate: false,
        isRefreshToken: false,
      });
      console.log(data.books);
      setBooks(data.books);
      //   if()
    } catch (error) {}
  };
  useEffect(() => {
    fetchPublicBooks();
  }, []);
  return (
    <div className="my-2">
      <h1 className="text-center">Books you may want to Read !</h1>
      <div className="d-flex align-items-center justify-content-between px-4">
        <p>{book.length} books found!</p>
        <input type="search" className="rounded" />
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4 m-1 d-flex justify-content-center">
        {book.map((item) => {
          return (
            <div
              className="border d-flex flex-column align-items-center justify-content-center m-1"
              style={{ height: "300px", width: "auto", overflow: "hidden" }}
            >
              <img
                src={item.thumbnail}
                className="px-1"
                alt=""
                style={{ height: "150px", width: "240px" }}
              />
              <div className="">
                <h5 className="text-center">{item.title}</h5>
                <p className="text-end">{item.author}</p>
                <p className="overflow-hidden">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublicBooks;

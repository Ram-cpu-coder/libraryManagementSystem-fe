import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { getAllBookAction } from "../../features/books/bookAction";

const BooksLandingPage = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);
  const { _id } = useParams();

  const [displayBooks, setDisplayBooks] = useState([]);

  const selectedBook = displayBooks.find((item) => item._id == _id);

  const stars = Array(5).fill(0);
  const colors = {
    orange: " #F2C265",
    grey: "a9a9a9",
  };

  const fetchAllBooks = async () => {
    await dispatch(getAllBookAction());
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);
  useEffect(() => {
    setDisplayBooks(bookStore.books);
  }, [bookStore.books]);
  return !selectedBook ? (
    <div>NotFound</div>
  ) : (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column w-75 my-3 align-items-center">
        <div className="d-flex gap-3 ">
          <img
            src={selectedBook.thumbnail}
            alt=""
            style={{ height: "300px" }}
          />
          <div className="d-flex flex-column px-2">
            <h1 className="m-0">{selectedBook.title}</h1>
            <p className="fs-4 m-0">
              {selectedBook.author} - {selectedBook.publishedYear}
            </p>
            <div>
              {stars.map((item, index) => {
                return (
                  <CiStar
                    key={index}
                    style={{
                      background:
                        selectedBook.averageRating > index
                          ? colors.orange
                          : colors.grey,
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksLandingPage;

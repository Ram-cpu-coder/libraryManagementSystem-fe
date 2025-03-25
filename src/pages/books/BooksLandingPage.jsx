import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { getAllBookAction } from "../../features/books/bookAction";
import { Button } from "react-bootstrap";
import { createBorrowAction } from "../../features/borrows/borrowAction";
import { userDataAction } from "../../features/users/userAction";

const BooksLandingPage = () => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;

  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.users);
  const { _id } = useParams();

  const selectedBook = bookStore.books.find((item) => item._id == _id);
  console.log(selectedBook);

  // const dateExpected = expectedAvailable.slice(0, expectedAvailable.indexOf(T));

  const stars = Array(5).fill(0);
  const colors = {
    orange: " #F2C265",
    grey: "a9a9a9",
  };

  // creating the borrow
  const handleOnBorrow = () => {
    const borrowObj = {
      bookId: selectedBook._id,
      title: selectedBook.title,
      thumbnail: selectedBook.thumbnail,
    };
    dispatch(createBorrowAction(borrowObj));
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllBookAction());
      await dispatch(userDataAction());
    };
    fetchData();
  }, [dispatch]);

  return !selectedBook ? (
    <div className="d-flex justify-content-center">
      <p>NotFound</p>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column w-75 my-3 align-items-center">
        <div className="d-flex gap-3">
          <img
            src={`${rootUrl}${selectedBook.thumbnail}`}
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

            {user?._id ? (
              <Button
                disabled={!selectedBook?.isAvailable}
                variant="primary"
                onClick={handleOnBorrow}
              >
                {selectedBook?.isAvailable
                  ? "Borrow"
                  : "Expected Date: " +
                    selectedBook.expectedAvailable.slice(
                      0,
                      selectedBook.expectedAvailable.indexOf("T")
                    )}
              </Button>
            ) : (
              <Link to="/signin">
                <Button>Sign in to borrow</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksLandingPage;

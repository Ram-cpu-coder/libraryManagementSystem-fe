import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { getAllBookAction } from "../../features/books/bookAction";
import { Button, Tab, Table, Tabs } from "react-bootstrap";
import { createBorrowAction } from "../../features/borrows/borrowAction";
import { userDataAction } from "../../features/users/userAction";
import { fetchAdminReviewsAction } from "../../features/reviews/reviewsAction";
import Stars from "../../components/stars/Stars";

const BooksLandingPage = () => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;

  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.users);
  const { publicReviews } = useSelector((state) => state.reviews);
  const { _id } = useParams();
  console.log(publicReviews);

  const selectedBook = bookStore.books.find((item) => item._id == _id);

  // console.log(selectedBook);

  const selectedReviewList = publicReviews.filter(
    (item) => item.bookId === _id
  );
  console.log(selectedReviewList);

  const totalRatings = selectedReviewList.reduce(
    (acc, item) => acc + item.ratings,
    0
  );

  const averageRating = totalRatings / selectedReviewList.length || 0;

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
      await dispatch(fetchAdminReviewsAction());
    };
    fetchData();
  }, [dispatch]);

  return !selectedBook ? (
    <div className="d-flex justify-content-center">
      <p>NotFound</p>
    </div>
  ) : (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center shadow-lg border mt-5 w-50 px-2 py-4 rounded">
        <div className="d-flex flex-column w-75 my-3 align-items-center">
          <div className="d-flex gap-3">
            <img
              src={`${rootUrl}${selectedBook.thumbnail}`}
              alt=""
              style={{ height: "200px", width: "200px" }}
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
                          averageRating > index ? colors.orange : colors.grey,
                        clipPath:
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                    />
                  );
                })}
                &nbsp;({averageRating}/{selectedReviewList.length})
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
        <div className="w-100 mt-5 px-4">
          {/* description and reviews */}
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description" className="px-2">
              {selectedBook.description}
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              {selectedReviewList.length > 0 ? (
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Thumbnail</th>
                      <th>User</th>
                      <th>Review</th>
                    </tr>
                  </thead>{" "}
                  <tbody>
                    {selectedReviewList.map((item, index) => (
                      <tr style={{ height: "120px" }}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={`${rootUrl}${item.thumbnail}`}
                            alt=""
                            style={{ height: "100px" }}
                          />
                        </td>
                        <td>{item.userName}</td>
                        <td
                          className="d-flex flex-column"
                          style={{ height: "120px" }}
                        >
                          {item.heading}
                          <Stars
                            stars={item.ratings}
                            totalReviews={selectedReviewList.length}
                          />
                          {item.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div>No Reviews Found !</div>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BooksLandingPage;

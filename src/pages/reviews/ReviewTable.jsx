import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import Stars from "../../components/stars/Stars";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReviewByIdAction,
  fetchAdminReviewsAction,
  updateReviewAction,
} from "../../features/reviews/reviewsAction";
import { useNavigate } from "react-router-dom";

const ReviewTable = () => {
  const thumbnailEP = import.meta.env.VITE_APP_ASSET_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reviews } = useSelector((state) => state.reviews);
  const [deleteBox, setDeleteBox] = useState([false, null]);

  // total number of reviews, this is needed in the bookLanding page

  // const numberOfReview = (selectedReviewBookId) => {
  //   const reviewsOfThatBook = reviews.filter(
  //     (item) => item.bookId === selectedReviewBookId
  //   );
  //   console.log(reviewsOfThatBook.length);
  //   return reviewsOfThatBook.length;
  // };

  const handleOnSwitchChange = (e) => {
    e.preventDefault();
    const { value, checked } = e.target;
    dispatch(
      updateReviewAction({
        _id: value,
        status: checked ? "active" : "inactive",
      })
    );
  };

  const handleOnDelete = (_id) => {
    dispatch(deleteReviewByIdAction(_id));
    setDeleteBox([false, null]);
  };

  useEffect(() => {
    dispatch(fetchAdminReviewsAction());
  }, []);

  // this helps to make the page render avoiding the error called that reviews.map is not a function
  // actually this line 44 is checking the variable reviews if it is array or not, if not it will provide empty array
  const safeReviews = Array.isArray(reviews) ? reviews : [];
  if (deleteBox[0]) {
    return (
      <div>
        <p>Are you sure you want to delete?</p>
        <div>
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger" onClick={() => handleOnDelete(deleteBox[1])}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
  return (
    <Table bordered hover relative>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Book</th>
          <th>UserName</th>
          <th>Review</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {safeReviews?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <Form.Check
                onChange={handleOnSwitchChange}
                checked={item?.status === "active"}
                type="switch"
                value={item._id}
                className={`w-100 position-relative my-2`}
              />
            </td>
            <td>
              <img
                src={`${thumbnailEP}${item.thumbnail}`}
                alt="Images"
                style={{ height: "70px", width: "50px" }}
              />
            </td>
            <td>{item.userName}</td>
            <td className="d-flex flex-column justify-content-center">
              <h2>{item.heading}</h2>{" "}
              <div>
                <Stars stars={item.ratings} />
              </div>
              <p>{item.message}</p>
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  setDeleteBox([true, item._id]);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReviewTable;

import React, { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import Stars from "../../components/stars/Stars";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminReviewsAction,
  updateReviewAction,
} from "../../features/reviews/reviewsAction";

const ReviewTable = () => {
  const thumbnailEP = import.meta.env.VITE_APP_ASSET_URL;
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

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

  useEffect(() => {
    dispatch(fetchAdminReviewsAction());
  }, []);
  console.log(reviews);

  const safeReviews = Array.isArray(reviews) ? reviews : [];
  // const safeReviews = reviews ? reviews : [];
  return (
    <Table bordered hover>
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
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReviewTable;

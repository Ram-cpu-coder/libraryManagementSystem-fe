import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import Stars from "../../components/stars/Stars";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReviewByIdAction,
  fetchAdminReviewsAction,
  updateReviewAction,
} from "../../features/reviews/reviewsAction";

const ReviewTable = () => {
  // profilePic rendering with in the review section
  const thumbnailEP = import.meta.env.VITE_APP_ASSET_URL;
  const defaultProfile = "/profile.png";

  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.users);
  console.log(allUsers);
  const { reviews } = useSelector((state) => state.reviews);
  const [deleteBox, setDeleteBox] = useState([false, null]);

  const handleTheProfile = (id) => {
    const selectedUser = allUsers.find((item) => item._id === id);
    console.log("triggered", selectedUser);
    return selectedUser?.profilePic;
  };

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
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <p>Are you sure you want to delete?</p>
        <div className="row-custom gap-1 text-center">
          <Button
            variant="secondary"
            className="col-5 custom-btn"
            onClick={() => setDeleteBox([false, null])}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            className="col-5 custom-btn"
            onClick={() => handleOnDelete(deleteBox[1])}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>{reviews.length} review(s) found !</p>
      {reviews.length > 0 ? (
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
                <td
                  className={
                    item.status === "active" ? "text-primary" : "text-danger"
                  }
                >
                  <Form.Check
                    onChange={handleOnSwitchChange}
                    checked={item?.status === "active"}
                    type="switch"
                    value={item._id}
                    className={`w-100 position-relative my-2`}
                  />
                  {item.status.toUpperCase()}
                </td>
                <td>
                  <img
                    src={`${thumbnailEP}${item.thumbnail}`}
                    alt="Images"
                    style={{ height: "70px", width: "50px" }}
                  />
                </td>
                <td className="">
                  <img
                    src={
                      handleTheProfile(item.userId)
                        ? `${thumbnailEP}${handleTheProfile(item.userId)}`
                        : defaultProfile
                    }
                    alt=""
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  &nbsp; &nbsp;{item.userName}
                </td>
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
      ) : (
        ""
      )}
    </div>
  );
};

export default ReviewTable;

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { postReviewAction } from "../../features/reviews/reviewsAction";

const AddReview = ({ borrow, setBorrow }) => {
  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm({});
  const [ratings, setRatings] = useState(1);

  const handlePostReview = async (e) => {
    e.preventDefault();
    const { userName, _id, title, thumbnail, bookId, userId } = borrow;
    const reviewObj = {
      ...form,
      userName,
      borrowId: _id,
      title,
      thumbnail,
      bookId,
      userId,
      ratings,
    };

    if (window.confirm("Are you sure to post review?")) {
      const action = await dispatch(postReviewAction(reviewObj));
      action && setBorrow({});
    }
  };

  return (
    <div className="w-100 d-flex align-items-center flex-column">
      <Form className="w-100" onSubmit={handlePostReview}>
        <CustomInput
          label="Title"
          name="heading"
          type="text"
          required
          placeholder="Awesome Book"
          onChange={handleOnChange}
        />

        <div className="d-flex align-items-center">
          <label htmlFor="">Select Star:</label>
          {new Array(5).fill("").map((item, i) => (
            <FaStar
              key={i}
              onClick={() => setRatings(i + 1)}
              className={i < ratings ? "text-warning" : ""}
            />
          ))}
        </div>

        <CustomInput
          label="Comment"
          name="message"
          type="text"
          as="textarea"
          required
          style={{ height: "100px", resize: "none" }}
          onChange={handleOnChange}
        />
        {/* button */}
        <div className="container w-100 my-2">
          <div className="row d-flex justify-content-between">
            <Button variant="danger" className="col-5">
              Cancel
            </Button>
            <Button variant="success" type="submit" className="col-5">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddReview;

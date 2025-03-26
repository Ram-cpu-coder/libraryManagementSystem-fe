import React, { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import Stars from "../../components/stars/Stars";

const ReviewTable = ({ reviews }) => {
  const thumbnailEP = import.meta.env.VITE_APP_ASSET_URL;
  const { form, handleOnChange } = useForm();

  // const numberOfReview = (selectedReviewBookId) => {
  //   const reviewsOfThatBook = reviews.filter(
  //     (item) => item.bookId === selectedReviewBookId
  //   );
  //   console.log(reviewsOfThatBook.length);
  //   return reviewsOfThatBook.length;
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
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
        {reviews?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {/* {/* {/here all of them are being checked */}
              <Form onSubmit={handleOnSubmit}>
                <Form.Check
                  name="status"
                  onChange={handleOnChange}
                  checked={form?.status === "active"}
                  type="switch"
                  id={`custom-switch-${index}`}
                  label={item?.status?.toUpperCase()}
                  className={`${
                    item?.status === "active"
                      ? "mb-3 text-success"
                      : "mb-3 text-danger"
                  } w-100 position-relative my-2`}
                />
              </Form>
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

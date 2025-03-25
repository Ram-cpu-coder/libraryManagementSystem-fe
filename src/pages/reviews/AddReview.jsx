import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const AddReview = () => {
  const { form, handleOnChange } = useForm({});
  const [rating, setRating] = useState(1);
  return (
    <div className="w-100 d-flex align-items-center flex-column">
      <Form className="w-100">
        <CustomInput
          label="Title"
          name="title"
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
              onClick={() => setRating(i + 1)}
              className={i < rating ? "text-warning" : ""}
            />
          ))}
        </div>

        <CustomInput
          label="Comment"
          name="comment"
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
            <Button variant="success" className="col-5">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddReview;

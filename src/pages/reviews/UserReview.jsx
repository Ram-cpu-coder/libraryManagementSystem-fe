import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserReview = () => {
  const { id } = useParams();
  const { books } = useSelector((state) => state.books);

  console.log(books);

  //   why reloading the page, data being lost
  const selectedBook = books.find((item) => item._id === id);
  console.log(selectedBook);

  return (
    <UserLayout pageTitle="Review">
      <div className="shadow-lg rounded w-75 border p-5">
        <div className="w-100 d-flex ">
          {" "}
          <img
            src={selectedBook.thumbnail}
            alt="thumbnail"
            style={{ height: "100px" }}
          />
          <div className="d-flex flex-column align-items-start">
            <span>{selectedBook.title}</span>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserReview;

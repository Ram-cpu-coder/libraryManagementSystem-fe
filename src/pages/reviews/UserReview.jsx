import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserReview = () => {
  const { _id } = useParams();
  const { books } = useSelector((state) => state.books);

  //   why reloading the page, data being lost
  const selectedBook = books.find((item) => item._id === _id);
  // console.log(selectedBook);

  return <UserLayout pageTitle="My Reviews"></UserLayout>;
};

export default UserReview;

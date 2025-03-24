import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminReviewsAction } from "../../features/reviews/reviewsAction";

const Reviews = () => {
  const dispatch = useDispatch();

  const { reviews } = useSelector((state) => state.reviews);
  console.log("Review", reviews);

  useEffect(() => {
    dispatch(fetchAdminReviewsAction());
  }, []);

  return <UserLayout pageTitle="All Reviews"></UserLayout>;
};

export default Reviews;

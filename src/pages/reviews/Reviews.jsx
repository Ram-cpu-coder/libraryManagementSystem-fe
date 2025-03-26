import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminReviewsAction } from "../../features/reviews/reviewsAction";
import ReviewTable from "./ReviewTable";

const Reviews = () => {
  const dispatch = useDispatch();

  const { reviews } = useSelector((state) => state.reviews);
  console.log("Review", reviews);

  useEffect(() => {
    dispatch(fetchAdminReviewsAction());
  }, []);

  return (
    <UserLayout pageTitle="All Reviews">
      <ReviewTable reviews={reviews} />
    </UserLayout>
  );
};

export default Reviews;

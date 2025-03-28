import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminReviewsAction } from "../../features/reviews/reviewsAction";
import ReviewTable from "./ReviewTable";

const Reviews = () => {
  return (
    <UserLayout pageTitle="All Reviews">
      <ReviewTable />
    </UserLayout>
  );
};

export default Reviews;

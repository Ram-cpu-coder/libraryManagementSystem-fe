import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import ReviewTable from "./ReviewTable";
import { useSelector } from "react-redux";

const Reviews = () => {
  return (
    <UserLayout pageTitle="All Reviews">
      <div className="d-flex flex-column w-100 table-responsive">
        <ReviewTable />
      </div>
    </UserLayout>
  );
};

export default Reviews;

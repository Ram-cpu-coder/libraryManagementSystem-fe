import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookAction } from "../../features/books/bookAction";
import UserLayout from "../../components/layout/UserLayout";

const Dashboard = () => {
  return (
    <UserLayout pageTitle="Dashboard">
      <h1>Main</h1>
    </UserLayout>
  );
};

export default Dashboard;

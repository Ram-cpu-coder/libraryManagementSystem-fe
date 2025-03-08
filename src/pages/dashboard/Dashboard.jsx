import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SideBar from "./SideBar";
import HeroPage from "./HeroPage";
import { userDataAction } from "../../features/users/userAction";
import { fetchAdminLevelBooksAction } from "../../features/books/bookAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDataAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAdminLevelBooksAction());
  }, [dispatch]);
  return (
    <div className="d-flex">
      <SideBar />
      <HeroPage />
    </div>
  );
};

export default Dashboard;

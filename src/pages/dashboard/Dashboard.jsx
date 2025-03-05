import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUserData } from "../../features/users/userAxios";
import SideBar from "./SideBar";
import HeroPage from "./HeroPage";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const user = userStore.user;
  useEffect(() => {
    if (userStore.user.length < 1) {
      dispatch(fetchUserData());
    }
  }, [userStore.user, dispatch]);
  console.log(user);
  return (
    <div className="d-flex">
      <SideBar />
      <HeroPage />
    </div>
  );
};

export default Dashboard;

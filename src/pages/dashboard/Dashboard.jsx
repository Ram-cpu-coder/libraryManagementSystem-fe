import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserDetail } from "../../features/users/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const user = userStore.user;
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);
  return (
    <div>
      hello
      <h1>{user.fName}</h1>
    </div>
  );
};

export default Dashboard;

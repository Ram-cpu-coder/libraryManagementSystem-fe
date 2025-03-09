import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import HeroPage from "./HeroPage";
import { userDataAction } from "../../features/users/userAction";
import { fetchAdminLevelBooksAction } from "../../features/books/bookAction";
import UpdateBooksAdmin from "../books/UpdateBooksAdmin";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(userDataAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAdminLevelBooksAction());
  }, [dispatch]);
  return (
    <div className="d-flex">
      <SideBar />
      {bookStore.isUpdate == true ? <UpdateBooksAdmin /> : <HeroPage />}
    </div>
  );
};

export default Dashboard;

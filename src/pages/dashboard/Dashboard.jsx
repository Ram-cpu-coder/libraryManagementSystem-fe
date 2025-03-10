import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import HeroPage from "./HeroPage";
import { getAllBookAction } from "../../features/books/bookAction";
import UpdateBooksAdmin from "../books/UpdateBooksAdmin";
import { setIsLogged } from "../../features/users/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);
  const userStore = useSelector((state) => state.users);

  const isPrivate = userStore.user.role == "admin" ? true : false;
  useEffect(() => {
    dispatch(getAllBookAction(isPrivate));
    dispatch(setIsLogged());
  }, [dispatch]);

  return (
    <div className="d-flex">
      <SideBar />
      {bookStore.isUpdate == true ? (
        <UpdateBooksAdmin />
      ) : (
        <HeroPage isPrivate={isPrivate} />
      )}
    </div>
  );
};

export default Dashboard;

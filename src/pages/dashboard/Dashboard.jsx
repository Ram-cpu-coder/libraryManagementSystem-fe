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

  // const isPrivate = userStore.user.role == "admin" ? true : false;

  const privateBoolean = userStore.user.role === "admin" ? true : false;

  console.log(privateBoolean);
  useEffect(() => {
    dispatch(getAllBookAction(privateBoolean));
    dispatch(setIsLogged());
  }, [dispatch, privateBoolean]);

  console.log(bookStore.books);
  return (
    <div className="d-flex">
      <SideBar />
      {bookStore.isUpdate == true ? (
        <UpdateBooksAdmin />
      ) : (
        <HeroPage isPrivate={userStore.isPrivate} books={bookStore.books} />
      )}
    </div>
  );
};

export default Dashboard;

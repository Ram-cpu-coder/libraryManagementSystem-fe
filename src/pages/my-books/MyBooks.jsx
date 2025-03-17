import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBorrows } from "../../features/borrows/borrowAction";
import UserLayout from "../../components/layout/UserLayout";
import BurrowBlock from "../borrows/BurrowBlock";

const MyBooks = () => {
  const dispatch = useDispatch();
  const { userBorrows } = useSelector((state) => state.borrows);

  useEffect(() => {
    dispatch(getUserBorrows());
  }, [dispatch]);
  return (
    <UserLayout pageTitle="My Books">
      <div className="w-100">
        {userBorrows.length} burrowed history found!
        <hr />
        <BurrowBlock borrows={userBorrows} />
      </div>
    </UserLayout>
  );
};

export default MyBooks;

import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowAction } from "../../features/borrows/borrowAction.js";

const Borrows = () => {
  const dispatch = useDispatch();
  const borrows = useSelector((state) => state.borrows);
  console.log("Borrows", borrows);
  useEffect(() => {
    // dispatch(createBorrowAction());
    dispatch(getBorrowAction());
  }, []);
  return (
    <UserLayout pageTitle="Burrow List">
      <div>Burrows</div>
    </UserLayout>
  );
};

export default Borrows;

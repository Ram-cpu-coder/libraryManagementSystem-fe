import React, { useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import BurrowBlock from "./BurrowBlock.jsx";
import { getBorrowAction } from "../../features/borrows/borrowAction.js";

const Borrows = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((state) => state.borrows);

  useEffect(() => {
    dispatch(getBorrowAction());
  });
  return (
    <UserLayout pageTitle="Burrow List">
      <div className="w-100">
        {borrows.length} burrowed history found!
        <hr />
        <BurrowBlock borrows={borrows} />
      </div>
    </UserLayout>
  );
};

export default Borrows;

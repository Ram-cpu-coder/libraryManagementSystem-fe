import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import BurrowBlock from "./BurrowBlock.jsx";
import { getBorrowAction } from "../../features/borrows/borrowAction.js";
import { getAllUsers } from "../../features/users/userAction.js";

const Borrows = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((state) => state.borrows);
  const { allUsers } = useSelector((state) => state.users);
  const [searchedData, setSearchedData] = useState([]);
  const [displayBorrows, setDisplayBorrows] = useState([]);

  const handleOnSearch = (e) => {
    setSearchedData(e.target.value);
    const filteredData = borrows.filter((item) => {
      return (
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.dueDate.toString().includes(e.target.value.toString())
      );
    });

    setDisplayBorrows(filteredData);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      (await dispatch(getAllUsers())) || [];
    };
    fetchStudents();
  }, [displayBorrows]);

  useEffect(() => {
    dispatch(getBorrowAction());
  }, []);

  useEffect(() => {
    setDisplayBorrows(borrows || []);
  }, [borrows]);

  return (
    <UserLayout pageTitle="All burrows">
      <div className="w-100">
        <div className="d-flex justify-content-end">
          <input
            type="search"
            name="search"
            id="search"
            className="p-1 mb-3 rounded"
            placeholder="Search Borrows ..."
            value={searchedData}
            onChange={handleOnSearch}
          />
        </div>
        {displayBorrows.length} burrowed history found!
        <hr />
        {displayBorrows.length ? (
          <BurrowBlock borrows={displayBorrows} students={allUsers} />
        ) : (
          <div className="text-center">No Borrows Found!</div>
        )}
      </div>
    </UserLayout>
  );
};

export default Borrows;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBorrows } from "../../features/borrows/borrowAction";
import UserLayout from "../../components/layout/UserLayout";
import BurrowBlock from "../borrows/BurrowBlock";

const MyBooks = () => {
  const dispatch = useDispatch();
  const { userBorrows } = useSelector((state) => state.borrows);

  const [searchedData, setSearchedData] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  const handleOnSearch = (e) => {
    setSearchedData(e.target.value);
    const filteredData = userBorrows.filter((item) => {
      return (
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.dueDate.toString().includes(e.target.value.toString()) ||
        item.status.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setDisplayBooks(filteredData);
  };
  console.log(displayBooks);
  useEffect(() => {
    dispatch(getUserBorrows());
  }, [dispatch]);

  useEffect(() => {
    setDisplayBooks(userBorrows);
  }, [userBorrows]);
  return (
    <UserLayout pageTitle="My Books">
      <div className="w-100">
        <div className="d-flex justify-content-end">
          <input
            type="search"
            name="search"
            id="search"
            className="p-1 mb-3 rounded"
            placeholder="Search Books... "
            value={searchedData}
            onChange={handleOnSearch}
          />
        </div>
        {displayBooks.length} book(s) history found!
        <hr />
        <BurrowBlock borrows={displayBooks} />
      </div>
    </UserLayout>
  );
};

export default MyBooks;

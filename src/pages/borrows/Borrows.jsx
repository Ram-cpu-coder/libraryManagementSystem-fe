import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import BurrowBlock from "./BurrowBlock.jsx";
import { getBorrowAction } from "../../features/borrows/borrowAction.js";

const Borrows = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((state) => state.borrows);

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
    dispatch(getBorrowAction());
    setDisplayBorrows(borrows);
  }, []);
  return (
    <UserLayout pageTitle="Burrow List">
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
        <BurrowBlock borrows={displayBorrows} />
      </div>
    </UserLayout>
  );
};

export default Borrows;

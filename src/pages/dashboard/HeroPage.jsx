import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminBooks from "../books/AdminBooks";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import UserLayout from "../../components/layout/UserLayout";
import { getAllBookAction } from "../../features/books/bookAction";

const HeroPage = () => {
  const bookStore = useSelector((state) => state.books);
  const userStore = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const books = bookStore.books;

  const [searchedData, setSearchedData] = useState();
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData(books);
  }, [books]);

  useEffect(() => {
    dispatch(getAllBookAction(true));
  }, []);

  const handleOnSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredData = books.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query)
    );
    setSearchedData(e.target.value);
    setDisplayData(filteredData);
  };

  return (
    <UserLayout pageTitle="Books">
      <div className="w-100">
        <div
          className="justify-content-end my-3"
          style={{
            display: userStore.user.role == "admin" ? "flex" : "none",
          }}
        >
          <Link to="/admin/addBook">
            <Button
              variant="primary"
              className="w-10 d-flex align-items-center gap-2"
            >
              <IoIosAddCircleOutline />
              Add New Book
            </Button>
          </Link>
        </div>

        <div
          className="d-flex justify-content-between align-items-center"
          style={{ height: "50px" }}
        >
          <p>{books?.length || 0} Books Found!</p>
          <input
            type="search"
            name="search"
            className="rounded p-1"
            placeholder="Search books ..."
            onChange={handleOnSearch}
            value={searchedData}
          />
        </div>
        <AdminBooks books={displayData} />
      </div>
    </UserLayout>
  );
};

export default HeroPage;

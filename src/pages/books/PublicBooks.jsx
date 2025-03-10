import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookAction } from "../../features/books/bookAction";
import { SyncLoader } from "react-spinners";
import BooksCard from "./BooksCard";

const PublicBooks = () => {
  const dispatch = useDispatch();

  const bookStore = useSelector((state) => state.books);

  // hooks
  const [searchedData, setSearchedData] = useState();
  const [displayBooks, setDisplayBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // search function
  const handleOnSearch = (e) => {
    const query = e.target.value.toLowerCase();
    console.log(query);
    const filtered = bookStore.books.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query)
    );

    setSearchedData(e.target.value);
    setDisplayBooks(filtered);
  };

  // action to fetch the books
  const fetchPublicBooks = () => {
    try {
      setIsLoading(true);
      // action to
      dispatch(getAllBookAction(false));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setDisplayBooks(bookStore.books);
  }, [bookStore.books]);

  useEffect(() => {
    fetchPublicBooks();
  }, []);

  return (
    <div className="my-2">
      <h1 className="text-center">Books you may want to Read !</h1>
      <div className="d-flex align-items-center justify-content-between px-4">
        <p>{displayBooks.length} book(s) found!</p>
        <input
          type="search"
          value={searchedData}
          className="rounded p-2 outline-0"
          placeholder="Search Books ..."
          onChange={handleOnSearch}
        />
      </div>
      <hr />
      <div className="d-flex justify-content-center w-100">
        <div className="row row-cols-1 row-cols-md-4 g-4 m-1 d-flex justify-content-center">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center min-vh-100">
              <SyncLoader
                color="blue"
                margin={5}
                size={10}
                speedMultiplier={1}
              />
            </div>
          ) : !displayBooks.length < 1 ? (
            displayBooks.map((item, index) => {
              return <BooksCard item={{ ...item }} key={index} />;
            })
          ) : (
            <div className="w-100">No Books Found !</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicBooks;

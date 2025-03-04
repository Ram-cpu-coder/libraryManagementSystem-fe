import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookAction } from "../../features/books/bookAction";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

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
      dispatch(getAllBookAction());
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
  console.log(bookStore.books);

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
              return (
                <div
                  className="border d-flex flex-column align-items-center m-1"
                  style={{
                    height: "300px",
                    width: "300px",
                    overflow: "hidden",
                  }}
                  key={index}
                >
                  <img
                    src={item.thumbnail}
                    className="px-1"
                    alt=""
                    style={{ height: "150px", width: "240px" }}
                  />
                  <div className="w-100 mt-2">
                    <h5 className="text-center">
                      {item.title}
                      <p className="fw-light">
                        ({item.author}-{item.publishedYear})
                      </p>
                    </h5>
                    <p className="overflow-hidden">{item.description}</p>
                  </div>
                  <div className="d-flex justify-content-end w-100">
                    <Link
                      className="icon-link icon-link-hover text-white bg-primary text-decoration-none border p-2 rounded"
                      to={"/books-landing-page/" + item._id}
                    >
                      Read it
                      <svg className="bi" aria-hidden="true">
                        <BsArrowRight />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
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

import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helpers/axiosHelper";
import { BsArrowRight } from "react-icons/bs";
import { setBooks } from "../../slice/bookSlice";
import { useDispatch } from "react-redux";

const PublicBooks = () => {
  const dispatch = useDispatch();
  const bookApi = import.meta.env.VITE_API_BASE_URL;

  const [book, setBooks] = useState([]);
  const [searchedData, setSearchedData] = useState();
  const [displayBooks, setDisplayBooks] = useState([]);

  // search function
  const handleOnSearch = (e) => {
    const query = e.target.value.toLowerCase();
    console.log(query);
    const filtered = book.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query)
    );

    setSearchedData(e.target.value);
    setDisplayBooks(filtered);
  };

  // action to fetch the books
  const fetchPublicBooks = async () => {
    try {
      const data = await apiProcessor({
        method: "get",
        url: bookApi + "/books/pub-books",
        isPrivate: false,
        isRefreshToken: false,
      });
      dispatch(setBooks(data.books));
      console.log(data.books, "books available");
    } catch (error) {}
  };
  useEffect(() => {
    setDisplayBooks(book);
  }, [book]);

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
      <div className="row row-cols-1 row-cols-md-4 g-4 m-1 d-flex justify-content-center">
        {!displayBooks.length < 1 ? (
          displayBooks.map((item) => {
            return (
              <div
                className="border d-flex flex-column align-items-center justify-content-center m-1"
                style={{ height: "300px", width: "300px", overflow: "hidden" }}
              >
                <img
                  src={item.thumbnail}
                  className="px-1"
                  alt=""
                  style={{ height: "150px", width: "240px" }}
                />
                <div className="w-100 mt-2">
                  <h5 className="text-center">
                    {item.title} <p className="fw-light">({item.author})</p>
                  </h5>
                  <p className="overflow-hidden">{item.description}</p>
                </div>
                <a
                  className="icon-link icon-link-hover text-dark w-100 d-flex justify-content-end text-decoration-none"
                  href="#"
                >
                  Read it
                  <svg className="bi" aria-hidden="true">
                    <BsArrowRight />
                  </svg>
                </a>
              </div>
            );
          })
        ) : (
          <div>No Books Found !</div>
        )}
      </div>
    </div>
  );
};

export default PublicBooks;

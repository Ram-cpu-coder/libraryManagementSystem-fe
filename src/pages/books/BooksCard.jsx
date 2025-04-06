import React from "react";
import { Link } from "react-router-dom";

const BooksCard = ({ item }) => {
  const rootUrl = import.meta.env.VITE_APP_ASSET_URL;
  return (
    <Link
      to={"/books-landing-page/" + item._id}
      className="nav-link col-md-6 col-sm-12 col-lg-4 my-2 d-flex justify-content-center"
    >
      <div
        className="border d-flex flex-column align-items-center m-1 py-2"
        style={{
          maxHeight: "400px",
          width: "300px",
        }}
        key={item.isbn}
      >
        <img
          src={`${rootUrl}${item.thumbnail}`}
          className="px-1"
          alt=""
          style={{ maxHeight: "300px", width: "240px" }}
        />
        <div className="w-100 mt-2">
          <h5 className="text-center">
            {item.title}
            <p className="fw-light">
              ({item.author}-{item.publishedYear})
            </p>
          </h5>
          {/* <p className="overflow-hidden text-center">{item.description}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;

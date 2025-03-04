import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const BooksCard = ({ item }) => {
  return (
    <div
      className="border d-flex flex-column align-items-center m-1"
      style={{
        height: "300px",
        width: "300px",
        overflow: "hidden",
      }}
      key={item.isbn}
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
};

export default BooksCard;

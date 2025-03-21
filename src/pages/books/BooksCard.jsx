import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const BooksCard = ({ item }) => {
  return (
    <Link className="nav-link" to={"/books-landing-page/" + item._id}>
      <div
        className="border d-flex flex-column align-items-center m-1 py-2"
        style={{
          height: "300px",
          width: "300px",
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
          <p className="overflow-hidden text-center">{item.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;

import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const MAXRATING = 5;
const Stars = ({ stars = 0, totalReviews }) => {
  const fullRatings = Math.floor(stars);
  const halfRatings = !Number.isInteger(stars); // function to find out if the stars variable is integer
  const emptyRatings = MAXRATING - fullRatings - (halfRatings ? 1 : 0);

  if (stars > MAXRATING) {
    return "Invalid Ratings!";
  }
  const showStars = [];

  for (let i = 0; i < fullRatings; i++) {
    showStars.push(<FaStar className="text-warning" />);
  }

  //   in case of half stars
  halfRatings &&
    showStars.push(<FaStarHalfAlt className="text-warning text-secondary" />);

  if (emptyRatings) {
    for (let i = 0; i < emptyRatings; i++) {
      showStars.push(<FaRegStar />);
    }
  }
  return (
    <div className="d-flex align-items-center">
      {showStars}{" "}
      {totalReviews && (
        <span>
          &nbsp;({stars.toFixed(1)}/{totalReviews})
        </span>
      )}
    </div>
  );
};

export default Stars;

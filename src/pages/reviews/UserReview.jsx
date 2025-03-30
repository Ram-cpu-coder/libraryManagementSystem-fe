import React, { use, useEffect } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { fetchUsersReviewsAction } from "../../features/reviews/reviewsAction";
import Stars from "../../components/stars/Stars";

const UserReview = () => {
  const thumbnailEP = import.meta.env.VITE_APP_ASSET_URL;
  const dispatch = useDispatch();
  const { userReviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchUsersReviewsAction());
  }, []);
  return (
    <UserLayout pageTitle="My Reviews">
      <div className="d-flex flex-column w-100">
        <p>{userReviews.length} review(s) found!</p>
        {userReviews.length > 0 ? (
          <Table bordered hover relative>
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {userReviews?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={`${thumbnailEP}${item.thumbnail}`}
                      alt="Images"
                      style={{ height: "70px", width: "50px" }}
                    />
                  </td>
                  <td className="d-flex flex-column justify-content-center">
                    <h2>{item.heading}</h2>{" "}
                    <div>
                      <Stars stars={item.ratings} />
                    </div>
                    <p>{item.message}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div></div>
        )}
      </div>
    </UserLayout>
  );
};

export default UserReview;

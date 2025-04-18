import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.users);

  const profileEP = import.meta.env.VITE_APP_ASSET_URL;
  return (
    <UserLayout pageTitle="Profile">
      <div className=" border shadow rounded p-2 d-flex justify-content-center flex-column mb-3 col-12 col-md-9">
        <div className="text-center bold">
          <div className="d-flex justify-content-center w-100">
            <Col xs={6} md={4} className="w-50 position-relative">
              <Image
                src={`${profileEP}${user.profilePic}` || "/profile.png"}
                roundedCircle
                className=""
                style={{ height: "200px", width: "200px" }}
              />
            </Col>
          </div>
          <div className="mt-4 ">
            <h1>
              {user.fName} {user.lName}
            </h1>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column justify-content-center w-100 mb-2">
          <div className="w-100 mt-2 d-flex flex-column justify-content-center align-items-between px-3">
            <p className="d-flex flex-column flex-md-row justify-content-md-between justify-content-lg-between align-items-center">
              <span className="fw-bold">Phone</span>{" "}
              <span className="">{user.phone}</span>
            </p>
            <p className="d-flex flex-column flex-md-row justify-content-md-between justify-content-lg-between align-items-center">
              <span className="fw-bold">Email</span>{" "}
              <span className="">{user.email}</span>
            </p>
          </div>
          <Link to="/editProfile" className="px-5 text-center">
            Edit Profile
          </Link>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;

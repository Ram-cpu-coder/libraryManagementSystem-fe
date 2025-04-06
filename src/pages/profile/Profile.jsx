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
      <div className="w-50 border shadow rounded p-2 d-flex justify-content-center flex-column">
        <div className="text-center bold">
          <div className="d-flex justify-content-center w-100">
            <Col xs={6} md={4} className="w-50 position-relative">
              <Image
                src={`${profileEP}${user.profilePic}`}
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
        <div className="d-flex flex-column justify-content-center w-100">
          <div className="w-100 mt-2 d-flex flex-column justify-content-center align-items-between px-5">
            <p className="d-flex justify-content-between">
              Phone <span>{user.phone}</span>
            </p>
            <p className="d-flex justify-content-between">
              Email <span>{user.email}</span>
            </p>
          </div>
          <Link to="/editProfile" className="px-5">
            Edit Profile
          </Link>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;

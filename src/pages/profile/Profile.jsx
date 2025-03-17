import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <UserLayout pageTitle="Profile">
      <div className="w-50 border shadow rounded p-2">
        <div className="text-center bold">
          {/* profile image in case we need  */}
          {user.fName} {user.lName}
        </div>
        <div>
          <p className="d-flex justify-content-between">
            Phone <span>{user.phone}</span>
          </p>
          <p className="d-flex justify-content-between">
            Email <span>{user.email}</span>
          </p>
        </div>
        <hr className="w-100" />
        <Link to="/editProfile">Edit Profile</Link>
      </div>
    </UserLayout>
  );
};

export default Profile;

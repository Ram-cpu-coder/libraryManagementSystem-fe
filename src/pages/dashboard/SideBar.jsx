import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LiaPrayingHandsSolid } from "react-icons/lia";

const SideBar = ({ menubar }) => {
  const userStore = useSelector((state) => state.users);
  const user = userStore.user;
  const list =
    user.role === "admin"
      ? menubar
      : menubar.filter((item) => !item.isAdminOnly);

  return (
    <div
      className="d-flex flex-column justify-content-start p-4 bg-dark text-white min-vh-100"
      style={{ width: "300px" }}
    >
      <div>
        <p className="d-flex align-items-center gap-2">
          Welcome Back <LiaPrayingHandsSolid className="fs-5" />
        </p>
        <h1>
          {user.fName} {user.lName}
        </h1>
      </div>
      <hr className="my-3" />
      <div className="d-flex flex-column my-2">
        {list.map((menus, index) => {
          return (
            <Link
              key={index}
              to={menus.Link}
              className="my-2 d-flex align-items-center gap-2 text-decoration-none text-white"
            >
              {menus.icon}
              {menus.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

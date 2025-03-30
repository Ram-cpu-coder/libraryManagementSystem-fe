import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { Stack } from "react-bootstrap";

const SideBar = ({ menubar }) => {
  const { user, menu } = useSelector((state) => state.users);
  const list =
    user.role === "admin"
      ? menubar
      : menubar.filter((item) => !item.isAdminOnly);
  return (
    <div
      className="d-flex flex-column justify-content-start p-4 bg-dark text-white custom-height-width min-sm-vh-100"
      style={{ minHeight: "5vh" }}
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
      <div className="d-flex flex-column my-2 min-w-25">
        <Stack gap={1} className="d-flex flex-row flex-md-column flex-wrap">
          {list.map((item, index) => {
            return (
              <Link
                key={item.name}
                to={item.Link}
                className={`nav-link p-1 d-flex align-items-center gap-1 ${
                  item.name === menu ? "bg-white text-dark rounded" : ""
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </Stack>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdReviews } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LiaPrayingHandsSolid } from "react-icons/lia";

const SideBar = () => {
  const menubar = [
    {
      icon: <LiaBookSolid />,
      name: "Dashboard",
      Link: "/user",
    },
    {
      icon: <IoIosPeople />,
      name: "Students",
      Link: "",
    },
    {
      icon: <TfiMenuAlt />,
      name: "All burrows",
      Link: "",
    },
    {
      icon: <MdReviews />,
      name: "All Reviews",
      Link: "",
    },
    {
      icon: <PiNotebookDuotone />,
      name: "My Books",
      Link: "",
    },
    {
      icon: <CgProfile />,
      name: "Profile",
      Link: "",
    },
  ];

  const userStore = useSelector((state) => state.users);
  const user = userStore.user;
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
        {menubar.map((menus, index) => {
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

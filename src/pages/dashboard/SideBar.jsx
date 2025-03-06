import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdReviews } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menubar = [
    {
      icon: <LiaBookSolid />,
      name: "Books",
      Link: "",
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
  return (
    <div className="d-flex flex-column justify-content-start p-4 bg-dark text-white vh-100 w-25">
      <div>
        <p>Welcome Back</p>
        <h1>"USER"</h1>
      </div>
      <hr className="my-3" />
      <div className="d-flex flex-column my-2">
        {menubar.map((menus) => {
          return (
            <Link
              to={"/" + menus.Link}
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

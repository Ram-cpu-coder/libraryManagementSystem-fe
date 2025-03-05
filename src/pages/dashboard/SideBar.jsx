import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdReviews } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  const menubar = [
    {
      icon: <LiaBookSolid />,
      name: "Books",
    },
    {
      icon: <IoIosPeople />,
      name: "Students",
    },
    {
      icon: <TfiMenuAlt />,
      name: "All burrows",
    },
    {
      icon: <MdReviews />,
      name: "All Reviews",
    },
    {
      icon: <PiNotebookDuotone />,
      name: "My Books",
    },
    {
      icon: <CgProfile />,
      name: "Profile",
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
            <div className="my-2 d-flex align-items-center gap-2">
              {menus.icon}
              {menus.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

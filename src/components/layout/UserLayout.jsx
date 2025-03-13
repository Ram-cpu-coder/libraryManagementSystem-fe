import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../../pages/dashboard/SideBar";

import { LiaBookSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdReviews } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import AuthRoute from "../auth/AuthRoute";
import { useDispatch } from "react-redux";
import { userDataAction } from "../../features/users/userAction";

const UserLayout = ({ children, pageTitle }) => {
  const menubar = [
    {
      icon: <LiaBookSolid />,
      name: "Books",
      Link: "/admin",
      isAdminOnly: true,
    },
    {
      icon: <IoIosPeople />,
      name: "Students",
      Link: "/students",
      isAdminOnly: true,
    },
    {
      icon: <TfiMenuAlt />,
      name: "All burrows",
      Link: "/burrows",
      isAdminOnly: true,
    },
    {
      icon: <MdReviews />,
      name: "All Reviews",
      Link: "/reviews",
      isAdminOnly: false,
    },
    {
      icon: <PiNotebookDuotone />,
      name: "My Books",
      Link: "/my-books",
      isAdminOnly: false,
    },
    {
      icon: <CgProfile />,
      name: "Profile",
      Link: "/profile",
      isAdminOnly: false,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDataAction());
  }, []);
  return (
    <AuthRoute>
      <div>
        <Header />
        <div className="min-vh-100 d-flex w-100">
          <SideBar menubar={menubar} />

          <div className="d-flex flex-column w-100 px-4">
            <h1 className="mt-3 text-center">{pageTitle}</h1>
            <hr className="w-100" />
            <main className="d-flex justify-content-center align-items-center w-100">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </AuthRoute>
  );
};

export default UserLayout;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-vh-100">
        <div className="left">SideBar</div>
        <main className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;

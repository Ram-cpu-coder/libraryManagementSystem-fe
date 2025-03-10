import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-vh-100">
        <div className="left"></div>
        <main className="main">
          <Outlet />

          {/* there is another way of layouting, take reference from drive's code of 10-03 date  */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;

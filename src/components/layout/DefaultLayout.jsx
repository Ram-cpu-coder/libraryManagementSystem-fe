import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <div>
      {/* header Section  */}
      <Header />

      {/* main body section */}
      <main className="main min-vh-100">
        <Outlet />
      </main>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;

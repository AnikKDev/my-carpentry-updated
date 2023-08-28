import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharedPages/Footer";
import Header from "../SharedPages/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./Authorization/RequireAuth";
import RequireAdmin from "./Authorization/RequireAdmin";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import Blogs from "./pages/Blogs";
import AddAReview from "./pages/Dashboard/AddAReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import { Toaster } from "react-hot-toast";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import MyPortfolio from "./pages/MyPortfolio";
import ToolDetail from "./pages/ToolDetail/ToolDetail";
import Header from "./SharedPages/Header";
import AddProduct from "./pages/Dashboard/AddProduct";
import Payment from "./pages/Dashboard/Payment";
import Footer from "./SharedPages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import router from "./router/router";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RequireAdmin from "./Authorization/RequireAdmin";
import RequireAuth from "./Authorization/RequireAuth";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import Blogs from "./pages/Blogs";
import AddAReview from "./pages/Dashboard/AddAReview";
import AddProduct from "./pages/Dashboard/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Dashboard/Payment";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import ToolDetail from "./pages/ToolDetail/ToolDetail";

const router = createBrowserRouter([
  /* 
  <Route path="/tool/:id" element={
          <RequireAuth>
            <ToolDetail></ToolDetail>
          </RequireAuth>
        }></Route>
  */
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <MyOrders />,
          },
          {
            path: "addareview",
            element: <AddAReview />,
          },
          {
            path: "myprofile",
            element: <MyProfile />,
          },
          {
            path: "payment/:id",
            element: <Payment />,
          },
          {
            path: "users",
            element: (
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            ),
          },
          {
            path: "addproduct",
            element: (
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            ),
          },
          {
            path: "manageproducts",
            element: (
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            ),
          },
        ],
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/tool/:id",
        element: (
          <RequireAuth>
            <ToolDetail></ToolDetail>
          </RequireAuth>
        ),
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

import auth from "../../firebase.init";
import LoadingSpinner from "../../SharedPages/LoadingSpinner";
const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery("booking", () =>
    fetch(
      `https://my-carpentry-server-test-vercel-kh5971eg7-anikkdev.vercel.app/booking?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  useEffect(() => {
    if (bookings) {
      setOrders(bookings);
    }
  }, [bookings]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleDeleteOrder = (id) => {
    // console.log(id)

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // delete api from db
        fetch(
          `https://my-carpentry-server-test-vercel-kh5971eg7-anikkdev.vercel.app/booking/${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              swal("Order deleted", {
                icon: "success",
              });
            } else {
              toast.error("Failed to remove order");
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Tool</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>{item.toolName}</td>
                <td>{item.quantity}</td>
                <td>
                  {item.price && !item.paid ? (
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button className="btn btn-sm btn-success">Pay</button>
                    </Link>
                  ) : (
                    <div>
                      <span className="text-success">PAID</span>
                      <p className="text-success font-bold">
                        TransactionID: {item.transactionId}
                      </p>
                    </div>
                  )}
                  {!item.paid && (
                    <button
                      className="btn btn-sm btn-primary mx-3"
                      onClick={() => handleDeleteOrder(item._id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

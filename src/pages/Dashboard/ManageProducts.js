import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { useQuery } from "react-query";
import LoadingSpinner from "../../SharedPages/LoadingSpinner";

const ManageProducts = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      "https://my-carpentry-server-test-vercel-kh5971eg7-anikkdev.vercel.app/bookings",
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  // handle delete
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://my-carpentry-server-test-vercel-kh5971eg7-anikkdev.vercel.app/bookings/${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              refetch();
              swal("Order's been deleted", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Order remains");
      }
    });
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h2 className="text-2xl my-5 text-primary">Manage Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Tool Name</th>
              <th>User Mail</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.toolName}</td>
                <td>{order.email}</td>
                <td>{order?.address}</td>
                <td>{order.quantity}</td>
                <td className="text-success font-bold uppercase">
                  {order.paid ? "Paid" : "Pending"}
                </td>
                {order.paid || (
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;

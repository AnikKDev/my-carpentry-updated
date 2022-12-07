import React from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../SharedPages/LoadingSpinner";
import { toast } from "react-hot-toast";
const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make Admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Added as an Admin");
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl my-5 text-primary">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className="btn btn-sm"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <span className="text-primary font-bold">Admin</span>
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

export default Users;

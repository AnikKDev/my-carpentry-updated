import React, { useState, useEffect, useRef, createRef } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
const ToolDetail = () => {
  const [user, loading, error] = useAuthState(auth);

  const { id } = useParams();
  const [toolDetail, setToolDetail] = useState({});
  const {
    toolName,
    price,
    minQuantity,
    availableQuantity,
    picture,
    detail,
    _id,
  } = toolDetail;

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      email: user?.email || "",
      // quantity: minQuantity || ''
    },
  });
  const watchQuantity = watch("quantity");
  // console.log(minQuantity);
  // console.log(watchQuantity);

  useEffect(() => {
    (async function getTool() {
      try {
        const response = await axios.get(`http://localhost:5000/tool/${id}`);
        setToolDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  // form submission
  const onSubmit = (data) => {
    if (
      parseInt(watchQuantity) <= parseInt(availableQuantity) &&
      parseInt(watchQuantity) >= parseInt(minQuantity)
    ) {
      // console.log('perfect quantity');
      const orderData = {
        toolId: _id,
        toolName: toolName,
        price: price,
        email: user.email,
        address: data.address,
        quantity: watchQuantity,
        phone: data.phone,
      };

      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            swal({
              title: "Success!",
              text: "Your Order has been placed successfully!",
              icon: "success",
              button: "Done!",
            });
          }
        });
    } else {
      swal({
        title: "Couldn't Proceed!",
        text: "Something went wrong!",
        icon: "error",
        button: "OK!",
      });
    }

    reset();
  };
  return (
    <div className="lg:min-h-screen flex items-center justify-center my-28 ">
      <div className="card lg:card-side lg:mx-24 bg-base-100 shadow-xl py-12 px-6">
        <figure>
          <img className="w-96" src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold uppercase">{toolName}</h2>
          <p>{detail}</p>
          <h4 className="text-xl font-semibold">
            <span className="text-primary">Price</span> (per piece): ${price}
          </h4>
          <h4 className="text-xl font-semibold">
            <span className="text-primary">Minimum Quantity</span>:{" "}
            {minQuantity}
          </h4>
          <h4 className="text-xl font-semibold">
            <span className="text-primary">Availble Quantity</span>:{" "}
            {availableQuantity}
          </h4>
        </div>
        {/* order form */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body w-full lg:w-96"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                disabled
                className="input input-bordered"
                {...register("name")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                disabled
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="address"
                className="input input-bordered"
                {...register("address")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                required
                placeholder="phone"
                className="input input-bordered"
                {...register("phone")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Order Quantity</span>
              </label>
              <input
                defaultValue={minQuantity || ""}
                type="number"
                required
                placeholder="Quantity"
                className="input input-bordered"
                {...register("quantity")}
              />
              {(parseInt(watchQuantity) > parseInt(availableQuantity) ||
                parseInt(watchQuantity) < parseInt(minQuantity)) && (
                <p className="text-error">
                  Please check minimum and maximum order quota
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                class="btn btn-primary "
                disabled={
                  parseInt(watchQuantity) > parseInt(availableQuantity) ||
                  parseInt(watchQuantity) < parseInt(minQuantity)
                }
              >
                Continue Purchasing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;

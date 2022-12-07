import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast } from "react-hot-toast";
import Rating from "react-rating";
const AddAReview = () => {
  const [user] = useAuthState(auth);
  const [rating1, setRating1] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  // form submission
  const onSubmit = (data) => {
    console.log(rating1);
    if (data.rating > 5 || data.rating < 1) {
      // console.log('invalid')
      toast.error("Please give a rating between 1-5");
    }
    // post review to server
    else {
      // console.log('valid')
      const review = {
        name: user.displayName,
        rating: rating1,
        comment: data.comment,
      };
      console.log(review);
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            toast.success("Thank you for your review");
            reset();
          }
        });
    }
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary ">
            Your Opinion Matters...!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <Rating
                className="text-yellow-300 text-xs"
                initialRating={rating1}
                emptySymbol="fa fa-star-o fa-2x star"
                fullSymbol="fa fa-star fa-2x star"
                onClick={(rate) => setRating1(rate)}
              />
              <span className="label-text text-error">
                {errors.rating?.type === "required" &&
                  "Please add a rating 1-5"}
              </span>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Write something</span>
              </label>
              <textarea
                type="text"
                placeholder="write something"
                className="input input-bordered"
                {...register("comment", { required: true })}
              />
              <span className="label-text text-error">
                {errors.comment?.type === "required" &&
                  "Please write your comment about our service."}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;

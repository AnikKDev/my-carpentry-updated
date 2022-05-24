import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-hot-toast';
const AddAReview = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    // form submission
    const onSubmit = (data) => {
        // console.log(data)
        // post review to server
        const review = {
            name: user.displayName,
            rating: data.rating,
            comment: data.comment
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Thank you for your review');
                    reset()
                }
            })
    };
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} class="card-body">

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Ratings</span>
                            </label>
                            <input type="number" placeholder="../5" class="input input-bordered"
                                {...register("rating", { required: true })}
                            />
                            <span class="label-text text-error">{errors.rating && "Please add a rating 1-5"}</span>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Write something</span>
                            </label>
                            <textarea type="text" placeholder="write something" class="input input-bordered"
                                {...register("comment", { required: true })}
                            />
                            <span class="label-text text-error">{errors.comment && "Please write your comment about our service."}</span>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;
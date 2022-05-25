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
        if (data.rating > 5 || data.rating < 1) {
            // console.log('invalid')
            toast.error('Please give a rating between 1-5')
        }
        // post review to server
        else {
            // console.log('valid')
            const review = {
                name: user.displayName,
                rating: data.rating,
                comment: data.comment
            }
            fetch('https://whispering-sierra-85456.herokuapp.com/reviews', {
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
        }
    };
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold text-primary ">Your Opinion Matters...!</h1>

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
                            <span class="label-text text-error">{errors.rating?.type === 'required' && "Please add a rating 1-5"}</span>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Write something</span>
                            </label>
                            <textarea type="text" placeholder="write something" class="input input-bordered"
                                {...register("comment", { required: true })}
                            />
                            <span class="label-text text-error">{errors.comment?.type === 'required' && "Please write your comment about our service."}</span>
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
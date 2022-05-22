import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    // sign in with email
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    // form submission
    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password);
        reset()
    };

    // sign in with google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (user || gUser) {
        navigate(from, { replace: true });
    };
    return (
        <div className=" flex justify-center lg:h-screen items-center">
            <div class="card w-full md:w-96 items-center shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} class="card-body w-full lg:w-96">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="email" class="input input-bordered" />
                        <span class="label-text text-error">{errors.email?.type === 'required' && "Email is required"}</span>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password" placeholder="password" class="input input-bordered" />
                        <span class="label-text text-error">{errors.password && "Password is required"}</span>


                    </div>
                    <div class="form-control mt-6">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>

                </form>
                <label class="my-2">
                    <button class="btn btn-link px-0">Forgot password?</button>
                </label>
                <div class="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-80">SIGN iN WITH GOOGLE</button>
                <label class="mt-2">
                    Don't have an account?<Link to="/signup" class="btn btn-link px-0">Sign Up</Link>
                </label>
            </div>
        </div>
    );
};

export default Login;
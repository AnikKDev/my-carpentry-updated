import React, { useState, useEffect, useRef, createRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from "axios";
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
const ToolDetail = () => {
    const [user, loading, error] = useAuthState(auth);

    const { id } = useParams();
    const [toolDetail, setToolDetail] = useState({});
    const { toolName, price, minQuantity, availableQuantity, picture, detail, _id } = toolDetail;

    const { register, watch, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: {
            name: user?.displayName || '',
            email: user?.email || '',
            // quantity: minQuantity || ''
        }
    });
    const watchQuantity = watch('quantity');
    // console.log(minQuantity);
    // console.log(watchQuantity);


    useEffect(() => {
        (async function getTool() {
            try {
                const response = await axios.get(`https://whispering-sierra-85456.herokuapp.com/tool/${id}`);
                setToolDetail(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [id]);

    // form submission
    const onSubmit = (data) => {
        if (parseInt(watchQuantity) <= parseInt(availableQuantity) && parseInt(watchQuantity) >= parseInt(minQuantity)) {
            // console.log('perfect quantity');
            const orderData = {
                toolId: _id,
                toolName: toolName,
                price: price,
                email: user.email,
                address: data.address,
                quantity: watchQuantity,
                phone: data.phone
            }

            fetch('https://whispering-sierra-85456.herokuapp.com/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        swal({
                            title: "Success!",
                            text: "Your Order has been placed successfully!",
                            icon: "success",
                            button: "Done!",
                        });
                    }
                })
        } else {
            swal({
                title: "Couldn't Proceed!",
                text: "Something went wrong!",
                icon: "error",
                button: "OK!",
            });
        }


        reset()
    };
    return (
        <div className="lg:min-h-screen flex items-center justify-center my-28 ">
            <div class="card lg:card-side lg:mx-24 bg-base-100 shadow-xl py-12 px-6">
                <figure><img className='w-96' src={picture} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="text-3xl font-bold uppercase">{toolName}</h2>
                    <p>{detail}</p>
                    <h4 className="text-xl font-semibold"><span className="text-primary">Price</span> (per piece): ${price}</h4>
                    <h4 className="text-xl font-semibold"><span className="text-primary">Minimum Quantity</span>: {minQuantity}</h4>
                    <h4 className="text-xl font-semibold"><span className="text-primary">Availble Quantity</span>: {availableQuantity}</h4>

                </div>
                {/* order form */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body w-full lg:w-96">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input

                                type="text" disabled class="input input-bordered"
                                {...register("name")}
                            />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email" disabled class="input input-bordered"
                                {...register("email")}
                            />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input
                                type="text" name='address' required placeholder='address' class="input input-bordered"
                                {...register("address")}
                            />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input
                                type="number" name='phone' required placeholder='phone' class="input input-bordered"
                                {...register("phone")}
                            />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input
                                defaultValue={minQuantity || ''}
                                type="number" required placeholder='Quantity' class="input input-bordered"
                                {...register("quantity")}
                            />
                            {(parseInt(watchQuantity) > parseInt(availableQuantity) || parseInt(watchQuantity) < parseInt(minQuantity)) && <p className="text-error">Please check minimum and maximum order quota</p>}


                        </div>


                        <div class="form-control mt-6">
                            <button type="submit" class='btn btn-primary ' disabled={parseInt(watchQuantity) > parseInt(availableQuantity) || parseInt(watchQuantity) < parseInt(minQuantity)} >Continue Purchasing</button>
                        </div>

                    </form >
                </div>
            </div>
        </div>
    );
};

export default ToolDetail;
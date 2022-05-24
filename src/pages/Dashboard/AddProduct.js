import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    // add tools
    const imagebbKey = '6010a2c2321ad51db343a9e42ee5000b';

    const onSubmit = async data => {
        console.log(data);
        // get the image from imgbb
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // post image to imgbb 
        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const picture = result.data.url;
                    const product = {
                        toolName: data.name,
                        detail: data.detail,
                        picture: picture,
                        price: data.price,
                        minQuantity: data.minquantity,
                        availableQuantity: data.availablequantity
                    };
                    // send to main server and db
                    fetch('http://localhost:5000/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(insertedTool => {
                            console.log(insertedTool)
                        })

                }
            })
        // reset()
    };
    return (
        <div className=" flex justify-center">
            <div class="card w-full md:mt-11 md:w-96 items-center shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} class="card-body w-full lg:w-96">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="Tool Name" class="input input-bordered" />
                        <span class="label-text text-error">{errors.email?.type === 'required' && "Name is required"}</span>
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Detail</span>
                        </label>
                        <textarea
                            {...register("detail", { required: true })}
                            placeholder="Tool Detail" class="input input-bordered" />
                        <span class="label-text text-error">{errors.email?.type === 'required' && "Detail is required"}</span>
                    </div>


                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Picture</span>
                        </label>
                        <input
                            type="file" placeholder="Picture" class="input input-bordered"
                            {...register("image", { required: true })}
                        />
                        <span class="label-text text-error">{errors.image?.type === 'required' && "Picure is required"}</span>
                    </div>


                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Price</span>
                        </label>
                        <input
                            {...register("price", { required: true })}
                            type="number" placeholder="Price Piece" class="input input-bordered" />
                        <span class="label-text text-error">{errors.price?.type === 'required' && "Price is required"}</span>
                    </div>


                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Minimum Quantity</span>
                        </label>
                        <input
                            {...register("minquantity", { required: true })}
                            type="number" placeholder="Minimum Quantity" class="input input-bordered" />
                        <span class="label-text text-error">{errors.minquantity?.type === 'required' && "Minimum Quantity is required"}</span>
                    </div>


                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Available Quantity</span>
                        </label>
                        <input
                            {...register("availablequantity", { required: true })}
                            type="number" placeholder="Available Quantity" class="input input-bordered" />
                        <span class="label-text text-error">{errors.availablequantity?.type === 'required' && "Available Quantity is required"}</span>
                    </div>

                    <div class="form-control mt-6">
                        <button type="submit" class="btn btn-primary">Add Tool</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;
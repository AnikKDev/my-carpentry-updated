import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
const AddProduct = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    // add tools
    const imagebbKey = '6010a2c2321ad51db343a9e42ee5000b';

    const onSubmit = async data => {
        // console.log(data);
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
                    fetch('https://whispering-sierra-85456.herokuapp.com/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(insertedTool => {
                            // console.log(insertedTool)
                            if (insertedTool.acknowledged === true) {
                                reset();
                                toast.success('Item added')
                            }
                        })

                }
            })
        // reset()
    };
    return (

        < div >
            <h2 className="text-2xl my-5 text-primary">Add Tool</h2>
            <div className=" flex justify-center">
                <div className="mb-8 card w-full md:mt-11 md:w-96 items-center shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full lg:w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text" placeholder="Tool Name" className="input input-bordered" />
                            <span className="label-text text-error">{errors.email?.type === 'required' && "Name is required"}</span>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail</span>
                            </label>
                            <textarea
                                {...register("detail", { required: true })}
                                placeholder="Tool Detail" className="input input-bordered" />
                            <span className="label-text text-error">{errors.email?.type === 'required' && "Detail is required"}</span>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input
                                type="file" placeholder="Picture" className="input input-bordered"
                                {...register("image", { required: true })}
                            />
                            <span className="label-text text-error">{errors.image?.type === 'required' && "Picure is required"}</span>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number" placeholder="Price Piece" className="input input-bordered" />
                            <span className="label-text text-error">{errors.price?.type === 'required' && "Price is required"}</span>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>
                            </label>
                            <input
                                {...register("minquantity", { required: true })}
                                type="number" placeholder="Minimum Quantity" className="input input-bordered" />
                            <span className="label-text text-error">{errors.minquantity?.type === 'required' && "Minimum Quantity is required"}</span>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                {...register("availablequantity", { required: true })}
                                type="number" placeholder="Available Quantity" className="input input-bordered" />
                            <span className="label-text text-error">{errors.availablequantity?.type === 'required' && "Available Quantity is required"}</span>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Add Tool</button>
                        </div>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddProduct;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from "axios";
import auth from '../../firebase.init';
const ToolDetail = () => {
    const [orderedQuantity, setOrderedQuantity] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const [quantityError, setQuantityError] = useState('');

    const { id } = useParams();
    const [toolDetail, setToolDetail] = useState({});
    const { toolName, price, minQuantity, availableQuantity, picture, detail, _id } = toolDetail;

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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (orderedQuantity <= availableQuantity && orderedQuantity >= minQuantity) {
            console.log('perfect quantity');
            const orderData = {
                toolId: _id,
                toolName: toolName,
                price: price,
                quantity: orderedQuantity,
                email: user.email,
                phone: e.target.phone.value,
            }

            fetch('http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        } else {
            console.log('imperfect quantity');
            setQuantityError('imperfect')
        }




        /* setOrderedQuantity(e.target.quantity.value);
        if (quantityOrdered < minimumOrder || quantityOrdered > availableQuantity) {
            return
        } else {
            const purchaseDetail = {
                name: user.displayName,
                email: user.email,
                address: e.target.address.value,
                phone: e.target.phone.value,
                quantity: quantityOrdered
            }
            console.log(purchaseDetail)
        } */

        // reset()
    };
    return (
        <div className="lg:h-screen flex items-center justify-center">
            <div class="card lg:card-side lg:mx-24 bg-base-100 shadow-xl">
                <figure><img className='w-96' src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{toolName}</h2>
                    <p>{detail}</p>
                    <p>Price: {price}</p>
                    <p>Minimum Quantity: {minQuantity}</p>
                    <p>Availble Quantity: {availableQuantity}</p>

                </div>
                {/* order form */}
                <div>
                    <form onSubmit={handleSubmit} class="card-body w-full lg:w-96">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input

                                type="text" value={user.displayName} disabled class="input input-bordered"
                            />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email" value={user.email} disabled class="input input-bordered"
                            />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input
                                type="text" name='address' required placeholder='address' class="input input-bordered"
                            />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input
                                type="number" name='phone' required placeholder='phone' class="input input-bordered"
                            />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input
                                type="number" onChange={event => setOrderedQuantity(event?.target?.value)} required placeholder='Quantity' class="input input-bordered"
                            />


                        </div>


                        <div class="form-control mt-6">
                            <button type="submit" class={`btn btn-primary`}>Continue Purchasing</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToolDetail;
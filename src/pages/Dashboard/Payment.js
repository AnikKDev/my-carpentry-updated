import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../SharedPages/LoadingSpinner';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51L0hCqAAAfEXZZSua3bUrWKwHx14riiK5nXfi50uzG8yPWUBVJHn0fZyk3jKll4UmMV14TDfUnqOUbbkH9RvnDoZ00h7TiBqX2');
const Payment = () => {
    const { id } = useParams();
    const { data: item, isLoading } = useQuery(['bookingInfo', id], () => fetch(`http://localhost:5000/booking/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    };
    return (
        <div className="bg-base-200 min-h-screen flex justify-center ">
            <div className="mt-20">
                <div class="card w-50 max-w-md bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Continuing Payment For {item?.toolName}</h2>
                        <p>Quantity: {item?.quantity}</p>
                        <p>Payable Price (per piece) : ${item?.price}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 my-4 w-50 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">

                        <Elements stripe={stripePromise}>
                            <CheckOutForm item={item} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
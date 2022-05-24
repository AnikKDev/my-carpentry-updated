import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckOutForm = ({ item }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [loading, setLoading] = useState(false);
    const [cardTransaction, setCardTransaction] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { price, email, name, _id } = item;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "content-Type": "application/json", authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }
        setCardSuccess('');
        setLoading(true);
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setCardSuccess('');
            setLoading(false);

        }
        else {
            setCardError('');
            setCardTransaction(paymentIntent.id);
            console.log(paymentIntent);
            setCardSuccess('Successfully Paid');
            // data that will be sent to server
            const payment = {
                toolId: _id,
                transactionId: paymentIntent.id
            }
            // get updated data from backend
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setLoading(false);
                    console.log(data)
                })
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardError && <p className="mt-4 text-error">{cardError}</p>}
            {cardSuccess && <p className="mt-4 text-success font-bold">{cardSuccess}</p>}
            <button className="btn btn-success btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const MyOrders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()

                })
                .then(data => {
                    // console.log(data);
                    setOrders(data)
                });
        }
    }, [user, navigate])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Tool</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((item, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.toolName}</td>
                                    <td>{item.quantity}</td>
                                    <td><button className="btn btn-success">Pay</button> <button className="btn btn-warning">Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
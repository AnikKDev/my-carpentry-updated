import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [myLocation, setLocation] = useState(false);
    // console.log(admin)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/dashboard' || location.pathname === '/dashboard/myprofile' || location.pathname === '/dashboard/addproduct' || location.pathname === '/dashboard/users' || location.pathname === '/dashboard/manageproducts' || location.pathname === '/dashboard/addareview' || location.pathname === '/dashboard/myorders') {
            setLocation(true)
        };
    }, [location.pathname])
    /* 
    ('/dashboard' || '/dashboard/myprofile' || '/dashboard/addproduct' || '/dashboard/makeadmin' || '/dashboard/manageproducts' || '/dashboard/addareview' || '/dashboard/myorders')
    */
    return (
        <div className="mb-28">

            <div className="flex justify-end my-3 mx-2">
                {myLocation && <label for="dashboard-sidebar" className="btn btn-sm drawer-button lg:hidden">Open Dashboard</label>}
            </div>
            <div className="drawer drawer-mobile">

                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side ">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 mr-3 rounded-r-lg overflow-y-auto w-80 bg-base-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {!admin && <>
                            <li className="my-2"><NavLink to="/dashboard/myorders">MyOrders</NavLink></li>
                            <li className="my-2"><NavLink to="/dashboard/addareview">Add A Review</NavLink></li>
                        </>}

                        <li className="my-2"><NavLink to="/dashboard/myprofile">My Profile</NavLink></li>

                        {admin &&
                            <>
                                <li className="my-2"><NavLink to="/dashboard/addproduct">Add Product</NavLink></li>
                                <li className="my-2"><NavLink to="/dashboard/users">Make Admin</NavLink></li>
                                <li className="my-2"><NavLink to="/dashboard/manageproducts">Manage Products</NavLink></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
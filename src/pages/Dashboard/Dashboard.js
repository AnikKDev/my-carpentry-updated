import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // console.log(admin)
    const location = useLocation();
    return (
        <div>

            <div className="flex justify-end my-3 mx-2">
                {location.pathname === '/dashboard' && <label for="dashboard-sidebar" class="btn btn-sm drawer-button lg:hidden">Open Dashboard</label>}
            </div>
            <div class="drawer drawer-mobile">

                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side ">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 mr-3 rounded-r-lg overflow-y-auto w-80 bg-base-200 text-base-content">
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
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
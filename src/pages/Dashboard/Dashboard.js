import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation } from 'react-router-dom';
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
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {!admin && <>
                            <li><Link to="/dashboard/myorders">MyOrders</Link></li>
                            <li><Link to="/dashboard/addareview">Add A Review</Link></li>
                        </>}

                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>

                        {admin &&
                            <>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/users">All Users</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
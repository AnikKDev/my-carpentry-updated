import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../src/firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuOptions = <>
        <li className="mx-2 font-semibold"><NavLink to="/home">Home</NavLink></li>
        <li className="mx-2 font-semibold"><NavLink to="/blogs">Blogs</NavLink></li>
        <li className="mx-2 font-semibold"><NavLink to="/myportfolio">My Portfolio</NavLink></li>
        {user && <li className="mx-2 font-semibold"><NavLink to="/dashboard">Dashboard</NavLink></li>}
    </>;
    const location = useLocation();
    console.log();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div className="navbar justify-around bg-base-100 lg:px-6 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-4xl font-['Acme']">MyCarpentry</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuOptions}
                </ul>
            </div>

            {user ?
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/dashboard/myprofile" class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </Link>
                        </li>
                        <li className="flex-row items-center"><span className="font-semibold text-primary">Email:</span>{user?.email}</li>
                        <li className="flex-row items-center"><span className="font-semibold text-primary">Name:</span>{user?.displayName}</li>
                        <button onClick={logout} className="btn btn-outline btn-sm btn-primary mt-10">Logout</button>
                    </ul>
                </div>
                :
                <Link to="/login" className="btn btn-outline btn-primary">Login</Link>}


            {/* <div className="navbar-end">
                {user ?
                    <>
                        <h5 className="text-primary font-semibold text-xl">{user?.displayName}</h5>
                        <h5 className="text-primary mx-1 font-semibold text-xl">{user?.email}</h5>
                        <button onClick={logout} className="btn btn-outline btn-primary">Logout</button>
                    </> : <Link to="/login" className="btn btn-outline btn-primary">Login</Link>}
            </div> */}
        </div>
    );
};

export default Header;
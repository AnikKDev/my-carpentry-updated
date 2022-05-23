import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import { signOut } from 'firebase/auth';

import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import LoadingSpinner from "../SharedPages/LoadingSpinner";

function RequireAdmin({ children }) {
    const [user, loading, error] = useAuthState(auth);
    const [admin, loadAdmin] = useAdmin(user)
    let location = useLocation();
    if (loading || loadAdmin) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAdmin;
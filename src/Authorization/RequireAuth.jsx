import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import LoadingSpinner from "../SharedPages/LoadingSpinner";

function RequireAuth({ children }) {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;
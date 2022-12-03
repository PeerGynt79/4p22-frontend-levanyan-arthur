import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const user = false;

    if (!user) {
        return <Navigate to='/' state={{from:location}}/>
    }
    return children;
}

export {RequireAuth}
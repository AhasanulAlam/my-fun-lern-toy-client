import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress progress-secondary w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
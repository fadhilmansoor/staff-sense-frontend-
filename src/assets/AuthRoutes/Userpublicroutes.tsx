import { Navigate } from "react-router-dom";

interface userPublicRouteprops {
    children : React.ReactNode;
}

export default function UserPublicRoute(props:userPublicRouteprops){
    if(localStorage.getItem('jwt-HR')){
        return <Navigate to={'/HR'} />
    }
    else{
        return props.children
    }
}
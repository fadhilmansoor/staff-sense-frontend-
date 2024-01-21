import { Navigate } from "react-router-dom";

interface ManagerprivaterouteProps {
    children: React.ReactNode; 
}

export default function Hrprivateroute(props: ManagerprivaterouteProps) {
    if (localStorage.getItem('jwt-Manager')) {
        return props.children;
    } else {
        return <Navigate to={'/login'} />;
    }
}
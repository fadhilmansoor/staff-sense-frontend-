import { Navigate } from "react-router-dom";

interface HrprivaterouteProps {
    children: React.ReactNode; 
}

export default function Hrprivateroute(props: HrprivaterouteProps) {
    if (localStorage.getItem('jwt-HR')) {
        return props.children;
    } else {
        return <Navigate to={'/login'} />;
    }
}
// import { Navigate } from "react-router-dom";

// interface HrprivaterouteProps {
//     childern:React.ReactNode;
// }

// export default function Hrprivateroute(props:HrprivaterouteProps){
//     if(localStorage.getItem('jwt-HR')) {
//         return props.childern
//     }else{
//         return <Navigate to={'/login'} />
//     }
// }
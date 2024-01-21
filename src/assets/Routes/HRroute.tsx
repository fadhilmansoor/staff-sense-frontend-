import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Hr/Home';
import ManagerList from '../Pages/Hr/ManagerList';
import Hrprivateroute from '../AuthRoutes/Hr.routes';
export default function HRRoute() {
  return (
    <Routes>
      <Route path='/' element={<Hrprivateroute>
        <Home />
      </Hrprivateroute>}/>
      <Route path='/managerlist' element={<ManagerList />}/>
    </Routes>
  );
}

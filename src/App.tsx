import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeRoute from './assets/Routes/EmployeeRoute';
import HRRoute from './assets/Routes/HRroute';
import Login from './assets/Pages/Login';
import UserPublicRoute from './assets/AuthRoutes/Userpublicroutes';
import ManagerRoute from './assets/Routes/ManagerRoute';
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<UserPublicRoute>
        <Login />
      </UserPublicRoute>} />
        <Route path='/Employee/*' element={<EmployeeRoute />} />
        <Route path='/HR/*' element={<HRRoute/>} />
        <Route path='/Manager/*' element={<ManagerRoute/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

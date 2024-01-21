import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import AddingModal from './Modal/ManagerModal';
import axiosInstanceHr from '../interceptor/axiosinstance';
import Loading from '../../Components/Loading/Loading';


// ENV
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL



function ManagerList() {

    type Manager = {
        role: string;
        name: string;
        email: string;
        phone:number;
      };
      
    const [loading,setloading] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [managerData, setManagerData] = useState<Manager[]>([])

    function datafetching(data: Manager[]){
        setManagerData(data)
    }
  
    useEffect(()=>{
     const FecthManager = async () =>{
         try {
         const {data} = await axiosInstanceHr.get(`${BASE_URL}/Hr/GetManager`)
         setManagerData(data.data);
         setloading(false)
      } catch (error) {
         console.log('error feacthin users',error);
     }
     };
      FecthManager()
    },[]) 
  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen: boolean) => !prevIsDropdownOpen);
  };
  return (

    // bakii
    <div>
        <Navbar/>
      <div>
    </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg"  >
        <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Action button</span>
              Action
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownAction"
              className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
            >
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li>
                   <AddingModal data={datafetching}/>
                </li>
                <li>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Activate account
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Delete 
                </a>
              </div>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for Manager"
            />
          </div>
        </div>
       { loading  ? (<Loading/>):(<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
  {managerData.map((manager:Manager) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {/* Table cells for each property */}
      <td className="w-4 p-4">
      </td>
      <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        {/* <img
          className="w-10 h-10 rounded-full"
          src="/docs/images/people/profile-picture-1.jpg"
          alt="Jese image"
        /> */}
        <div className="pl-3">
        <div className="text-base font-semibold">{manager.name}</div>
          <div className="font-normal text-gray-500">{manager.email}</div>
          <div className="font-normal text-gray-500">{manager.phone}</div>
        </div>
      </th>
     
      <td className="px-6 py-4">{manager.role}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
        </div>
      </td>
      <td className="px-6 py-4">
        {/* Modal toggle */}
        <a
          href="#"
          type="button"
          data-modal-target="editUserModal"
          data-modal-show="editUserModal"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit user
        </a>
      </td>
    </tr>
  ))}
</tbody>

        </table>)
        }
    
        <div
          id="editUserModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
           
            <form
              action="#"
              className="relative bg-white rounded-lg shadow dark:bg-gray-700"
            >
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="editUserModal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
             
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save all
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerList
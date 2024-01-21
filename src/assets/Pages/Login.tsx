import { useState, FormEvent } from "react";
import loginimage from "../Photos/loginimage.jpg";
import axios from "axios";
import {useNavigate } from "react-router-dom";


const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

interface FormData {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = formData;
    console.log("Username:", username);
    console.log("Password:", password);

 
    await handleLogin(username, password);
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      const data = response.data
      console.log(data);
      if(data.success){
        const userdata = data.Userdata
        const token = data.token
       if(userdata.role == "Hr"){
        localStorage.setItem("jwt-HR",token)
        navigate("/HR/")
       }else if (userdata.role == 'Manager'){
        localStorage.setItem("jwt-Manager",token)
        navigate("/Manager/")
       }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Set minimum height to full viewport height
          backgroundImage: `url(${loginimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1
            className="text-white text-left font-rochester text-8xl font-bold"
            style={{
              zIndex: 1, // Bring the text above the background image
              position: "absolute",
              top: 300,
              left: 200, // Adjust the left position to place it on the left side
            }}
          >
            StaffSense
          </h1>
        </div>
        <div
          style={{
            width: "40%", // Adjust the width as needed
            height: "80%",
            zIndex: 1, // Bring the box above the background image
            position: "absolute",
            top: 90,
            right: 30, // Adjust the right position to place it on the right side
            display: "flex",
            flexDirection: "column", // Change the direction to place items vertically
            justifyContent: "center",
            alignItems: "center", // Center items horizontally
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent background using rgba
            padding: "10px", // Adjust the padding as needed
            boxSizing: "border-box", // Include padding in the width
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-14 text-center">
              <h1 className="text-black font-raleway text-4xl">Username</h1>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-96 -mt-6 p-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors"
                autoComplete="off"
              />
            </div>
            <div className="mb-14 text-center">
              <h1 className="text-black font-raleway text-4xl">Password</h1>
              <input
                type="password" 
                id="password"
                className="w-96 -mt-72 border-b-2 border-black focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer bg-transparent"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

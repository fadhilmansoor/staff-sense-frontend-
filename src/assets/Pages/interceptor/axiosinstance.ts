import axios from 'axios'
const axiosInstanceHr = axios.create({
  baseURL: 'http://localhost:4000/', 
});

// Request interceptor
axiosInstanceHr.interceptors.request.use(
  (config) => {
    
        const tokenString = localStorage.getItem("jwt-HR");
        const accessToken = tokenString;       
      
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstanceHr.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    return Promise.reject(error);
  }
);

export default axiosInstanceHr;
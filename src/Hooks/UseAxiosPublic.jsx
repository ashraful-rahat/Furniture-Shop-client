import axios from 'axios';

const UseAxiosPublic = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Ensure this matches your backend server URL
  });

  return axiosInstance;
};

export default UseAxiosPublic;
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Pages/Auth/Providers/AuthContext";
import auth from "../../Pages/Auth/firebase.config";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxios = () => {

    const navigate = useNavigate()
    const {logOutUser} = useContext(AuthContext)

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stoped by interceptor', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })

      axiosSecure.interceptors.response.use(function (response) {
        return response
      }, async (error) => {
        const status = error.response.status;
        console.log('status erorr in interceptor', status)

        if(status === 401 || status === 403){
            await logOutUser(auth);
            navigate('/login')
        }
        return Promise.reject(error)
      })



    return axiosSecure
};

export default useAxios;
import axios from "axios"

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "json",
})

// API.interceptors.request.use(
//     config => {
//         if (!config.headers.Authorization) {
//             const token = JSON.parse(localStorage.getItem("token"));

//             if (token) {
//                 config.headers.Authorization = `Bearer ${token.accessToken}`;
//             }
//         }

//         return config;
//     },
//     error => Promise.reject(error)
// );

export default API

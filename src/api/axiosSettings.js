import axios from "axios";


// axios.defaults.baseURL = `https://64f761319d775408495382f5.mockapi.io`;
axios.defaults.baseURL = `https://healthy-hub-backend-fs5j.onrender.com/`;



export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
};


export default axios;
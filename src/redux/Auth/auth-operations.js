import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const register = createAsyncThunk(
    'api/auth/signup',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('/api/auth/signup', credentials);
            token.set(response.data.token);
            toast.success(`Welcome! You have been successfully registered!`);
            return response.data.data;
        }
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const logIn = createAsyncThunk(
    'api/auth/signin',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('api/auth/signin', credentials);
            token.set(response.data.token);
            toast.success(`Welcome!`);
            return response.data.data;
        }
        catch(error){
            toast.error('Oops. Your email or password is not valid');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const logOut = createAsyncThunk(
    'api/auth/signout',
    async (_, thunkApi) => {
        try{
            await axios.post('api/auth/signout');
            token.unset();
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }   
);


export const refreshCurrentUser = createAsyncThunk(
    'api/auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;
        if(persistedToken === null){
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        try{
            token.set(persistedToken);
            const response = await axios.get('api/user/current');
            toast.success(`Welcome Back`);
            return response.data;
        }
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const forgotPassword= createAsyncThunk(
    'api/auth/forgot-password',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('api/auth/forgot-password', credentials);
            toast.success(`Email has been sended!  Please check you MailBox!`);
            return response.data;
        }
        catch(error){
            toast.error('Oops. Your email is not valid');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


// LOGOUT BUTTON FOR USER MENU/////
/* <button onClick={() => dispatch(logOut())}>LOGOUT</button> */


// LOGIN PAGE CONNECTION///////
// const dispatch = useDispatch();


// const handleSubmit = (event) => {
//   event.preventDefault();
//   const form = event.currentTarget;
//   dispatch(
//     logIn({
//       email: form.elements.email.value.toString(),
//       password: form.elements.password.value.toString(),
//     })
//   );
//   form.reset();

// };

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('/register', credentials);
            token.set(response.data.token);
            toast.success(`Welcome! You have been successfully registered!`);
            return response.data;
        }
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosSettings";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const addWaterIntake = createAsyncThunk(
    'api/user/add-water-intake',
    async (water, thunkApi) => {
      try {
        const response = await axios.post(`api/user/water-intake`, water);
        toast.success('Water intake has been successfully added');
        return response.data;
      } catch (error) {
        toast.error('Oops. Something went wrong. Please try again.');
        return thunkApi.rejectWithValue(error.message);
      }
    }
);



export const deleteWaterIntake = createAsyncThunk(
    'api/user/delete-water-intake',
    async (waterData, thunkApi) => {
      try {
        const response = await axios.delete(`api/user/water-intake`, waterData);
        toast.success('Water intake has been successfully deleted');
        return response.data;
      } catch (error) {
        toast.error('Oops. Something went wrong. Please try again.');
        return thunkApi.rejectWithValue(error.message);
      }
    }
);

export const updateGoal = createAsyncThunk(
  'api/user/update-goal',
  async (selectedgoal, thunkApi) => {
    try {
     const response = await axios.put(`api/user/goal`, selectedgoal );
      toast.success('Your goal information has been successfully updated');
       console.log("SERVER RESPOnce", response.data);
    return response.data;
  } catch (error) {
       toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
  } }
)

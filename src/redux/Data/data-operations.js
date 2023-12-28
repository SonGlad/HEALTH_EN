import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const addWaterIntake = createAsyncThunk(
  'api/user/add-water-intake',
  async (water, thunkApi) => {
    try {
      const response = await axios.post(`api/user/water-intake`, water);
      // toast.success('Water intake has been successfully added');
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
      // toast.success('Water intake has been successfully deleted');
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
      const response = await axios.put(`api/user/goal`, selectedgoal);
      // toast.success('Your goal information has been successfully updated');
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const updateWeight = createAsyncThunk(
  'api/user/update-weight',
  async (valueWeight, thunkApi) => {
    try {
      const response = await axios.put(`api/user/weight`, valueWeight);
      // toast.success('Your weight information has been successfully updated');
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const getAllRecommendedFood = createAsyncThunk(
  'api/user/recommended-food',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/recommended-food');
      // toast.success(`Recommended products successfully loaded.`);
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const addFood = createAsyncThunk(
  'api/user/food-intake',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('api/user/food-intake', data);
      // toast.success(`
      // The information about the consumed food has been successfully added.`)
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const getStatistics = createAsyncThunk(
  'api/user/statistics',
  async (month, thunkApi) => {
    try {
      const response = await axios.get(`api/user/statistics/${month}`);
      // toast.success(`Received statistics.`);
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const updateFoodId = createAsyncThunk(
  'api/user/food-intake/id',
  async ({ id, data }, thunkApi) => {
    try {
      const response = await axios.put(`api/user/food-intake/${id}`, data);
      // toast.success('Data updated successfully');
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    } 
  }
);


export const getUserDailyCurrentData = createAsyncThunk(
  'api/user/current-data',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/user/current-data');
      // toast.success(`CURRENT user daily data successfully loaded.`);
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    } 
  }
);


export const deleteFoodId = createAsyncThunk(
  'api/user/food-intake-id',
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`api/user/food-intake/${id}` );
      // toast.success('Food intake has been successfully deleted');
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const deleteFoodType = createAsyncThunk(
  'api/user/food-intake/type',
  async (type, thunkApi) => {
    try {
      const response = await axios.delete(`api/user/reset-meals/${type}` );
      // toast.success('Food intake has been successfully deleted type');
      return response.data;
    } catch (error) {
      toast.error('Oops. Something went wrong. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

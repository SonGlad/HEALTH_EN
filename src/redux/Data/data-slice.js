import { createSlice } from "@reduxjs/toolkit";
import { 
    initialDataUserInfo, 
    refreshCurrentUser, 
    updateUserInfo
} from "../Auth/auth-operations";
import {
    addWaterIntake, 
    deleteWaterIntake,
    updateGoal,
    updateWeight,
    getAllRecommendedFood,
} from "./data-operations";




const initialState = {
    dailyCaloriesLimit: null,
    dailyWaterLimit: null,
    userCurrentWater: null,
    dailyNutritionLimit: {
        carbonohidrates: null,
        protein: null,
        fat: null,
    },
    recommendedFood: [],
    
    error: null,
    isLoading: false,
    isLogin: false,// For SignIn Only (GET api/user/current-data)///

};


const dataSlice = createSlice({
    name: 'data',
    initialState,

    reducers:{
        PokaNi4egoNePiwem: (state, action) => {
            // state.userForm = {
            //   ...state.userForm,
            //   name: action.payload.name,
            //   email: action.payload.email,
            //   password: action.payload.password,
            // };
        },
    },


    extraReducers: builder => {
        builder
        // INITIAL CURRENT USER DATA////////
        .addCase(initialDataUserInfo.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(initialDataUserInfo.fulfilled, (state, { payload }) => {
            state.dailyCaloriesLimit = Math.round(payload.data.dailyCalories);
            state.dailyWaterLimit = Math.round(payload.data.dailyWater);
            state.dailyNutritionLimit ={
                carbonohidrates: Math.round(payload.data.dailyNutrition.carbohydrates),
                protein: Math.round(payload.data.dailyNutrition.protein),
                fat: Math.round(payload.data.dailyNutrition.fat),
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(initialDataUserInfo.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })


        // REGRESH CURRENT USER DATA////////
        .addCase(refreshCurrentUser.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
            state.dailyCaloriesLimit = Math.round(payload.data.dailyCalories);
            state.dailyWaterLimit = Math.round(payload.data.dailyWater);
            state.dailyNutritionLimit ={
                carbonohidrates: Math.round(payload.data.dailyNutrition.carbohydrates),
                protein: Math.round(payload.data.dailyNutrition.protein),
                fat: Math.round(payload.data.dailyNutrition.fat),
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(refreshCurrentUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })


        // UPDATE USER DATA////////
        .addCase(updateUserInfo.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
            state.dailyCaloriesLimit = Math.round(payload.data.dailyCalories);
            state.dailyWaterLimit = Math.round(payload.data.dailyWater);
            state.dailyNutritionLimit ={
                carbonohidrates: Math.round(payload.data.dailyNutrition.carbohydrates),
                protein: Math.round(payload.data.dailyNutrition.protein),
                fat: Math.round(payload.data.dailyNutrition.fat),
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(updateUserInfo.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })


        // ADD USER WATER////////
        .addCase(addWaterIntake.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addWaterIntake.fulfilled, (state, { payload }) => {
            state.userCurrentWater = payload.water;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addWaterIntake.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })


        // DELETE USER WATER////////
        .addCase(deleteWaterIntake.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteWaterIntake.fulfilled, (state, { payload }) => {
            state.userCurrentWater = null;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteWaterIntake.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })

            
        // UPDATE USER GOAL////////
        .addCase(updateGoal.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(updateGoal.fulfilled, (state, { payload }) => {
            state.dailyNutritionLimit ={
                carbonohidrates: Math.round(payload.data.dailyNutrition.carbohydrates),
                protein: Math.round(payload.data.dailyNutrition.protein),
                fat: Math.round(payload.data.dailyNutrition.fat),
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(updateGoal.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })

        
        // UPDATE USER WEIGHT////////
        .addCase(updateWeight.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(updateWeight.fulfilled, (state, { payload }) => {
            state.dailyCaloriesLimit = Math.round(payload.data.dailyCalories);
            state.dailyWaterLimit = Math.round(payload.data.dailyWater);
            state.dailyNutritionLimit ={
                carbonohidrates: Math.round(payload.data.dailyNutrition.carbohydrates),
                protein: Math.round(payload.data.dailyNutrition.protein),
                fat: Math.round(payload.data.dailyNutrition.fat),
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(updateWeight.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })

            
        //RECEIVING REMMENDED FOOD////////    
        .addCase(getAllRecommendedFood.pending, state => {
        state.isLoading = true;
        state.error = null;
        })
        .addCase(getAllRecommendedFood.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.recommendedFood = payload;
        state.error = null;
        })
        .addCase(getAllRecommendedFood.rejected,(state, {payload}) => {
        state.isLoading = false;
        state.error = payload; 
        })

    }
});


export const dataReducer = dataSlice.reducer;


export const { 
    PokaNi4egoNePiwem,

} = dataSlice.actions;
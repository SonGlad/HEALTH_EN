import { createSlice } from "@reduxjs/toolkit";
import { 
    initialDataUserInfo, 
    refreshCurrentUser, 
    updateUserInfo,
    logOut,
} from "../Auth/auth-operations";
import {
    addFood,
    addWaterIntake, 
    deleteWaterIntake,
    updateGoal,
    updateWeight,
    getAllRecommendedFood,
    getStatistics,
    updateFoodId,
    getUserDailyCurrentData,
    deleteFoodId,
    deleteFoodType
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

    dailyTotalCalories: null,
    dailyTotalFat: null,
    dailyTotalCarbonohidretes: null,
    dailyTotalProtein: null,
    breakfast: {
        breakfastMeals: [],
        breakfastTotalCalories: null,
        breakfastTotalFat: null,
        breakfastTotalCarbonohidretes: null,
        breakfastTotalProtein: null,
    },
    lunch: {
        lunchMeals: [],
        lunchTotalCalories: null,
        lunchTotalFat: null,
        lunchTotalCarbonohidretes: null,
        lunchTotalProtein: null,
    },
    dinner: {
        dinnerMeals: [],
        dinnerTotalCalories: null,
        dinnerTotalFat: null,
        dinnerTotalCarbonohidretes: null,
        dinnerTotalProtein: null,
    },
    snack: {
        snackMeals: [],
        snackTotalCalories: null,
        snackTotalFat: null,
        snackTotalCarbonohidretes: null,
        snackTotalProtein: null,
    },
    statisticPerDate: {
        statisticsWater: [],
        statisticsWeight: [],
        statisticsCalories: [],
    },

    error: null,
    isLoading: false,
};


const dataSlice = createSlice({
    name: 'data',
    initialState,

    reducers:{
        deliverMealsBreakfast: (state, action) => {
            const { breakfast } = action.payload;
            state.breakfast = {
              ...state.breakfast,
              breakfastMeals: breakfast,
            };
        },
        deliverMealsLunch: (state, action) => {
            const { lunch } = action.payload;
            state.lunch = {
                ...state.lunch,
                lunchMeals: lunch,
             };
        },
        deliverMealsDinner: (state, action) => {
            const { dinner } = action.payload;
            state.dinner = {
              ...state.dinner,
              dinnerMeals: dinner,
            };
        },
        deliverMealsSnack: (state, action) => {
            const { snack } = action.payload;
            state.snack = {
              ...state.snack,
              snackMeals: snack,
            };
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


        // REFRESH CURRENT USER DATA////////
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

            
        //RECEIVING RECOMMENDED FOOD////////    
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


        //ADD USER DAILY FOOD//////// 
        .addCase(addFood.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addFood.fulfilled, (state, { payload }) => {
            state.dailyTotalCalories = payload.data.totalCalories;
            state.dailyTotalFat = payload.data.totalFat;
            state.dailyTotalCarbonohidretes = payload.data.totalCarbohydrates;
            state.dailyTotalProtein = payload.data.totalProtein;
            state.breakfast = {
                breakfastMeals: payload.data.breakfast.meals,
                breakfastTotalCalories: payload.data.breakfast.totalCalories,
                breakfastTotalFat: payload.data.breakfast.totalFat,
                breakfastTotalCarbonohidretes: payload.data.breakfast.totalCarbohydrates,
                breakfastTotalProtein: payload.data.breakfast.totalProtein,
            };
            state.lunch = {
                lunchMeals: payload.data.lunch.meals,
                lunchTotalCalories: payload.data.lunch.totalCalories,
                lunchTotalFat: payload.data.lunch.totalFat,
                lunchTotalCarbonohidretes: payload.data.lunch.totalCarbohydrates,
                lunchTotalProtein: payload.data.lunch.totalProtein,
            };
            state.dinner = {
                dinnerMeals: payload.data.dinner.meals,
                dinnerTotalCalories: payload.data.dinner.totalCalories,
                dinnerTotalFat: payload.data.dinner.totalFat,
                dinnerTotalCarbonohidretes: payload.data.dinner.totalCarbohydrates,
                dinnerTotalProtein: payload.data.dinner.totalProtein,
            };
            state.snack = {
                snackMeals: payload.data.snack.meals,
                snackTotalCalories: payload.data.snack.totalCalories,
                snackTotalFat: payload.data.snack.totalFat,
                snackTotalCarbonohidretes: payload.data.snack.totalCarbohydrates,
                snackTotalProtein: payload.data.snack.totalProtein,
            };
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addFood.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        //GET STATISTICS////////
         .addCase(getStatistics.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getStatistics.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.statisticPerDate = {
                statisticsWater: payload.data.water,
                statisticsWeight: payload.data.weight,
                statisticsCalories: payload.data.calories,
                };
            state.error = null;
        })
        .addCase(getStatistics.rejected,(state, {payload}) => {
            state.isLoading = false;
            state.error = payload; 
        })

            
        // UPDATE BY ID
        .addCase(updateFoodId.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(updateFoodId.fulfilled, (state, { payload }) => {
            state.dailyTotalCalories = payload.data.totalCalories;
            state.dailyTotalFat = payload.data.totalFat;
            state.dailyTotalCarbonohidretes = payload.data.totalCarbohydrates;
            state.dailyTotalProtein = payload.data.totalProtein;
            state.breakfast = {
                breakfastMeals: payload.data.breakfast.meals,
                breakfastTotalCalories: payload.data.breakfast.totalCalories,
                breakfastTotalFat: payload.data.breakfast.totalFat,
                breakfastTotalCarbonohidretes: payload.data.breakfast.totalCarbohydrates,
                breakfastTotalProtein: payload.data.breakfast.totalProtein,
            };
            state.lunch = {
                lunchMeals: payload.data.lunch.meals,
                lunchTotalCalories: payload.data.lunch.totalCalories,
                lunchTotalFat: payload.data.lunch.totalFat,
                lunchTotalCarbonohidretes: payload.data.lunch.totalCarbohydrates,
                lunchTotalProtein: payload.data.lunch.totalProtein,
            };
            state.dinner = {
                dinnerMeals: payload.data.dinner.meals,
                dinnerTotalCalories: payload.data.dinner.totalCalories,
                dinnerTotalFat: payload.data.dinner.totalFat,
                dinnerTotalCarbonohidretes: payload.data.dinner.totalCarbohydrates,
                dinnerTotalProtein: payload.data.dinner.totalProtein,
            };
            state.snack = {
                snackMeals: payload.data.snack.meals,
                snackTotalCalories: payload.data.snack.totalCalories,
                snackTotalFat: payload.data.snack.totalFat,
                snackTotalCarbonohidretes: payload.data.snack.totalCarbohydrates,
                snackTotalProtein: payload.data.snack.totalProtein,
            };
            state.isLoading = false;
            state.error = null;
        })
        .addCase(updateFoodId.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        //GET USER DAILY CURRENT DATA////////
        .addCase(getUserDailyCurrentData.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserDailyCurrentData.fulfilled, (state, { payload }) => {
            state.userCurrentWater = payload.data.water;
            if (Object.keys(payload.data.food).length > 0) {
                state.dailyTotalCalories = payload.data.food.totalCalories;
                state.dailyTotalFat = payload.data.food.totalFat;
                state.dailyTotalCarbonohidretes = payload.data.food.totalCarbohydrates;
                state.dailyTotalProtein = payload.data.food.totalProtein;
                state.breakfast = {
                    breakfastMeals: payload.data.food.breakfast.meals,
                    breakfastTotalCalories: payload.data.food.breakfast.totalCalories,
                    breakfastTotalFat: payload.data.food.breakfast.totalFat,
                    breakfastTotalCarbonohidretes: payload.data.food.breakfast.totalCarbohydrates,
                    breakfastTotalProtein: payload.data.food.breakfast.totalProtein,
                };
                state.lunch = {
                    lunchMeals: payload.data.food.lunch.meals,
                    lunchTotalCalories: payload.data.food.lunch.totalCalories,
                    lunchTotalFat: payload.data.food.lunch.totalFat,
                    lunchTotalCarbonohidretes: payload.data.food.lunch.totalCarbohydrates,
                    lunchTotalProtein: payload.data.food.lunch.totalProtein,
                };
                state.dinner = {
                    dinnerMeals: payload.data.food.dinner.meals,
                    dinnerTotalCalories: payload.data.food.dinner.totalCalories,
                    dinnerTotalFat: payload.data.food.dinner.totalFat,
                    dinnerTotalCarbonohidretes: payload.data.food.dinner.totalCarbohydrates,
                    dinnerTotalProtein: payload.data.food.dinner.totalProtein,
                };
                state.snack = {
                    snackMeals: payload.data.food.snack.meals,
                    snackTotalCalories: payload.data.food.snack.totalCalories,
                    snackTotalFat: payload.data.food.snack.totalFat,
                    snackTotalCarbonohidretes: payload.data.food.snack.totalCarbohydrates,
                    snackTotalProtein: payload.data.food.snack.totalProtein,
                };
            }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getUserDailyCurrentData.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        // DELETE BY ID////////
        .addCase(deleteFoodId.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteFoodId.fulfilled, (state, { payload }) => {
            state.dailyTotalCalories = payload.data.totalCalories;
            state.dailyTotalFat = payload.data.totalFat;
            state.dailyTotalCarbonohidretes = payload.data.totalCarbohydrates;
            state.dailyTotalProtein = payload.data.totalProtein;
            state.breakfast = {
                breakfastMeals: payload.data.breakfast.meals,
                breakfastTotalCalories: payload.data.breakfast.totalCalories,
                breakfastTotalFat: payload.data.breakfast.totalFat,
                breakfastTotalCarbonohidretes: payload.data.breakfast.totalCarbohydrates,
                breakfastTotalProtein: payload.data.breakfast.totalProtein,
            };
            state.lunch = {
                lunchMeals: payload.data.lunch.meals,
                lunchTotalCalories: payload.data.lunch.totalCalories,
                lunchTotalFat: payload.data.lunch.totalFat,
                lunchTotalCarbonohidretes: payload.data.lunch.totalCarbohydrates,
                lunchTotalProtein: payload.data.lunch.totalProtein,
            };
            state.dinner = {
                dinnerMeals: payload.data.dinner.meals,
                dinnerTotalCalories: payload.data.dinner.totalCalories,
                dinnerTotalFat: payload.data.dinner.totalFat,
                dinnerTotalCarbonohidretes: payload.data.dinner.totalCarbohydrates,
                dinnerTotalProtein: payload.data.dinner.totalProtein,
            };
            state.snack = {
                snackMeals: payload.data.snack.meals,
                snackTotalCalories: payload.data.snack.totalCalories,
                snackTotalFat: payload.data.snack.totalFat,
                snackTotalCarbonohidretes: payload.data.snack.totalCarbohydrates,
                snackTotalProtein: payload.data.snack.totalProtein,
            };
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteFoodId.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        // DELETE BY   TYPE////////
        .addCase(deleteFoodType.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteFoodType.fulfilled, (state, { payload }) => {
            state.dailyTotalCalories = payload.data.totalCalories;
            state.dailyTotalFat = payload.data.totalFat;
            state.dailyTotalCarbonohidretes = payload.data.totalCarbohydrates;
            state.dailyTotalProtein = payload.data.totalProtein;
            state.breakfast = {
                breakfastMeals: payload.data.breakfast.meals,
                breakfastTotalCalories: payload.data.breakfast.totalCalories,
                breakfastTotalFat: payload.data.breakfast.totalFat,
                breakfastTotalCarbonohidretes: payload.data.breakfast.totalCarbohydrates,
                breakfastTotalProtein: payload.data.breakfast.totalProtein,
            };
            state.lunch = {
                lunchMeals: payload.data.lunch.meals,
                lunchTotalCalories: payload.data.lunch.totalCalories,
                lunchTotalFat: payload.data.lunch.totalFat,
                lunchTotalCarbonohidretes: payload.data.lunch.totalCarbohydrates,
                lunchTotalProtein: payload.data.lunch.totalProtein,
            };
            state.dinner = {
                dinnerMeals: payload.data.dinner.meals,
                dinnerTotalCalories: payload.data.dinner.totalCalories,
                dinnerTotalFat: payload.data.dinner.totalFat,
                dinnerTotalCarbonohidretes: payload.data.dinner.totalCarbohydrates,
                dinnerTotalProtein: payload.data.dinner.totalProtein,
            };
            state.snack = {
                snackMeals: payload.data.snack.meals,
                snackTotalCalories: payload.data.snack.totalCalories,
                snackTotalFat: payload.data.snack.totalFat,
                snackTotalCarbonohidretes: payload.data.snack.totalCarbohydrates,
                snackTotalProtein: payload.data.snack.totalProtein,
            };
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteFoodType.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })


        //LOG OUT USER////////
        .addCase(logOut.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.userCurrentWater = null;
            state.dailyTotalCalories = null;
            state.dailyTotalFat = null;
            state.dailyTotalCarbonohidretes = null;
            state.dailyTotalProtein = null;
            state.breakfast = {
                breakfastMeals: [],
                breakfastTotalCalories: null,
                breakfastTotalFat: null,
                breakfastTotalCarbonohidretes: null,
                breakfastTotalProtein: null,
            };
            state.lunch = {
                lunchMeals: [],
                lunchTotalCalories: null,
                lunchTotalFat: null,
                lunchTotalCarbonohidretes: null,
                lunchTotalProtein: null,
            };
            state.dinner = {
                dinnerMeals: [],
                dinnerTotalCalories: null,
                dinnerTotalFat: null,
                dinnerTotalCarbonohidretes: null,
                dinnerTotalProtein: null,
            };
            state.snack = {
                snackMeals: [],
                snackTotalCalories: null,
                snackTotalFat: null,
                snackTotalCarbonohidretes: null,
                snackTotalProtein: null,
            };
            state.isLoading = false;
            state.error = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
        })
    }
});


export const dataReducer = dataSlice.reducer;


export const { 
    deliverMealsBreakfast,
    deliverMealsLunch,
    deliverMealsDinner,
    deliverMealsSnack,

} = dataSlice.actions;
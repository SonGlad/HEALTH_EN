export const selectDataLoading = state => state.data.isLoading;

export const selectUserDailyCalories = state => state.data.dailyCaloriesLimit;

export const selectUserDailyWater = state => state.data.dailyWaterLimit;

export const selectUserDailyCarbonohidrates = state => state.data.dailyNutritionLimit.carbonohidrates;

export const selectUserDailyProtein = state => state.data.dailyNutritionLimit.protein;

export const selectUserDailyFat = state => state.data.dailyNutritionLimit.fat;

export const selectUserCurrentWater = state => state.data.userCurrentWater;

export const selectRecommendedFood = state => state.data.recommendedFood;

export const selectDailyTotalCalories = state => state.data.dailyTotalCalories;

export const selectDailyTotalFat = state => state.data.dailyTotalFat;

export const selectDailyTotalCarbonohidretes = state => state.data.dailyTotalCarbonohidretes;

export const selectDailyTotalProtein = state => state.data.dailyTotalProtein;

export const selectBreakfastMeals = state => state.data.breakfast.breakfastMeals;

export const selectBreakfastTotalCalories = state => state.data.breakfast.breakfastTotalCalories;

export const selectBreakfastTotalFat = state => state.data.breakfast.breakfastTotalFat;

export const selectBreakfastTotalCarbonohidretes = state => state.data.breakfast.breakfastTotalCarbonohidretes;

export const selectBreakfasthTotalProtein = state => state.data.breakfast.breakfastTotalProtein;

export const selectLunchMeals = state => state.data.lunch.lunchMeals;

export const selectLunchTotalCalories = state => state.data.lunch.lunchTotalCalories;

export const selectLunchTotalFat = state => state.data.lunch.lunchTotalFat;

export const selectLunchTotalCarbonohidretes = state => state.data.lunch.lunchTotalCarbonohidretes;

export const selectLunchTotalProtein = state => state.data.lunch.lunchTotalProtein;

export const selectDinnerMeals = state => state.data.dinner.dinnerMeals;

export const selectDinnerTotalCalories = state => state.data.dinner.dinnerTotalCalories;

export const selectDinnerTotalFat = state => state.data.dinner.dinnerTotalFat;

export const selectDinnerhTotalCarbonohidretes = state => state.data.dinner.dinnerTotalCarbonohidretes;

export const selectDinnerTotalProtein = state => state.data.dinner.dinnerTotalProtein;

export const selectSnackMeals = state => state.data.snack.snackMeals;

export const selectSnackTotalCalories = state => state.data.snack.snackTotalCalories;

export const selectSnackTotalFat = state => state.data.snack.snackTotalFat;

export const selectSnackhTotalCarbonohidretes = state => state.data.snack.snackTotalCarbonohidretes;

export const selectSnackTotalProtein = state => state.data.snack.snackTotalProtein;

export const selectStatisticsWater = state => state.data.statisticPerDate.statisticsWater;

export const selectStatisticsWeight = state => state.data.statisticPerDate.statisticsWeight;

export const selectStatisticsCalories = state => state.data.statisticPerDate.statisticsCalories;
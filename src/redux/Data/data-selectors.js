export const selectDataLoading = state => state.data.isLoading;

export const selectUserDailyCalories = state => state.data.dailyCaloriesLimit;

export const selectUserDailyWater = state => state.data.dailyWaterLimit;

export const selectUserDailyCarbonohidrates = state => state.data.dailyNutritionLimit.carbonohidrates;

export const selectUserDailyProtein = state => state.data.dailyNutritionLimit.protein;

export const selectUserDailyFat = state => state.data.dailyNutritionLimit.fat;

export const selectUserCurrentWater = state => state.data.userCurrentWater;

export const selectUserAddedWater = state => state.data.userAddedWater;

export const selectRecommendedFood = state => state.data.recommendedFood;



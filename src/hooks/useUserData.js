import { useSelector } from 'react-redux';
import {
    selectDataLoading,
    selectUserDailyCalories,
    selectUserDailyWater,
    selectUserDailyCarbonohidrates,
    selectUserDailyProtein,
    selectUserDailyFat, 
    selectUserCurrentWater,
    selectRecommendedFood,
    selectDailyTotalCalories,
    selectDailyTotalFat,
    selectDailyTotalCarbonohidretes,
    selectDailyTotalProtein,
    selectBreakfastMeals,
    selectBreakfastTotalCalories,
    selectBreakfastTotalFat,
    selectBreakfastTotalCarbonohidretes,
    selectBreakfasthTotalProtein,
    selectLunchMeals,
    selectLunchTotalCalories,
    selectLunchTotalFat,
    selectLunchTotalCarbonohidretes,
    selectLunchTotalProtein,
    selectDinnerhTotalCarbonohidretes,
    selectDinnerTotalFat,
    selectDinnerTotalProtein,
    selectDinnerMeals,
    selectDinnerTotalCalories,
    selectSnackMeals,
    selectSnackTotalCalories,
    selectSnackTotalFat,
    selectSnackTotalProtein,
    selectSnackhTotalCarbonohidretes,
    selectStatisticsWater,
selectStatisticsWeight,
selectStatisticsCalories,
} from "../redux/Data/data-selectors.js"


export const useData = () => {
    const isLoadingData = useSelector(selectDataLoading);
    const dailyCaloriesLimit = useSelector(selectUserDailyCalories);
    const userDailyWaterLimit = useSelector(selectUserDailyWater);
    const dailyCarbonohidratesLimit = useSelector(selectUserDailyCarbonohidrates);
    const dailyProteinLimit = useSelector(selectUserDailyProtein);
    const dailyFatLimit = useSelector(selectUserDailyFat);
    const currentWater = useSelector(selectUserCurrentWater);
    const recommendedFood = useSelector(selectRecommendedFood);
    const dailyTotalCalories = useSelector(selectDailyTotalCalories);
    const dailyTotalFat = useSelector(selectDailyTotalFat);
    const dailyTotalCarbonohidretes = useSelector(selectDailyTotalCarbonohidretes);
    const dailyTotalProtein = useSelector(selectDailyTotalProtein);

    const breakfastMeals = useSelector(selectBreakfastMeals);
    const breakfastTotalCalories = useSelector(selectBreakfastTotalCalories);
    const breakfastTotalFat = useSelector(selectBreakfastTotalFat);
    const breakfastTotalCarbonohidretes = useSelector(selectBreakfastTotalCarbonohidretes);
    const breakfasthTotalProtein = useSelector(selectBreakfasthTotalProtein);

    const lunchMeals = useSelector(selectLunchMeals);
    const lunchTotalCalories = useSelector(selectLunchTotalCalories);
    const lunchTotalFat = useSelector(selectLunchTotalFat);
    const lunchTotalCarbonohidretes = useSelector(selectLunchTotalCarbonohidretes);
    const lunchTotalProtein = useSelector(selectLunchTotalProtein);

    const dinnerMeals = useSelector(selectDinnerMeals);
    const dinnerTotalCalories = useSelector(selectDinnerTotalCalories);
    const dinnerTotalFat = useSelector(selectDinnerTotalFat);
    const dinnerTotalCarbonohidretes = useSelector(selectDinnerhTotalCarbonohidretes);
    const dinnerTotalProtein = useSelector(selectDinnerTotalProtein);

    const snackMeals = useSelector(selectSnackMeals);
    const snackTotalCalories = useSelector(selectSnackTotalCalories);
    const snackTotalFat = useSelector(selectSnackTotalFat);
    const snackTotalCarbonohidretes = useSelector(selectSnackhTotalCarbonohidretes);
    const snackTotalProtein = useSelector(selectSnackTotalProtein);
    
    const statisticsWater = useSelector(selectStatisticsWater);
    const statisticsWeight = useSelector(selectStatisticsWeight);
    const statisticsCalories = useSelector(selectStatisticsCalories);

    return {
        isLoadingData,
        dailyCaloriesLimit,
        userDailyWaterLimit,
        dailyCarbonohidratesLimit,
        dailyProteinLimit,
        dailyFatLimit,
        currentWater,
        recommendedFood,
        dailyTotalCalories,
        dailyTotalFat,
        dailyTotalCarbonohidretes,
        dailyTotalProtein,
        breakfastMeals,
        breakfastTotalCalories,
        breakfastTotalFat,
        breakfastTotalCarbonohidretes,
        breakfasthTotalProtein,
        lunchMeals,
        lunchTotalCalories,
        lunchTotalFat,
        lunchTotalCarbonohidretes,
        lunchTotalProtein,
        dinnerMeals,
        dinnerTotalCalories,
        dinnerTotalFat,
        dinnerTotalCarbonohidretes,
        dinnerTotalProtein,
        snackMeals,
        snackTotalCalories,
        snackTotalFat,
        snackTotalCarbonohidretes,
        snackTotalProtein,
        statisticsWater, 
        statisticsWeight,
        statisticsCalories,

    }
};


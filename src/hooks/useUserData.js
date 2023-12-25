import { useSelector } from 'react-redux';
import {
    selectDataLoading,
    selectUserDailyCalories,
    selectUserDailyWater,
    selectUserDailyCarbonohidrates,
    selectUserDailyProtein,
    selectUserDailyFat, 
    selectUserCurrentWater,
    selectUserAddedWater,
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
} from "../redux/Data/data-selectors.js"


export const useData = () => {
    const isLoadingData = useSelector(selectDataLoading);
    const dailyCalories = useSelector(selectUserDailyCalories);
    const dailyWater = useSelector(selectUserDailyWater);
    const dailyCarbonohidrates = useSelector(selectUserDailyCarbonohidrates);
    const dailyProtein = useSelector(selectUserDailyProtein);
    const dailyFat = useSelector(selectUserDailyFat);
    const currentWater = useSelector(selectUserCurrentWater);
    const addedWater = useSelector(selectUserAddedWater);
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
    
    return {
        isLoadingData,
        dailyCalories,
        dailyWater,
        dailyCarbonohidrates,
        dailyProtein,
        dailyFat,
        currentWater,
        addedWater,
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
    }
};


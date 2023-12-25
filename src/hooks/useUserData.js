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
} from "../redux/Data/data-selectors.js"


export const useData = () => {
    const isLoadingData = useSelector(selectDataLoading);
    const dailyCalories = useSelector(selectUserDailyCalories);
    const dailyWater = useSelector(selectUserDailyWater);
    const dailyCarbonohidrates = useSelector(selectUserDailyCarbonohidrates);
    const dailyProtein = useSelector(selectUserDailyProtein);
    const dailyFat = useSelector(selectUserDailyFat);
    const currentWater = useSelector(selectUserCurrentWater);
    const recommendedFood = useSelector(selectRecommendedFood);
    

    return {
        isLoadingData,
        dailyCalories,
        dailyWater,
        dailyCarbonohidrates,
        dailyProtein,
        dailyFat,
        currentWater,
        recommendedFood,
    }
};


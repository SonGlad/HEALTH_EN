import { useSelector } from 'react-redux';
import {
    selectUserName,
    selectUserEmail,
    selectUserPassword,
    selectUserGoal,
    selectUserGender,
    selectUserAge,
    selectUserHeight,
    selectUserWeight,
    selectUserWeightCurrentDate,
    selectUserActivity,
    selectLoggedUser,
    selectLoading,
    selectRefreshing,
} from "../redux/Auth/auth-selectors";


export const useAuth = () => {
    const isLoadingAuth = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const isRefreshing = useSelector(selectRefreshing);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPassword = useSelector(selectUserPassword);
    const userGoal = useSelector(selectUserGoal);
    const userGender = useSelector(selectUserGender);
    const userAge = useSelector(selectUserAge);
    const userHeight = useSelector(selectUserHeight);
    const userWeight = useSelector(selectUserWeight);
    const userWeightCurrentDate = useSelector(selectUserWeightCurrentDate);
    const userActivity = useSelector(selectUserActivity); 


    return {
        isLoadingAuth,
        isLoggedIn,
        isRefreshing,
        userName,
        userEmail,
        userPassword,
        userGoal,
        userGender,
        userAge,
        userHeight,
        userWeight,
        userWeightCurrentDate,
        userActivity,
    };
};
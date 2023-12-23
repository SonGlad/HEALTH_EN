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
    selectUserActivity,
    selectUserAvatarURL,
    selectLoggedUser,
    selectLoading,
    selectRefreshing,
    selectInitial,
} from "../redux/Auth/auth-selectors";


export const useAuth = () => {
    const isLoadingAuth = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const isRefreshing = useSelector(selectRefreshing);
    const isInitial = useSelector(selectInitial);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPassword = useSelector(selectUserPassword);
    const userGoal = useSelector(selectUserGoal);
    const userGender = useSelector(selectUserGender);
    const userAge = useSelector(selectUserAge);
    const userHeight = useSelector(selectUserHeight);
    const userWeight = useSelector(selectUserWeight);
    const userActivity = useSelector(selectUserActivity);
    const userAvatarURL = useSelector(selectUserAvatarURL); 


    return {
        isLoadingAuth,
        isLoggedIn,
        isRefreshing,
        isInitial,
        userName,
        userEmail,
        userPassword,
        userGoal,
        userGender,
        userAge,
        userHeight,
        userWeight,
        userActivity,
        userAvatarURL,
    };
};
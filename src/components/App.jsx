import { SharedLayout } from "./Shared.Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { RefreshLoading } from "../components/CustomLoaders/CustomLoaders";
import { Toaster } from "./ToastContainer/ToastContainer";
import {getUserDailyCurrentData, getAllRecommendedFood} from "../redux/Data/data-operations";
import { initialDataUserInfo, refreshCurrentUser } from '../redux/Auth/auth-operations';
import { useAuth } from "../hooks/useAuth";



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPassword/ForgotPassword'));
const DashboardPage = lazy(() => import('../pages/Dashboard/Dashboard'));
const DiaryPage = lazy(() => import('../pages/Diary/Diary'));
const RecommendedFoodPage = lazy(() => import('../pages/RecommendedFood/RecommendedFood'));
const SettingsPage = lazy(() => import('../pages/Settings/Settings'));



export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing, isInitial, isLoggedIn} = useAuth();


  useEffect(() => {
    if(isLoggedIn && isInitial){
      dispatch(initialDataUserInfo());
    }
  }, [dispatch, isInitial, isLoggedIn]);


  useEffect(() => {
    if(!isInitial){
      dispatch(refreshCurrentUser());
    }
  }, [dispatch, isInitial]);
  
  
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserDailyCurrentData());
      dispatch(getAllRecommendedFood());
    }
  }, [dispatch, isLoggedIn]);


  return isRefreshing ? (
    <RefreshLoading/>
    ) : (
    <>
      <Toaster/>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/signup" element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage/>} />
          }/>
          <Route path="/signin" element={
            <RestrictedRoute redirectTo="/" component={<LoginPage/>} />
          }/>
          <Route path="/forgot-password" element={
            <RestrictedRoute redirectTo="/signin" component={<ForgotPasswordPage/>} />
          }/>
          <Route path="/dashboard" element={
            <PrivateRoute redirectTo="/signin" component={<DashboardPage/>}/>
          }/>
          <Route path="/diary" element={
            <PrivateRoute redirectTo="/signin" component={<DiaryPage/>}/>
          }/>
          <Route path="/recommended-food" element={
            <PrivateRoute redirectTo="/signin" component={<RecommendedFoodPage/>}/>
          }/>
          <Route path="/settings" element={
            <PrivateRoute redirectTo="/signin" component={<SettingsPage/>}/>
          }/>
        </Route>
      </Routes>
    </>
  );
};


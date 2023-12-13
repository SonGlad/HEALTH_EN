import { SharedLayout } from "./Shared.Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
// import { lazy, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { RefreshLoading } from "./CustomLoaders/CustomLoaders";
// import { Toaster } from "./ToastContainer/ToastContainer";
// import { refreshCurrentUser } from "redux/Auth/auth-operations";
// import { useAuth } from "hooks/useAuth";




const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPassword/ForgotPassword'));
const DashboardPage = lazy(() => import('../pages/Dashboard/Dashboard'));
const DiaryPage = lazy(() => import('../pages/Diary/Diary'));
const RecommendedFoodPage = lazy(() => import('../pages/RecommendedFood/RecommendedFood'));
const SettingsPage = lazy(() => import('../pages/Settings/Settings'));





export const App = () => {


  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/signup" element={<RegisterPage/>}/>
        <Route path="/signin" element={<LoginPage/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/diary" element={<DiaryPage/>}/>
        <Route path="/recommended-food" element={<RecommendedFoodPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Route>
    </Routes>
  );
};


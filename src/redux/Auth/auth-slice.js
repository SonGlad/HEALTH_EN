import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";


const initialState = {
    userForm: {
      name: null,
      email: null,
      password: null,
    },
    goalForm: {
      goal: null,
    },
    genderAgeForm: {
        gender: null,
        age: null,
    },
    bodyParamForm: {
        height: null,
        weight: {
            kg: null,
            createdAt: null,
        },
    },
    activityForm: {
        activity: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        saveSignUpForm: (state, action) => {
            state.userForm = {
                ...state.userForm,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
            };
        },
        updateGoalForm: (state, action) => {
            state.goalForm = {
                ...state.goalForm,
                goal: action.payload,
            };
        },
        updateGenderAgeForm: (state, action) => {
            state.genderAgeForm = {
                ...state.genderAgeForm,
                gender: action.payload.gender,
                age: action.payload.age,
            }
        },
        updateBodyParamForm: (state, action) => {
            state.bodyParamForm ={
                ...state.bodyParamForm,
                height: action.payload.height,
                weight: {
                    kg: action.payload.weight.kg,
                    createdAt: new Date().toISOString(),
                },
            }
            console.log('Redux state updated:', state.bodyParamForm.weight.kg);
            console.log('Redux state updated:', state.bodyParamForm.weight.createdAt);

        },
        updateActivityForm: (state, action) => {
            state.activityForm = {
                ...state.activityForm,
                activity: action.payload,
            }
        },
    },

    extraReducers: builder => {
        builder
        .addCase(register.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.userForm = {
              name: payload.name,
              email: payload.email,
              password: payload.password,
            };
            state.goalForm = {
              goal: payload.goal,
            };
            state.genderAgeForm = {
              gender: payload.gender,
              age: payload.age,
            };
            state.bodyParamForm = {
              height: payload.height,
              weight: {
                kg: payload.weight.kg,
                createdAt: payload.weight.createdAt,
              },
            };
            state.activityForm = {
              activity: payload.activity,
            };
            state.token = payload.token;
            state.isLoggedIn = true;
            state.error = null;
          })
        .addCase(register.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.token = null;
            state.error = payload;
        })
    } 
}); 


export const authReducer = authSlice.reducer;


export const { 
    saveSignUpForm,
    updateGoalForm,
    updateGenderAgeForm,
    updateBodyParamForm,
    updateActivityForm,
    submitForms,

} = authSlice.actions;




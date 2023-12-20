import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshCurrentUser, forgotPassword } from "./auth-operations";


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
    weight: null,
  },
  activityForm: {
    activity: null,
  },
  token: null,
  avatarURL: null,
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
        weight: action.payload.weight,
      }
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
    // REGISTER///////////
    .addCase(register.pending, state =>{
      state.isLoading = true;
      state.error = null;
    })
    .addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.userForm = {
        name: payload.name,
      };
      state.goalForm = {
        goal: payload.goal,
      };
      state.bodyParamForm = {
        weight: payload.weight,
      };
      state.avatarURL = payload.avatarURL;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    })
    .addCase(register.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.token = null;
      state.error = payload;
    })


      //LOGIN/////////////// 
    .addCase(logIn.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logIn.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.userForm = {
        name: payload.name,
      };
      state.bodyParamForm = {
        weight: payload.weight,
      };
      state.goalForm = {
        goal: payload.goal,
      };
      state.token = payload.token;
      state.avatarURL = payload.avatarURL;
      state.isLoggedIn = true;
      state.error = null;
    })
    .addCase(logIn.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    })


      // LOGOUT////////
    .addCase(logOut.pending, state =>{
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logOut.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.userForm = {
        name: null,
        email: null,
        password: null,
      };
      state.goalForm = {
        goal: null,
      };
      state.genderAgeForm = {
        gender: null,
        age: null,
      };
      state.bodyParamForm = {
        height: null,
        weight: null,
      };
      state.activityForm = {
        activity: null,
      };
      state.avatarURL = null;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    })
    .addCase(logOut.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    })


      // REFRESH CURRENT USER////////
    .addCase(refreshCurrentUser.pending, state => {
      state.isLoading = true;
      state.isRefreshing = true;
    })
    .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
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
        weight: payload.weight,
      };
      state.activityForm = {
        activity: payload.activity,
      };
      state.avatarURL = payload.avatarURL;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    })
    .addCase(refreshCurrentUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = payload;
    })


      // FORGOTPASSWORD
    .addCase(forgotPassword.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(forgotPassword.fulfilled, (state, {payload}) => {
      state.userForm = {
        email: payload.email,
      };
    })
    .addCase(forgotPassword.rejected, (state, {payload}) =>{
      state.isLoading = false;
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

} = authSlice.actions;




import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/auth-slice";
// import { dataReducer } from './Data/data-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { modalReducer } from "./Modal/modal-slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: [
    "token",
    "userForm",
    "goalForm",
    "genderAgeForm",
    "bodyParamForm",
    "activityForm",
    "isInitial",
  ],
};

// const dataPersistConfig = {
//   key: 'data',
//   storage,
//   whitelist: [],
// };

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  //   data: persistReducer(dataPersistConfig, dataReducer)
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

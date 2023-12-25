import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenRecord: false,
    isModalOpenWater: false,
    mealTypeBreakfast: null,
  },
  reducers: {
    openModalRecord: (state) => {
      state.isModalOpenRecord = true;
    },
    closeModalRecord: (state) => {
      state.isModalOpenRecord = false;
    },
    openModalWater: (state) => {
      state.isModalOpenWater = true;
    },
    closeModalWater: (state) => {
      state.isModalOpenWater = false;
    },
    showMealType: (state, action) => {
      state.mealTypeBreakfast = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalRecord,
  closeModalRecord,
  openModalWater,
  closeModalWater,
  showMealType,
} = modalSlice.actions;

export const selectShowModalWater = (state) => state.modal.isModalOpenWater;

export const selectShowModalRecord = (state) => state.modal.isModalOpenRecord;

export const selectShowMealType = (state) => state.modal.mealTypeBreakfast;

export const getStatusModalUserMenu = (state) =>
  state.modal.isModalCloseUserMenu;

export const getStatusModalGoal = (state) => state.modal.isModalShowGoal;

export const getStatusModalWeight = (state) => state.modal.isModalShowWeight;

export const getShowModalUpdateRecord = (state) =>
  state.modal.isModalUpdateRecord;

import { useSelector } from "react-redux";
import {
  selectShowModalWater,
  selectShowModalRecord,
  selectShowMealType,
  getStatusModalUserMenu,
  getStatusModalGoal,
  getStatusModalWeight,
  getShowModalUpdateRecord,
} from "../redux/Modal/modal-selectors";

export const useModal = () => {
  const isModalOpenWater = useSelector(selectShowModalWater);
  const isModalOpenRecord = useSelector(selectShowModalRecord);
  const mealType = useSelector(selectShowMealType);
  const isModalCloseUserMenu = useSelector(getStatusModalUserMenu);
  const isModalShowGoal = useSelector(getStatusModalGoal);
  const isModalShowWeight = useSelector(getStatusModalWeight);
  const isModalOpenUpdateRecord = useSelector(getShowModalUpdateRecord);

  return {
    isModalOpenWater,
    isModalOpenRecord,
    mealType,
    isModalCloseUserMenu,
    isModalShowGoal,
    isModalShowWeight,
    isModalOpenUpdateRecord,
  };
};

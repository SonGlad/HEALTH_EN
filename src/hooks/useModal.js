import { useSelector } from "react-redux";
import {
  selectShowModalWater,
  selectShowModalRecord,
  selectShowMealType,
} from "../redux/Modal/modal-selectors";

export const useModal = () => {
  const isModalOpenWater = useSelector(selectShowModalWater);
  const isModalOpenRecord = useSelector(selectShowModalRecord);
  const mealType = useSelector(selectShowMealType);

  return { isModalOpenWater, isModalOpenRecord, mealType };
};

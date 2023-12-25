import { useSelector } from "react-redux";
import {
  selectShowModalWater,
  selectShowModalRecord,
} from "../redux/Modal/modal-selectors";

export const useModal = () => {
  const isModalOpenWater = useSelector(selectShowModalWater);
  const isModalOpenRecord = useSelector(selectShowModalRecord);

  return { isModalOpenWater, isModalOpenRecord };
};

import { useSelector } from 'react-redux';
import {
  selectShowModalWater,
  selectShowModalRecord,
  getStatusModalUserMenu,
  getStatusModalGoal,
  getStatusModalWeight,
} from '../redux/Modal/modal-selectors';

export const useModal = () => {
  const isModalOpenWater = useSelector(selectShowModalWater);
  const isModalOpenRecord = useSelector(selectShowModalRecord);
  const isModalCloseUserMenu = useSelector(getStatusModalUserMenu);
  const isModalShowGoal = useSelector(getStatusModalGoal);
  const isModalShowWeight = useSelector(getStatusModalWeight);

  return {
    isModalOpenWater,
    isModalOpenRecord,
    isModalCloseUserMenu,
    isModalShowGoal,
    isModalShowWeight,
  };
};

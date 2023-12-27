import { MealsContainer } from './FoodInfo.styled';
import { Breakfast } from './Breakfast';
import { Lunch } from './Lunch';
import { Dinner } from './Dinner';
import { Snack } from './Snack';
import { Modal } from "components/Modals/Modals";
import { useModal } from "hooks/useModal";


export const FoodInfo = () => {
  const { isModalOpenUpdateRecord, isModalOpenRecord } = useModal();


  return (
    <>
      <MealsContainer>
        <Breakfast />
        <Lunch />
        <Dinner />
        <Snack />
      </MealsContainer>
      {(isModalOpenUpdateRecord || isModalOpenRecord) && <Modal />}
    </>
  );
};

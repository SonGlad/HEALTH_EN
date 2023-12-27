import { Section } from "components/Section/Section";
import { ReactComponent as AddIcon } from "../../../../images/svgIcon/add-icon.svg";
import { ReactComponent as BreakfastImg } from "../../../../images/icons-illustration/breakfast-image.svg";
import { ReactComponent as LunchImg } from "../../../../images/icons-illustration/lunch-image.svg";
import { ReactComponent as DinnerImg } from "../../../../images/icons-illustration/dinner-image.svg";
import { ReactComponent as SnacksImg } from "../../../../images/icons-illustration/snack-image.svg";
import {
  AddButton,
  Container,
  DairyLink,
  DairyList,
  ListTitle,
  TitleWrapper,
} from "./Dairy.styled";
import { DairyItemBreakfast } from "./DairyItem/DairyItemBreakfast";
import { DairyItemLunch } from "./DairyItem/DairyItemLunch";
import { DairyItemDinner } from "./DairyItem/DairyItemDinner";
import { DairyItemSnack } from "./DairyItem/DairyItemSnack ";
import { useDispatch } from "react-redux";
import {
  openModalRecord,
  showMealType,
} from "../../../../redux/Modal/modal-slice";
import { Modal } from "components/Modals/Modals";
import { useModal } from "hooks/useModal";
import { useData } from "hooks/useUserData";

export const Dairy = () => {
  const dispatch = useDispatch();
  const { isModalOpenRecord } = useModal();
  const { breakfastMeals, lunchMeals, dinnerMeals, snackMeals } = useData();

  const handleOpenModalRecord = (id) => {
    dispatch(openModalRecord());
    dispatch(showMealType(id));
  };

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <h2>Dairy</h2>
          <DairyLink to={"/diary"}>See more</DairyLink>
        </TitleWrapper>
        <DairyList>
          <li>
            <ListTitle>
              <BreakfastImg alt="Breakfast icon" />
              <h3>Breakfast</h3>
            </ListTitle>
            {breakfastMeals.length === 0 ? (
              <AddButton
                id="breakfast"
                onClick={() => handleOpenModalRecord("breakfast")} className="slideDown"
              >
                <AddIcon alt="Add icon" />
                Record your meal
              </AddButton>
            ) : (
              <DairyItemBreakfast />
            )}
          </li>
          <li>
            <ListTitle>
              <LunchImg alt="Lunch Icon" />
              <h3>Lunch</h3>
            </ListTitle>
            {lunchMeals.length === 0 ? (
              <AddButton
                id="lunch"
                onClick={() => handleOpenModalRecord("lunch")} className="slideDown"
              >
                <AddIcon alt="Add icon" />
                Record your meal
              </AddButton>
            ) : (
              <DairyItemLunch />
            )}
          </li>
          <li>
            <ListTitle>
              <DinnerImg alt="Dinner icon" />
              <h3>Dinner</h3>
            </ListTitle>
            {dinnerMeals.length === 0 ? (
              <AddButton
                id="dinner"
                onClick={() => handleOpenModalRecord("dinner")} className="slideDown"
              >
                <AddIcon alt="Add icon" />
                Record your meal
              </AddButton>
            ) : (
              <DairyItemDinner />
            )}
          </li>
          <li>
            <ListTitle>
              <SnacksImg alt="Snacks icon" />
              <h3>Snack</h3>
            </ListTitle>
            {snackMeals.length === 0 ? (
              <AddButton
                id="snack"
                onClick={() => handleOpenModalRecord("snack")} className="slideDown"
              >
                <AddIcon alt="Add icon" />
                Record your meal
              </AddButton>
            ) : (
              <DairyItemSnack />
            )}
          </li>
        </DairyList>
      </Container>
      {isModalOpenRecord && <Modal />}
    </Section>
  );
};

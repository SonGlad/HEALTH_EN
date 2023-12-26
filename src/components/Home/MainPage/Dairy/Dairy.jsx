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
// import { DairyItem } from "./DairyItem.jsx/DairyItem";
import { useDispatch } from "react-redux";
import {
  openModalRecord,
  showMealType,
} from "../../../../redux/Modal/modal-slice";
import { Modal } from "components/Modals/Modals";
import { useModal } from "hooks/useModal";

export const Dairy = () => {
  const dispatch = useDispatch();
  const { isModalOpenRecord } = useModal();

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
            <AddButton
              id="breakfast"
              onClick={() => handleOpenModalRecord("breakfast")}
            >
              <AddIcon alt="Add icon" />
              Record your meal
            </AddButton>
            {/* <DairyItem /> */}
          </li>
          <li>
            <ListTitle>
              <LunchImg alt="Lunch Icon" />
              <h3>Lunch</h3>
            </ListTitle>
            <AddButton
              id="lunch"
              onClick={() => handleOpenModalRecord("lunch")}
            >
              <AddIcon alt="Add icon" />
              Record your meal
            </AddButton>
            {/* <DairyItem /> */}
          </li>
          <li>
            <ListTitle>
              <DinnerImg alt="Dinner icon" />
              <h3>Dinner</h3>
            </ListTitle>
            <AddButton
              id="dinner"
              onClick={() => handleOpenModalRecord("dinner")}
            >
              <AddIcon alt="Add icon" />
              Record your meal
            </AddButton>
            {/* <DairyItem /> */}
          </li>
          <li>
            <ListTitle>
              <SnacksImg alt="Snacks icon" />
              <h3>Snack</h3>
            </ListTitle>

            <AddButton
              id="snack"
              onClick={() => handleOpenModalRecord("snack")}
            >
              <AddIcon alt="Add icon" />
              Record your meal
            </AddButton>
          </li>
        </DairyList>
      </Container>
      {isModalOpenRecord && <Modal />}
    </Section>
  );
};

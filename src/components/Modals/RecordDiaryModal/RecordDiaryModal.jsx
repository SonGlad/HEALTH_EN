import { useState } from "react";
import { ModalContainer } from "./RecordDiaryModal.styled";

export const RecordDiaryModal = ({ handleClickClose }) => {
  const [items, setItems] = useState([
    "The name of the product or dish",
    "Carbonoh.",
    "Protein",
    "Fat",
    "Calories",
  ]);

  return (
    <ModalContainer>
      <h2 className="H2">Record your meal</h2>
      <div className="DinerContainer">
        <div className="Img" />
        <h3 className="Title">Breakfast</h3>
      </div>
      <div className="ListContainer">
        <ul className="List">
          {items.map((item, key) => (
            <li className="Element" key={key}>
              {item}
            </li>
          ))}
          <div className="ButtonDelete" onClick={() => setItems([])} />
        </ul>
      </div>
      <button className="ButtonAdd">
        <div className="ImgAdd" />
        Add more
      </button>

      <div className="ButtonContainer">
        <button className="ButtonConfirm">Confirm</button>
        <button
          className="ButtonCancel"
          type="submit"
          onClick={handleClickClose}
        >
          Cancel
        </button>
      </div>
    </ModalContainer>
  );
};

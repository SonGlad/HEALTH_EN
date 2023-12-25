import { createPortal } from "react-dom";
import { BackdropModalStyle } from "./Modals.styled";
import { useEffect, useCallback } from "react";
import { WaterintakeModal } from "./WaterIntakeModal/WaterIntakeModal";
import { RecordDiaryModal } from "./RecordDiaryModal/RecordDiaryModal";
import { useDispatch } from "react-redux";
import {
  closeModalRecord,
  closeModalWater,
} from "../../redux/Modal/modal-slice";
import { useModal } from "hooks/useModal";

const modalRoot = document.querySelector("#modal-root");

export const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpenWater, isModalOpenRecord } = useModal();

  const handleClickClose = useCallback(() => {
    dispatch(closeModalRecord());
    dispatch(closeModalWater());
  }, [dispatch]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleClickClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.cssText = `overflow: hidden; `;

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.cssText = `overflow: auto; `;
    };
  }, [isModalOpenWater, isModalOpenRecord, handleClickClose, dispatch]);

  return createPortal(
    (isModalOpenWater || isModalOpenRecord) && (
      <BackdropModalStyle onClick={handleBackdropClick}>
        <div>
          {isModalOpenRecord && (
            <RecordDiaryModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenWater && (
            <WaterintakeModal handleClickClose={handleClickClose} />
          )}
        </div>
      </BackdropModalStyle>
    ),
    modalRoot
  );
};

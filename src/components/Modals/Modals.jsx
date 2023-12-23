import { createPortal } from "react-dom";
import { BackdropModalStyle } from "./Modals.styled";

import { useState, useEffect, useRef } from "react";
import { WaterintakeModal } from "./WaterIntakeModal/WaterIntakeModal";
import { RecordDiaryModal } from "./RecordDiaryModal/RecordDiaryModal";

const modalRoot = document.querySelector("#modal-root");

export const Modal = () => {
  const [showModalWater, setShowModalWater] = useState(false);
  const [showModalRecord, setShowModalRecord] = useState(false);
  const modalRef = useRef(null);

  const preventScroll = (e) => {
    e.preventDefault();
  };

  const handleClickClose = () => {
    setShowModalWater(false);
    setShowModalRecord(false);
    console.log("close");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleClickClose();
      }
    };

    const handleBackdropClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClickClose();
      }
    };
    console.log(showModalWater);
    if (showModalWater || showModalRecord) {
      document.addEventListener("click", handleBackdropClick);
      document.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      document.removeEventListener("click", handleBackdropClick);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", preventScroll, { passive: false });
      window.removeEventListener("touchmove", preventScroll, {
        passive: false,
      });
    };
  }, [showModalWater, showModalRecord]);

  return createPortal(
    (showModalRecord || showModalWater) && (
      <BackdropModalStyle>
        <div ref={modalRef}>
          {showModalRecord && (
            <RecordDiaryModal handleClickClose={handleClickClose} />
          )}
          {showModalWater && (
            <WaterintakeModal handleClickClose={handleClickClose} />
          )}
        </div>
      </BackdropModalStyle>
    ),
    modalRoot
  );
};

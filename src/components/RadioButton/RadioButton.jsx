import React from "react";
import { LabelRadio, RadioInput, RadioMark } from "./RadioButton.style";

const RadioButton = ({
  name,
  value,
  selectedValue,
  text,
  onPush,
  onBlure,
  id,
}) => {
  return (
    <>
      <LabelRadio>
        <RadioInput
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
          onChange={onPush}
          onBlur={onBlure}
        />
        <RadioMark />
        {text}
      </LabelRadio>
    </>
  );
};

export default RadioButton;

import React from 'react';
import { LabelRadio, RadioInput, RadioMark } from './RadioButton.style';

const RadioButton = ({ name, value, selectedValue, text }) => {
  return (
    <>
      <LabelRadio>
        <RadioInput
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
        />
        <RadioMark />
        {text}
      </LabelRadio>
    </>
  );
};

export default RadioButton;

import styled from "styled-components";

export const RadioMark = styled.span`
  min-width: 12px;
  min-height: 12px;
  border: 1px solid rgba(182, 182, 182, 1);
  border-radius: 50%;
  position: relative;

  &:after {
    content: "";
    min-width: 6px;
    min-height: 6px;
    background-color: ${(props) => props.theme.color.primary_green_lite};
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioInput = styled.input`
  display: none;
  margin-right: 8px;

  &:checked + ${RadioMark} {
    &:after {
      opacity: 1;
    }
  }
`;

export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
`;

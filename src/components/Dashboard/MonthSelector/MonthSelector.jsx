import React, { useEffect, useRef, useState } from 'react';
import {
  BackLink,
  ButtonWrapper,
  Container,
  List,
  Wrapper,
} from './MonthSelector.styled';
import { ReactComponent as ArrowIcon } from '../../../images/svgIcon/arrow-left.svg';
import { ReactComponent as ArrowDown } from '../../../images/icons-linear/arrow-down.svg';
import month from '../../../utils/months.json';

export const MonthSelector = () => {
  const [isOptionsListActive, setIsOptionsListActive] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('December');
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsOptionsListActive(!isOptionsListActive);
  };
  const rotateButton = () => {
    setArrowUp(rotateButton => !rotateButton);
  };

  const handleMonthClick = month => {
    setSelectedMonth(month);
    setIsOptionsListActive(false);
    setArrowUp();
  };

  const handleBackgroundClick = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOptionsListActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBackgroundClick);

    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <BackLink to={'/main'}>
            <ArrowIcon alt="Arrow Icon" />
          </BackLink>
          <div ref={dropdownRef}>
            <ButtonWrapper>
              <h1>Months</h1>
              <button onClick={handleButtonClick}>
                <ArrowDown
                  onClick={rotateButton}
                  alt="Arrow down"
                  style={{
                    transform: arrowUp ? 'rotate(180deg)' : 'rotate(0deg)',
                    stroke: !isOptionsListActive
                      ? 'rgba(255, 255, 255, 1)'
                      : 'rgba(69, 255, 188, 1)',
                  }}
                />
              </button>
            </ButtonWrapper>
            <List isOptionsListActive={isOptionsListActive}>
              {month.map(month => (
                <li key={month} onClick={() => handleMonthClick(month)}>
                  <p> {month}</p>
                </li>
              ))}
            </List>
          </div>
        </Wrapper>
        <h2>{selectedMonth}</h2>
      </Container>
    </>
  );
};

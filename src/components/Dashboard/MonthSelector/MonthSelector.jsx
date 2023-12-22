import React, { useRef, useState } from 'react';
import { BackLink, Container, Wrapper } from './MonthSelector.styled';
import { ReactComponent as ArrowIcon } from '../../../images/icons-linear/arrow-left.svg';
import { ReactComponent as ArrowDown } from '../../../images/icons-linear/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../../images/icons-linear/arrow-up.svg';
import { nanoid } from 'nanoid';

import months from '../../../utils/months.json';

export const MonthSelector = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('December');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleMonthSelect = month => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Container>
        <BackLink to={'/main'}>
          <ArrowIcon alt="Arrow Icon" />
        </BackLink>
        <Wrapper ref={dropdownRef}>
          <div>
            <button onClick={toggleDropdown}>
              Months {isOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
            {isOpen && (
              <ul>
                {months.map(month => (
                  <li key={nanoid()}>
                    <p onClick={() => handleMonthSelect(month)}>{month}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {selectedMonth && <h2> {selectedMonth}</h2>}
        </Wrapper>
      </Container>
    </>
  );
};

import months from '../../../utils/months.json';
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { BackLink, Container } from './MonthSelector.styled';
import { ReactComponent as ArrowIcon } from '../../../images/icons-linear/arrow-left.svg';
import { ReactComponent as ArrowDown } from '../../../images/icons-linear/arrow-down.svg';

export const MonthSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('December');
  const dropdownRef = useRef(null);
  const optionListRef = useRef(null);

  const handleMonthSelect = month => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleBackgroundClick = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleBackgroundClick);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, []);

  return (
    <Container>
      <div>
        <BackLink to={'/main'}>
          <ArrowIcon alt="Arrow Icon" />
        </BackLink>
        <div className="select" ref={dropdownRef}>
          <button onClick={toggleButton}>
            Month
            <ArrowDown />
          </button>
          <ul ref={optionListRef} className={`list ${isOpen ? 'open' : ''}`}>
            {months.map(month => (
              <li key={nanoid()}>
                <p onClick={() => handleMonthSelect(month)}>{month}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedMonth && <h2> {selectedMonth}</h2>}
    </Container>
  );
};

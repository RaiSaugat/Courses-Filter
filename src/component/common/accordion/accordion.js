import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './accordion.css';

function Accordion({ children, title }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion__wrapper">
      <div
        className={`accordion__header ${isOpen ? 'open' : 'close'}`}
        onClick={() => setIsOpen((s) => !s)}
      >
        <h1>{title}</h1>
        <span>
          <svg
            className={isOpen ? 'open' : 'close'}
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
      {isOpen && <div className="accordion__items">{children}</div>}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
};

Accordion.defaultProps = {
  title: 'Accordion',
};
export default Accordion;

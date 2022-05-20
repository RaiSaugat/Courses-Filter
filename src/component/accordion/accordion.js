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
        <span>aa</span>
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

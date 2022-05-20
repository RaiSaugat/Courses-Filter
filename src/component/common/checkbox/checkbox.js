import React from 'react';
import PropTypes from 'prop-types';

import './checkbox.css';

function Checkbox({ children, isChecked, onChange }) {
  return (
    <label className="checkbox__wrapper" onClick={(e) => e.stopPropagation()}>
      <input
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        onChange={(e) => {
          onChange(e);
          e.stopPropagation();
        }}
      />
      <div className="custom__checkbox" />
      {children}
    </label>
  );
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  onChange: () => {},
};

export default Checkbox;

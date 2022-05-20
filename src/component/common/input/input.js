import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

function Input({ type, onChange, value, placeholder }) {
  return (
    <div className="input__wrapper">
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

export default Input;

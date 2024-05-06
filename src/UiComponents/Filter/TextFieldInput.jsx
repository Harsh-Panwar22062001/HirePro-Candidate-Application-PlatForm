// TextFieldInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const TextFieldInput = ({ label, value, onChange }) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
    />
  );
};

TextFieldInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextFieldInput;

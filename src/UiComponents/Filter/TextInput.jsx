// TextInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, TextField } from '@mui/material';

const TextInput = ({ label, value, onChange }) => {
  return (
    <FormControl sx={{ width: 'calc(50% - 8px)', mb: 2 }}>
      <FormLabel>{label}</FormLabel>
      <TextField
        fullWidth
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
      />
    </FormControl>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;

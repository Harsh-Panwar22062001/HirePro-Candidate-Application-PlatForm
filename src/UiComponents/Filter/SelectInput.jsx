// SelectInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, MenuItem, Select } from '@mui/material';

const SelectInput = ({ label, value, onChange, options }) => {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Select an option</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectInput;

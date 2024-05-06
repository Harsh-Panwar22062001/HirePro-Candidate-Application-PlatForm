
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, MenuItem, Select } from '@mui/material';

const RefineInput = ({ label, selectedFilter, handleFilterChange }) => {
  return (
    <FormControl sx={{ width: 'calc(50% - 8px)', mb: 2 }}>
      <FormLabel>{label}</FormLabel>
      <Select
        value={selectedFilter}
        onChange={(e) => handleFilterChange(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Select {label}</em>
        </MenuItem>
        
      </Select>
    </FormControl>
  );
};

RefineInput.propTypes = {
  label: PropTypes.string.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default RefineInput;

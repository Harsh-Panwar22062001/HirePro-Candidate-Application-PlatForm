import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, MenuItem, Select } from '@mui/material';










/**
 * FilterSelector provides a dropdown menu for selecting different job filters.
 * It is designed to be reusable and configurable based on the filter options provided.
 * 
 * @param {Object} props - Component props
 * @param {string} props.selectedFilter - Currently selected filter type
 * @param {Function} props.handleFilterTypeChange - Handler function to update the selected filter type
 * @param {Array} props.filterOptions - Array of filter options to display
 */



const RefineInput = ({ selectedFilter, handleFilterTypeChange, filterOptions }) => {
  return (
    <FormControl fullWidth>
      <FormLabel>Filter by:</FormLabel>
      <Select
        value={selectedFilter} 
        onChange={handleFilterTypeChange} 
        displayEmpty 
        inputProps={{ 'aria-label': 'Without label' }} 
      >
        <MenuItem value="">
          <em>Select a filter</em>
        </MenuItem>
        {filterOptions.map(option => (
          <MenuItem key={option.key} value={option.key}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

RefineInput.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  handleFilterTypeChange: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default RefineInput;

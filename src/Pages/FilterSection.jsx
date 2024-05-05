import React, { useState } from 'react';
import { Box, Container, TextField } from '@mui/material';
import RefineInput from '../UiComponents/Filter/RefineInput';
import SelectFilterInput from '../UiComponents/Filter/SelectFilterInput';

const FilterSection = ({ filters, setFilters }) => {
  // Define available filters here
  const filterOptions = [
    // Predefined filter options for job listings.
    { key: 'location', name: 'Location' },
    { key: 'jobRole', name: 'Job Role' },
    { key: 'minExp', name: 'Min Experience' },
    { key: 'companyName', name: 'Company Name' },
    { key: 'minJdSalary', name: 'Min base Pay' },
    { key: 'workType', name: 'Work Type' }
    // Add more filters as needed
  ];

  // State to track the currently selected filter
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterTypeChange = (event) => {
    const newFilterType = event.target.value;
    setSelectedFilter(newFilterType);

    // Reset the corresponding filter value when changing the filter type
    setFilters({
      ...filters,
      [newFilterType]: '' // Ensures that when switching filters, the input starts empty.
    });
  };

  const handleFilterValueChange = (event) => {
    // Update the value for the currently selected filter
    setFilters({
      ...filters,
      [selectedFilter]: event.target.value
    });
  };

  const handleWorkTypeChange = (event) => {
    // Update workType filter directly
    setFilters({
      ...filters,
      workType: event.target.value // Directly updates the workType in the filters state.
    });
  };

  return (
    <Container display='flex' justifyContent='center' sx={{ width: '33%' }}>
      <Box>
        <Box sx={{ mb: 2 }}>
          <RefineInput
            selectedFilter={selectedFilter}
            handleFilterTypeChange={handleFilterTypeChange}
            filterOptions={filterOptions}
          />
        </Box>
        {selectedFilter === 'workType' ? (
          <SelectFilterInput
            selectedFilter={selectedFilter}
            filters={filters}
            handleFilterValueChange={handleWorkTypeChange}
            handleWorkTypeChange={handleWorkTypeChange}
            filterOptions={filterOptions}
          />
        ) : (
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type="text"
              name={selectedFilter} // this is used whenever the value changes to update the jobLists accordingly
              value={selectedFilter ? (filters[selectedFilter] || '') : ''}
              onChange={handleFilterValueChange}
              label={filterOptions.find(opt => opt.key === selectedFilter)?.name ?
                `Enter ${filterOptions.find(opt => opt.key === selectedFilter).name}` :
                'Select filter'}
              variant="outlined"
              disabled={!selectedFilter}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default FilterSection;

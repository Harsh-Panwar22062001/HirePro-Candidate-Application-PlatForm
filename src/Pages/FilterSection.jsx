import React, { useState } from 'react';
import { Box, Container, TextField } from '@mui/material';
import RefineInput from '../UiComponents/Filter/RefineInput';
import SelectFilterInput from '../UiComponents/Filter/SelectFilterInput';
 



const FiltersSection = ({ filters, setFilters }) => {
  const filterOptions = [
    { key: 'location', name: 'Location' },
    { key: 'jobRole', name: 'Job Role' },
    { key: 'minExp', name: 'Min Experience' },
    { key: 'companyName', name: 'Company Name' },
    { key: 'minJdSalary', name: 'Min base Pay' },
    { key: 'workType', name: 'Work Type' }
  ];

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterTypeChange = (event) => {
    const newFilterType = event.target.value;
    setSelectedFilter(newFilterType);

    setFilters({
      ...filters,
      [newFilterType]: '',
    });
  };

  const handleFilterValueChange = (event) => {
    setFilters({
      ...filters,
      [selectedFilter]: event.target.value
    });
  };

  const handleWorkTypeChange = (event) => {
    setFilters({
      ...filters,
      [selectedFilter]: event.target.value,
    });
  };

  return (
    <Container display='flex' justifyContent='center' sx={{ width: '33%' }}>
      <Box>
        <Box sx={{ mb: 2 }}>
        <RefineInput  selectedFilter={selectedFilter} handleFilterTypeChange={handleFilterTypeChange} filterOptions={filterOptions}  />
          
        </Box>

        {selectedFilter === 'workType' ? (
          <SelectFilterInput    selectedFilter={selectedFilter} filters={filters} handleFilterValueChange={handleFilterValueChange} handleWorkTypeChange={handleWorkTypeChange} filterOptions={filterOptions}   />
         
         
        ) : (
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type="text"
              name={selectedFilter}
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
};

export default FiltersSection;

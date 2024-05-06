import React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "20px",
  background: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  marginBottom: "30px",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
});

const StyledTextField = styled(TextField)({
  marginBottom: "10px",
  width: "90%",
});

const FilterTitle = styled(Typography)({
  marginBottom: "10px",
  fontWeight: "bold",
});

const FilterSection = ({ filters, setFilters }) => {
  const filterOptions = [
    { key: "location", name: "Location" },
    { key: "jobRole", name: "Job Role" },
    { key: "minExp", name: "Min Experience" },
    { key: "companyName", name: "Company Name" },
    { key: "minJdSalary", name: "Min Base Pay" },
    { key: "workType", name: "Work Type" },
  ];

  const handleFilterValueChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <StyledContainer>
      <StyledBox>
        {filterOptions.map((option) => (
          <motion.div
            key={option.key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <StyledTextField
              fullWidth
              type="text"
              value={filters[option.key]}
              onChange={(e) =>
                handleFilterValueChange(option.key, e.target.value)
              }
              label={option.name}
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
          </motion.div>
        ))}
      </StyledBox>
    </StyledContainer>
  );
};

export default FilterSection;

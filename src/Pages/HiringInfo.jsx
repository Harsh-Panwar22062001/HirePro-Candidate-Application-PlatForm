import React from "react";
import { Typography, Box } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

/**
 * Component that displays basic job information including the company name,
 * job role, and location.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.companyName - The name of the company posting the job.
 * @param {string} props.jobRole - The role being offered.
 * @param {string} props.location - The location of the job.
 */
const HiringInfo = ({ companyName, jobRole, location, imageUrl }) => {
    return (
        <Box sx={{ mt: 2 }} display="flex" flexDirection="row">
            <Box sx={{ width: '23%', height: '75%' }}>
                <img src={imageUrl} alt="Company Logo" style={{ width: '100%', height: '100%', borderRadius: 3 }} />
            </Box>
            <Box sx={{ width: '80%', marginLeft: 1 }}>
                <Typography variant="h5" component="div" sx={{ fontSize: '1.2rem', color: "#7f8280", fontWeight: "700" }}>
                    {companyName}
                </Typography>
                <Typography component="div" sx={{ fontSize: '1rem', color: "#393b39", fontWeight: "500" }}>
                    {jobRole.charAt(0).toUpperCase() + jobRole.slice(1).toLowerCase()} {jobRole.toLowerCase() !== "tech lead" ? "Developer" : ""}
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="center" sx={{ fontSize: "0.8rem", marginLeft: '-2px' }}>
                    <RoomOutlinedIcon />
                    <Typography variant="body1" color="#5e615f" fontWeight={600} sx={{ marginRight: '10px', fontSize: '0.9rem', marginLeft: '2px' }}>
                        {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default HiringInfo;

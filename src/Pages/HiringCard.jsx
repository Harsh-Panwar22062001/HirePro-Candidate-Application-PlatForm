import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

import HiringInfo from './HiringInfo';
import ScrollDescrp from "../UiComponents/HiringDescription/ScrollDescrp";
import ApplyNowButton from '../UiComponents/CardButtons/ApplyNowButton';
import ReferButton from '../UiComponents/CardButtons/ReferButton';

const HiringCard = ({ job }) => {
    const [isHovered, setIsHovered] = useState(false);

    const postedday = job?.maxJdSalary % 30;

    const estimatedSalary = job?.minJdSalary && job?.maxJdSalary 
        ? `${job.minJdSalary}k - ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
        : job?.minJdSalary 
        ? `${job.minJdSalary}k ${job.salaryCurrencyCode} +`
        : job?.maxJdSalary 
        ? `Up to ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
        : "As per industry standards";

    return (
        <Card
            style={{
                transition: 'box-shadow 0.3s', // Add transition for shadow opacity change
                backgroundColor: isHovered ? '#E0FFFF' : '#F0F8FF', // Light blue gradient background on hover
                boxShadow: isHovered ? '0px 4px 10px rgba(0, 0, 255, 0.3)' : '0px 2px 4px rgba(0, 0, 0, 0.1)', // Light blue shadow on hover
                borderRadius: '15px', // Add border radius for a more modern look
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" alignItems="center">
                            <HourglassFullTwoToneIcon style={{ fontSize: 20, marginRight: 5 }} />
                            <Typography variant="body2">Posted {postedday} days ago</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="flex-end">
                            <VerifiedOutlinedIcon style={{ fontSize: 20, marginRight: 5 }} />
                            <Typography variant="body2">Estimated Salary: {estimatedSalary}</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <HiringInfo companyName={job.companyName} location={job.location} jobRole={job.jobRole} imageUrl={job.logoUrl}/>

                <Typography variant="body2" sx={{ fontWeight: "550", fontFamily: 'Roboto', marginTop: 2 }}>
                    About Company:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight:"800", fontFamily: 'Roboto' }}>
                    About Us
                </Typography>

                <ScrollDescrp content={job.jobDetailsFromCompany} />
              
                <Box marginTop={2}>
                    <Typography variant="body2" sx={{ fontWeight: "550", fontFamily: 'Roboto' }}>
                        Minimum Experience:
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'Roboto' }}>
                        {job.minExp ? job.minExp + " years" : "1+ years"}
                    </Typography>
                </Box>
                
                <Box marginTop={2} marginRight={2} display="flex" justifyContent="space-between" flexDirection="column">
                    <ApplyNowButton/>
                    <ReferButton/>
                </Box>
            </CardContent>
        </Card>
    );
};

export default HiringCard;

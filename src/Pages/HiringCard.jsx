import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const HiringCard = ({ job }) => {
    // Check if job object is defined and has maxJdSalary property
    const postedDays = job && job.maxJdSalary ? parseInt(job.maxJdSalary / 30) : 0;
    
    const estimated_salary = job && job.minJdSalary && job.maxJdSalary 
        ? `${job.minJdSalary}k - ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
        : job && job.minJdSalary 
        ? `${job.minJdSalary}k ${job.salaryCurrencyCode} +`
        : job && job.maxJdSalary 
        ? `upto ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
        : "As per industry standards";
    
    return (
        <Card sx={{ margin: 2, boxShadow: 2, border: "1px solid #d7dbd8", borderRadius: 5 }} key={job.id}>
            <CardContent>
                <Box sx={{ border: "2px solid #d7dbd8", borderRadius: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%', pl: 1, sx: { width: ['50%', '40%', '33%'] } }}>
                    <HourglassFullTwoToneIcon sx={{ fontSize: 13 }} />
                    <Typography sx={{ fontSize: 13 }}>Posted {postedDays} days ago</Typography>
                </Box>
               
                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1, alignItems: "center" }}>
                    <Typography variant="body1" fontWeight={600} color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '1rem' }}>
                        Estimated Salary: {estimated_salary}
                    </Typography>
                    <VerifiedOutlinedIcon sx={{ fontSize: '1.2rem' }} />
                </Box>
              
                <Typography variant="body2" sx={{ fontWeight: "550" }}>
                    About Company:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "800" }}>
                    About Us
                </Typography>
               
                <div sx={{ marginBottom: 2 }}>
                    <Typography variant="body1" fontWeight={600} color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem' }}>
                        Minimum Experience
                    </Typography>
                    <Typography variant="body1" color="#fffff" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', marginBottom: 2 }}>
                        {job && job.minExp ? job.minExp + " years" : "1+ years"}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default HiringCard;

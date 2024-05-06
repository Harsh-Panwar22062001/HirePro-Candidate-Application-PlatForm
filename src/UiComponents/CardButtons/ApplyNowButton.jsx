import React from "react";
import { Button, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';


const ApplyNowButton = () => {
    return (
        // Centered button container with bottom margin for spacing
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
            {/* Button styled with a custom cyan background color and rounded corners */}
            <Button 
                variant="contained" 
                color="primary" 
                style={{
                    backgroundColor: '#ffd700', // Custom button color
                    width: '100%',
                    // height:'80%', 
                    borderRadius: '8px',
                    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)', 
                    transition: 'box-shadow 0.3s ease', 
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0px 3px 15px rgba(0, 0, 0, 0.4)'} // Change shadow on hover
                onMouseLeave={(e) => e.target.style.boxShadow = '0px 3px 10px rgba(0, 0, 0, 0.2)'} // Restore shadow on mouse leave
            >
                {/* Bolt icon indicating a quick action, sized for visibility */}
                <BoltIcon style={{ fontSize: '1rem' }} />
                {/* Button text styled for contrast and emphasis without text transformation */}
                <Typography style={{ color: 'black', fontWeight: 'bold', textTransform: 'none' }}>
                    Easy Apply
                </Typography>
            </Button>
        </div>
    )
}

export default ApplyNowButton;

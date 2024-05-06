import React from "react";
import { Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useSpring, animated } from 'react-spring'; 


const ReferButton = () => {
   
    const springProps = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 500 }
    });

    return (
      
        <animated.div style={springProps}>
           
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ 
                        backgroundColor: '#6200EA',
                        width: '100%', 
                         margin:'5px',
                        borderRadius: '10px',
                        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)', 
                        transition: 'box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.boxShadow = '0px 3px 15px rgba(0, 0, 0, 0.4)'} // Change shadow on hover
                    onMouseLeave={(e) => e.target.style.boxShadow = '0px 3px 10px rgba(0, 0, 0, 0.2)'} // Restore shadow on mouse leave
                >
                   
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                            <PersonIcon style={{ fontSize: '2rem', color: '#FFD700' }} /> 
                            <PersonIcon style={{ fontSize: '2rem', color: '#FFD700' }} /> 
                        </div>
                      
                        <Typography style={{ fontSize: '0.8rem', color: 'white', textTransform: 'none' }}>
                            Unlock referral asks
                        </Typography>
                    </div>
                </Button>
            </div>
        </animated.div>
    )
}

export default ReferButton;

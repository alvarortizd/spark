import React from 'react';

import { Container, Typography,Box } from '@mui/material';
import  cover from "../images/earthSunrise.jpg";
import imgti from "../images/logo/logo.png"

const Home = () => {
    return(
        <Container>
            <Box padding={2} sx={{height:'80vh', borderRadius: '16px', boxShadow: 1, backgroundImage:`url(${cover})`,backgroundRepeat: "no-repeat",  backgroundSize: "cover"}} >
            <img src={imgti} alt="Logo" width={150} style={{marginLeft:'1.5vw'}} />
                <Box sx={{  maxWidth:'400px', bgcolor:'transparent'}}>
                <Typography ml={3} mt={3} variant="body2" gutterBottom style={{color:'white',fontSize:'1.4rem'}}> 
                     <b>Welcome to "Spark"</b><br/> 
                     a project crafted by me to showcase my web development proficiency. 
                     Utilizing React and the NASA API, this endeavor aims to demonstrate 
                     the fusion of creativity and technical skill in building a dynamic 
                     and engaging web experience.
                </Typography>
                </Box>
                <Box mt={2} sx={{display:'flex',flexDirection: 'row-reverse'}}>
                    <Box sx={{  maxWidth:'400px',  bgcolor:'transparent'}}>
                    <Typography ml={3} variant="body2" gutterBottom style={{color:'white',fontSize:'1.2rem'}}> 
                    The spark emanating from the cosmic abyss symbolizes 
                    the fervor to enhance oneself, both personally and 
                    professionally, seeking recognition through the artistic
                    expression embedded in my code.
                    </Typography>
                    </Box>
                </Box>
                
            </Box>
        </Container>
        
    );
}


export default Home;
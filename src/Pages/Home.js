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
                <Typography ml={3} variant="body2" gutterBottom style={{color:'white',fontSize:'1.4rem'}}> 
                     <b>Welcome to "Spark"</b><br/> 
                     This is a project developed by me<br/> 
                     with the idea of demonstrating my <br/>
                     web development skills using React<br/> and NASA API.
                </Typography>
                </Box>
                <Box sx={{  maxWidth:'400px',  bgcolor:'transparent'}}>
                <Typography ml={3} variant="body2" gutterBottom style={{color:'white',fontSize:'1.2rem'}}> 
                <b>Why "Spark"?</b> <br/>
                Spark why is the spark that shines from <br/>
                the darkness of space that represents <br/>
                the enthusiasm to improve as a person, <br/>
                as a professional, to be noticed by the <br/>
                art that I make my code.
                </Typography>
                </Box>
                
            </Box>
        </Container>
        
    );
}


export default Home;
import { Container, Typography, Box } from "@mui/material";
import React from "react";
import cover from "./../images/astronaut.jpg";

function NotFound() {
    return (
        <Container>
            <Box  padding={2} sx={{height:'80vh', borderRadius: '16px', boxShadow: 1, backgroundImage:`url(${cover})`,backgroundRepeat: "no-repeat",  backgroundSize: "cover"}} >
            <Typography pl={1} mt={1} variant="h2" gutterBottom sx={{color:'WHITE'}}>
               <b>404</b>
            </Typography>
            <Typography pl={1}variant="h4" gutterBottom sx={{color:'WHITE'}}>
               <b>PAGE NOT FOUND</b>
            </Typography>
            </Box>
        </Container>
    );
}export default NotFound;
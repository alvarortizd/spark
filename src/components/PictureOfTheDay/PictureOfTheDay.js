import { Container } from "@mui/material";
import React, { useState, useEffect }  from "react";
import axios from 'axios';
import {Typography,CardContent,CardMedia,Card} from "@mui/material";



const PictureOfTheDay = () => {
    const [apodData, setApodData] = useState(null);
    useEffect(() => {
        const fetchApodData = async () => {
          try {
            const response = await axios.get(
              'https://api.nasa.gov/planetary/apod?api_key=kgbPpJxsbaQVhph1iYKH71u0z7PHTuOPcjQutnGS'
            );
            console.log(response.data);
            setApodData(response.data);
          } catch (error) {
            console.error('Error fetching APOD data:', error);
          }
        };
    
        fetchApodData();
      }, []);


    return(
    <Container align="center">
    <Typography variant="h3" pr={3} pb={2} pt={2} align='CENTER'sx={{color:'white'}} >PICTURE OF THE DAY</Typography>
    <Card sx={{ maxWidth: '50vw', bgcolor:'transparent'}}>
      <CardMedia
        sx={{ height: '40vh', marginBottom:2}}
        image={apodData?.url}
        title="picture of the day"
      />
      <CardContent sx={{bgcolor:'rgba(189, 195, 199,1)'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
          {apodData?.title}
        </Typography>
        <Typography variant="body2" sx={{color:'white'}}>
        {apodData?.explanation}
        </Typography>
      </CardContent>
    </Card>
    </Container>);
}

export default PictureOfTheDay;
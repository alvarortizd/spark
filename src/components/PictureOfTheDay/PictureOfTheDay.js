import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const PictureOfTheDay = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=kgbPpJxsbaQVhph1iYKH71u0z7PHTuOPcjQutnGS'
        );
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchApodData();
  }, []);

  return (
    <Container align="center">
      <Typography variant="h3" pr={3} pb={0.5} pt={0.5} align='CENTER' sx={{ color: 'white' }}><b>PICTURE OF THE DAY</b></Typography>
      <Card sx={{ maxWidth: '50vw', bgcolor: 'transparent', borderRadius:'10px' }}>
        <CardMedia
          sx={{ height: '40vh' }}
          image={apodData?.url || 'URL_POR_DEFECTO_SI_NO_HAY_DATOS'}
          title="picture of the day"
        />
        <CardContent sx={{ bgcolor: 'rgba(189, 195, 199,1)' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#6F7c80' }}>
            <b>{apodData?.title || 'Título Por Defecto'}</b> 
          </Typography>
          <Typography variant="body2" sx={{ color: '#6F7c80' }}>
            {apodData?.explanation || 'Explicación Por Defecto'}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PictureOfTheDay;

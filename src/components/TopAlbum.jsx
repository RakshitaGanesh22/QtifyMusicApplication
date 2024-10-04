import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import 'swiper/swiper-bundle.min.css';
export default function TopAlbum(){
    const slides = [
        { title: "Slide 1" },
        { title: "Slide 2" },
        { title: "Slide 3" },
        { title: "Slide 4" },
      ];
    
      return (
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              1024: { slidesPerView: 3 },
              600: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{slide.title}</Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      );
    };
    
    


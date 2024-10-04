import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React from 'react';
import CommonCard from "./commonCard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box } from "@mui/material";

export default function SliderFunction(props) {
    console.log(props.item);
    let Album=props.item;
    const settings = {
        dots: false,            
        infinite: true,          
        speed: 500,               
        slidesToShow: 7.3,        
        slidesToScroll: 1, 
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,    
        responsive: [
            {
                breakpoint: 1440,  
                settings: {
                    slidesToShow: 6,   
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 5, 
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,  
                settings: {
                    slidesToShow: 5,  
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,   
                settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,     
                settings: {
                    slidesToShow: 2,    
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,       
                settings: {
                    slidesToShow: 2,      
                    slidesToScroll: 1,
                },
            },
        ],
    };

    function CustomPrevArrow(props) {
        const { onClick } = props;
        return (
            <Box 
                onClick={onClick} 
                sx={(theme)=>({ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    position: 'absolute', 
                    left: 10, 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    zIndex: 100,
                    cursor: 'pointer',
                    
                })}
            >
                <ArrowCircleLeftIcon sx={{ fontSize: '30px', color: 'black' ,color:"#34C94B" }} />
            </Box>
        );
    }

    function CustomNextArrow(props) {
        const { onClick } = props;
        return (
            <Box 
                onClick={onClick} 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    position: 'absolute', 
                    right: 10,
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    zIndex: 100,
                    cursor: 'pointer' 
                }}
            >
                <ArrowCircleRightIcon sx={{ fontSize: '30px', color: 'black' ,color:"#34C94B"}} />
            </Box>
        );
    }

    return (
        <Box>
            <Slider {...settings}>
                {Album.map((album, index) => (
                    <CommonCard key={index} item={album} />
                ))}
            </Slider>
        </Box>
    );
}

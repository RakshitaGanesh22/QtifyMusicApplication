import {Card,CardMedia,CardContent,Chip, Typography,Box,Tooltip} from "@mui/material";
import { dataProvider } from "../components/dataContext";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function CommonCard(props){
    const Navigate=useNavigate();
    const {currentSong, setCurrentSong}=useContext(dataProvider);
    const {image,follows,title}=props.item;
    console.log(image,follows,title);
    function handleClick(){
        setCurrentSong(props.item);
        console.log(currentSong);
        Navigate('/music')
    }
    return(
        <Tooltip title={title} >
        <Box onClick={handleClick} sx={{height:"240px",width:"160px",display:"grid",gap:"0.5rem",'&:hover': {
                    cursor: 'pointer',
                    transform:"scale(0.9)",
                    transition: "transform 0.8s ease"
                },}}>
        <Card sx={{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"start",height:"210px",width:"100%",borderRadius:"0.8rem",boxShadow: '10px 10px 10px rgba(255, 255, 255, 0.2)'}}>
            <CardMedia component="img" image={image} sx={{height:"170px",width:"100%",objectFit:"cover"}}/>
            <Chip
                label={`${follows} follows`}
                sx={{
                    width:"90px",
                    height:"25px",   
                    backgroundColor: "#121212",  
                    fontWeight: "bold",fontSize:"10px",marginLeft:"0.3rem"}} 
                />
        </Card>
        <Typography variant="body" sx={{textAlign:"left"}}>{title}</Typography>
        </Box>
        </Tooltip>
    )
}
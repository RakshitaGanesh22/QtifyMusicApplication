import {Card,CardMedia,CardContent,Chip, Typography,Box,Tooltip} from "@mui/material";
import { dataProvider } from "../components/dataContext";
import { useState, useContext, useEffect } from "react";
export default function SongCard(props){
    const {currentSong, setCurrentSong}=useContext(dataProvider);
    const {image,likes,title,genre}=props.item;
    // console.log(image,likes,title,genre.label);
    function handleClick(){
        setCurrentSong(props.item);
        console.log(currentSong);
    }
    return(
        <Tooltip title={genre.label} >
        <Box onClick={handleClick} sx={{height:"240px",width:"160px",display:"grid",gap:"0.5rem",'&:hover': {
                    cursor: 'pointer',
                    transform:"scale(0.9)",
                    transition: "transform 0.8s ease"
                },}}>
        <Card sx={{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"start",height:"210px",width:"100%",borderRadius:"0.8rem",boxShadow: '10px 10px 10px rgba(255, 255, 255, 0.2)'}}>
            <CardMedia component="img" image={image} sx={{height:"170px",width:"100%",objectFit:"cover"}}/>
            <Chip
                label={`${likes} likes`}
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
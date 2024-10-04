import React, { useState } from 'react';
import { dataProvider } from "../components/dataContext";
import { useContext } from "react";
import { Box,Button,Typography } from "@mui/material";
import SliderFunction from "./slider";
import CommonCard from "./commonCard";
export default function TopAlbum() {
    const { TopAlbum } = useContext(dataProvider);
    const[open,setOpen]=useState(false);
    function ShowAll(){
        return(
            <Box sx={{display:"flex",flexWrap:"wrap",gap:"1.5rem"}}>
                {TopAlbum.map((album, index) => (
                    <CommonCard key={index} item={album} />
                ))}
            </Box>)
    }
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:"1rem",padding:"2rem",backgroundColor:"#121212"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h2" sx={{fontWeight:"600"}}>Top Albums</Typography>
                <Button sx={{fontSize:"20px",fontWeight:"600",color:"#34C94B",fontFamily:"Poppins"}} onClick={()=>{setOpen(!open)}}>{open?"Collapse":"Show All"}</Button>
            </Box>
            {!open?<SliderFunction item={TopAlbum}/>:<ShowAll/>}
        </Box>
    );
}

import {Box,Typography,iconButton, IconButton,useMediaQuery,useTheme} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShuffleTwoToneIcon from '@mui/icons-material/ShuffleTwoTone';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import { dataProvider } from "../components/dataContext";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AlbumHeroSection(){
    const Navigate=useNavigate();
    const theme=useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { currentSong,setCurrentSong } = useContext(dataProvider);
    console.log(currentSong);
    const {title,description,follows,image,songs}=currentSong;
    function Count(songs){
        let count=0;
        for(let i=0;i<songs.length;i++){
            count=count+songs[i].durationInMs;
        }
        let value=Convert(count); 
        console.log(count);
        return value;
    }
    function Convert(ms){
        let hours = Math.floor(ms / (1000 * 60 * 60)); // Convert ms to hours
        let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)); // Remaining ms to minutes

        return `${hours} hr and ${minutes} min`;
    }
    
    function handleClick(){
        Navigate("/");
    }
    function handleShuffle(){
        console.log(currentSong);

        setCurrentSong((prev)=>{function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          }
          shuffleArray(prev.songs);
          return prev;
          }
          )
    }
    return(
        <Box sx={{backgroundColor:"#121212",display:"flex",flexDirection:"column",gap:"3rem",alignItems:"start",justifyContent:"center",padding:"5rem"}}>
            <Box sx={{backgroundColor:"#34C94B",borderRadius:"20%"}}>
                <IconButton aria-label="" onClick={handleClick} sx={{color:"#fff",fontWeight:"600"}}>
                  <ArrowBackIcon/>
                </IconButton>
            </Box>
            <Box sx={{display:isSmallScreen?"grid":"flex",alignItems:"center",gap:"5rem",justifyContent:"space-around"}}>
                <Box>
                <Box component="img"
                src={image}
                alt="bannerImage"
                sx={{height:"320px",width:"290px",borderRadius:"1rem",boxShadow: '10px 10px 10px rgba(255, 255, 255, 0.2)'}}
                />
                </Box>
                
                <Box sx={{display:"grid",gap:"2rem"}}>
                    <Box sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"1rem"}}>
                        <Typography variant="h1" sx={{display:"flex",flexWrap:"wrap",letterSpacing:"0.05rem"}}>{title}</Typography>
                        <Typography variant="p" sx={{display:"flex",flexWrap:"wrap",letterSpacing:"0.05rem"}}>{description}</Typography>
                        <Typography variant="h2" sx={{display:"flex",flexWrap:"wrap",letterSpacing:"0.05rem",fontWeight:"500",fontSize:"1.2rem"}}>{songs.length}&nbsp;Songs&nbsp;*&nbsp;{currentSong.follows}&nbsp;Follows&nbsp;*&nbsp;{Count(currentSong.songs)}</Typography>
                    </Box>
                    <Box sx={{display:"flex",gap:"1rem"}}>
                        <IconButton sx={{color:"#fff",backgroundColor:"#34C94B",height:"60px",width:"150px",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",border:"1px solid white",boxShadow: '5px 5px 5px rgba(255, 255, 255, 0.2)'}} onClick={handleShuffle}><ShuffleTwoToneIcon/><Typography variant="h3">
                            &nbsp;Shuffle
                        </Typography></IconButton>
                        <IconButton sx={{color:"#34C94B",height:"60px",width:"180px",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",border:"1px solid #34C94B",boxShadow: '5px 5px 5px rgba(255, 255, 255, 0.2)'}}><LibraryAddOutlinedIcon/>
                        <Typography>&nbsp;Add to library</Typography>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
        
    )
}
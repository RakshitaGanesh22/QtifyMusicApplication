import { Box, IconButton, Typography, Slider, useMediaQuery, useTheme } from "@mui/material";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useState, useRef, useEffect,useContext } from "react";
import { dataProvider } from "../components/dataContext";
export default function CurrentMusic() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [started, setStarted] = useState(false);
    const [progress, setProgress] = useState(0); 
    const [volume, setVolume] = useState(50);
     
    const {playing,setPlaying } = useContext(dataProvider);
    const {image,durationInMs,title}=playing;
    const intervalRef = useRef(null);
    const duration = durationInMs/1000;
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    
    const startTimer = () => {
            intervalRef.current = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress < duration) {
                        return prevProgress + 1;
                    } else {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null; 
                        handleClick();
                        return 0;
                    }
                });
            }, 1000); 
        
    };

    
    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    
    const handleClick = () => {
        if (started) {
            stopTimer();
        } else {
            startTimer();
        }
        setStarted(!started);
    };

    
    const handleProgressChange = (event, newValue) => {
        setProgress(newValue);
    };

    
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };

    
    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <Box sx={{
            display: isSmallScreen ? "grid" : "flex",
            width: "100%",
            backgroundColor: "#121212",
            justifyContent: "space-around",
            padding: isSmallScreen ? "0rem" : "1rem",
            overflow: "hidden",
            boxSizing: "border-box",
            boxShadow: '150px 150px 150px 150px rgba(255, 255, 255, 0.2)',
            border:"1px solid white",
            position:"fixed",
            bottom:"0",
            zIndex:"1000"
        }}>
           
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <Box
                    component="img"
                    src={image}
                    sx={{ height: "80px", width: "75px", borderRadius: "0.5rem",boxShadow:"8px 8px 8px  rgba(255, 255, 255, 0.2)" }}
                />
                <Box sx={{ textAlign: "left" }}>
                    <Typography variant="body">{title}</Typography>
                    <Typography sx={{ fontSize: "12px", color: "white" }}>Album Name</Typography>
                </Box>
            </Box>

            
            <Box sx={{ display: "grid" }}>
                <Box>
                    <IconButton><ArrowLeftIcon sx={{ color: "white", backgroundColor: "#34C94B", height: "48px", width: "48px", borderRadius: "0.5rem" }} /></IconButton>
                    <IconButton onClick={handleClick}>
                        {started ? (
                            <PauseCircleIcon sx={{ color: "white", backgroundColor: "#34C94B", height: "48px", width: "48px", borderRadius: "0.5rem" }} />
                        ) : (
                            <NotStartedIcon sx={{ color: "white", backgroundColor: "#34C94B", height: "48px", width: "48px", borderRadius: "0.5rem" }} />
                        )}
                    </IconButton>
                    <IconButton><ArrowRightIcon sx={{ color: "white", backgroundColor: "#34C94B", height: "48px", width: "48px", borderRadius: "0.5rem" }} /></IconButton>
                </Box>

                
                <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3">{formatTime(progress)}</Typography>
                    <Slider
                        value={progress}
                        min={0}
                        max={duration}
                        onChange={handleProgressChange}
                        sx={{ width: isSmallScreen ? "60vw" : "50vw" }}
                    />
                    <Typography variant="h3">{formatTime(duration)}</Typography>
                </Box>
            </Box>

            
            <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                <Slider
                    value={volume}
                    min={0}
                    max={100}
                    onChange={handleVolumeChange}
                    orientation="vertical"
                />
                {volume === 0 && <VolumeMuteIcon sx={{ color: "white" }} />}
                {(volume > 0 && volume < 60) && <VolumeDownIcon sx={{ color: "white" }} />}
                {volume >= 60 && <VolumeUpIcon sx={{ color: "white" }} />}
            </Box>
        </Box>
    );
}

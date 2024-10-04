import {Box,Typography,useMediaQuery} from "@mui/material";
import hero from "./assets/headPhone.png.png";
import { useTheme } from "@emotion/react";

export default function HeroSection(){
    const theme=useTheme();
    const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Box sx={(theme)=>({backgroundColor:theme.palette.background.default,display:"flex",justifyContent:"center",alignItems:"center",padding:"3rem",gap:isSmallScreen?"0rem":"2rem",textAlign:"center",flexDirection:isSmallScreen?"column":"row",marginBottom:"-2rem"})}>
            <Typography component="h1"
            variant="h1" sx={{letterSpacing:"0.08rem",lineHeight:"50px"}}>
                100 Thousand Songs, ad-free<br/>
                Over thousands podcast episode
            </Typography>
            <Box
            component="img"
            src={hero}
            sx={{height:"210px",width:"210px"
            }}
            />
        </Box>
    )
}
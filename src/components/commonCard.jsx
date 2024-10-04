import {Card,CardMedia,CardContent,Chip, Typography,Box,Tooltip} from "@mui/material";
export default function CommonCard(){
    let img="https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";
    return(
        <Tooltip title="Click to submit">
        <Box sx={{height:"240px",width:"160px",display:"grid",gap:"0.5rem"}}>
        <Card sx={{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"start",height:"210px",width:"100%",borderRadius:"0.8rem"}}>
            <CardMedia component="img" image={img} sx={{height:"170px",width:"100%",objectFit:"cover"}}/>
            <Chip
                label="1770 follows"
                sx={{
                    width:"90px",
                    height:"25px",   
                    backgroundColor: "#121212",  
                    fontWeight: "bold",fontSize:"10px",marginLeft:"0.3rem"}} 
                />
        </Card>
        <Typography sx={{color:"black",textAlign:"left"}}>New Bollywood</Typography>
        </Box>
        </Tooltip>
    )
}
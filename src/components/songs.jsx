import React, { useState } from 'react';
import { dataProvider } from "../components/dataContext";
import { useContext } from "react";
import { Box,Button,Typography,Tabs,Tab } from "@mui/material";
import SongSlider from "./songSlider";
import CommonCard from "./commonCard";
export default function Songs() {
    
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    const { Songs,genre } = useContext(dataProvider);
    const JazzSongs=Songs.filter((item)=>item.genre.label=="Jazz");
    const RockSongs=Songs.filter((item)=>item.genre.label=="Rock");
    const PopSongs=Songs.filter((item)=>item.genre.label=="Pop");
    const BluesSongs=Songs.filter((item)=>item.genre.label=="Blues");
    const[open,setOpen]=useState(false);
    const [value, setValue] = useState(0); 
     console.log(genre);  
     let idCount=0; 
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:"1rem",backgroundColor:"#121212"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",paddingLeft:"2rem"}}>
                <Typography variant="h2" sx={{fontWeight:"600"}}>Songs</Typography>
            </Box>
            <Tabs  value={value} onChange={handleChange} sx={{paddingLeft:"2rem",
                '.MuiTab-root': {
                 color: 'white', // Sets the text color to white
                },
                '.Mui-selected': {
                 color: '#34C94B', // Different color for the selected tab (optional)
                 },
                }}>
            <Tab label={`All`} id={`tab-0`}/>              
                {genre.map((item,index)=>{return <Tab label={`${item.label}`} id={`tab-${index+1}`}/>})}
            </Tabs>
    <TabPanel value={value} index={0}>
        <SongSlider item={Songs} />
    </TabPanel>
    <TabPanel value={value} index={1}>
    <SongSlider item={JazzSongs} />
    </TabPanel>
    <TabPanel value={value} index={2}>
        <SongSlider item={RockSongs} />
    </TabPanel>
    <TabPanel value={value} index={3}>
        <SongSlider item={PopSongs} />
    </TabPanel>
    <TabPanel value={value} index={4}>
        <SongSlider item={BluesSongs} />
    </TabPanel>
        </Box>
    );
}
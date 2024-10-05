import HeroSection from '../Herosection';
import CommonCard from "../commonCard";
import TopAlbum from "../TopAlbum";
import NewAlbum from "../newAlbum";
import FAQ from "../FAQ";
import Songs from "../songs";
import MusicPlayerBar from "../playing";
import NavBar from "../navbar";
import {Box} from "@mui/material"
export default function HomePage(){
    return(
        <Box>
        <NavBar/>
          <HeroSection/>
          <TopAlbum/>
          <NewAlbum/>
          <Songs/>
          <FAQ/>
        <MusicPlayerBar/> 
        </Box>
    )
}
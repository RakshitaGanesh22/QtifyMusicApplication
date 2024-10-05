import NavBar from "../navbar";
import AlbumHeroSection from "../AlbumInfo";
import SongDisplay from "../SongsDisplay";
import MusicPlayerBar from "../playing";
import { Box } from "@mui/material";
export default function ArtistPage(){
    return(
        <Box>
            <NavBar/>
            <AlbumHeroSection/>
            <SongDisplay/>
            <MusicPlayerBar/>
        </Box>
    )
}
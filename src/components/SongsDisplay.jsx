import React, { useState, useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Box,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { dataProvider } from "../components/dataContext";

export default function SongDisplay() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { currentSong,playing,setPlaying } = useContext(dataProvider);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const currentSongs = currentSong.songs;
  const currentDisplay = currentSongs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function handleClick(item){
    setPlaying(item);
  }
  function SmallCard(item) {
    const { image, title, artists, durationInMs } = item;

    const artistString = artists.join(", ");

    const minutes = Math.floor(durationInMs / (60 * 1000)); // Correct conversion to minutes
    const secs = Math.floor((durationInMs % (60 * 1000)) / 1000); // Correct conversion to seconds
    let time = `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format the time as mm:ss

    return (
      <TableRow onClick={()=>handleClick(item)} key={title} sx={{ backgroundColor: "#121212", borderBottom: "1px solid white", "&:hover":{cursor:"pointer"} }} >
        <TableCell sx={{ display: "flex", gap: "1rem", alignItems: "center" }} >
          <Box component="img" src={image} alt="Song image" height={60} width={60} sx={{ borderRadius: "0.2rem" }} />
          <Typography>{title}</Typography>
        </TableCell>
        <TableCell>{artistString}</TableCell>
        <TableCell>{time}</TableCell>
      </TableRow>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#121212", padding: "2rem" }}>
      <TableContainer component={Paper}>
      <TablePagination
        component="div"
        count={currentSongs.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50]}
        sx={{ backgroundColor: "#1e1e1e", color: "white" }}
      />
        <Table sx={{ minWidth: 650 }} aria-label="songs-table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1e1e1e" }}>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Artists</b></TableCell>
              <TableCell><b>Duration</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentDisplay.map((item) => SmallCard(item))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

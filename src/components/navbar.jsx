import {
    AppBar, Toolbar, Button, IconButton, Typography, Box, useMediaQuery,
    useTheme, Avatar, Autocomplete, TextField, Card, CardMedia, MenuItem, Menu,
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import SearchIcon from '@mui/icons-material/Search';
  import { useState, useContext, useEffect } from "react";
  import logo from "./assets/logo.png";
  import { dataProvider } from "../components/dataContext";
  import Modal from "./modal";
  
  export default function NavBar() {
    const { newAlbum, TopAlbum, modalOpen, setModalOpen, currentSong, setCurrentSong } = useContext(dataProvider);
    const Songs = [...TopAlbum, ...newAlbum];
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [openMenu, setOpen] = useState(null);
    const [currentSearch, setCurrent] = useState(null);  // Set the current search as an object instead of a string
  
    const handleClose = () => setOpen(null);
    const handleMenuOpen = (event) => setOpen(event.currentTarget);
  
    function handleSearch() {
        setCurrentSong([]);
      if (currentSearch) {
        
        const currentData = Songs.filter((item) => item.title === currentSearch.title);
        setCurrent(null);
        if (currentData.length>0){
            setCurrentSong(currentData);
            console.log(currentSong);
        }
        
        
      }
      else{
        window.alert("No Such album exsists")
    }
    }
  
    useEffect(() => {
      if (currentSong) {
        console.log(currentSong);
      }
    }, [currentSong]);
  
    function Manual() {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: "15vw" }}>
          <Box sx={{ display: "flex" }}>
            <Autocomplete
              options={Songs}
              sx={{ width: "40vw", backgroundColor: "#fff", borderRadius: "0.5rem", input: { color: "#000" } }}
              getOptionLabel={(option) => option.title}
              onChange={(event, newValue) => setCurrent(newValue)} 
              renderOption={(props, option) => (
                <Box component="li" {...props} key={option.id} sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}>
                  {CardMaker(option)}
                </Box>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Search Album" color="#000" placeholder="Search an album" sx={{ input: { color: "#000" }, '.MuiInputLabel-root': { color: "#000" } }} />
              )}
            />
            <IconButton
              sx={{ border: "1px solid black", padding: "0.9rem", borderRadius: "5px", backgroundColor: "#fff" }}
              onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Button onClick={() => { setModalOpen(true); setOpen(null) }} variant="h2" sx={(theme) => ({ width: "12vw", backgroundColor: theme.palette.background.default, fontWeight: "600", textAlign: "center", height: "55px", color: theme.palette.primary.main, letterSpacing: "0.1rem", borderRadius: "1rem" })}>Give Feedback</Button>
        </Box>
      )
    }
  
    const CardMaker = (props) => {
      const { slug, image, title, follows } = props;
  
      return (
        <Card sx={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", width: "100%", backgroundColor: "#121212" }}>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <CardMedia
              component="img"
              image={image}
              sx={{ height: "60px", width: "60px", borderRadius: "0.5rem" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h3" sx={{ fontWeight: "600" }}>{title}</Typography>
              <Typography variant="body">{slug}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h3">{follows}</Typography>
          </Box>
        </Card>
      );
    };
  
    return (
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", height: "10vh" }}>
          <IconButton>
            <Avatar src={logo} alt="logo" sx={{ height: "40px", width: "75px", borderRadius: "0px", objectFit: "contain" }} />
          </IconButton>
          {isSmallScreen ? (
            <Box>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ zIndex: "100" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={openMenu}
                open={Boolean(openMenu)}
                onClose={handleClose}
                sx={(theme) => ({ color: "#000", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "35%" })}
              >
                <MenuItem sx={(theme) => ({ width: "100vw", display: "flex", gap: "0px", alignItems: "center", })}>
                  <Autocomplete
                    options={Songs}
                    getOptionLabel={(option) => option.title}
                    onChange={(event, newValue) => setCurrent(newValue)}  // Handle value change
                    renderOption={(props, option) => (
                      <Box component="li" {...props} key={option.id} sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}>
                        {CardMaker(option)}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Search Album" color="#000" placeholder="Search an album" sx={{ input: { color: "#000" }, '.MuiInputLabel-root': { color: "#000" } }} />
                    )}
                    sx={{ width: "75vw" }}
                  />
                  <IconButton
                    sx={{ border: "1px solid black", padding: "0.9rem", borderRadius: "5px" }}
                    onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </MenuItem>
                <MenuItem>
                  <Button onClick={() => { setModalOpen(true); setOpen(null) }} variant="h2" sx={(theme) => ({ width: isSmallScreen ? "50vw" : "30vw", backgroundColor: theme.palette.background.default, fontWeight: "600", textAlign: "center", height: "55px", color: theme.palette.primary.main, letterSpacing: "0.1rem", borderRadius: "1rem" })}>Give Feedback</Button>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Manual />
          )}
        </Toolbar>
        <Modal />
      </AppBar>
    );
  }
  
import { dataProvider } from "../components/dataContext";
import { useContext, useState } from "react";
import { Snackbar, useTheme, IconButton, TextField, Button, Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal() {
  const { modalOpen, setModalOpen } = useContext(dataProvider);
  const [snackOpen, setSnackOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackOpen(false); // Only close the Snackbar, not the modal
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setSnackOpen(true); // Show the Snackbar
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    bgcolor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:"1000"
  };

  const formStyle = {
    height: isSmallScreen ? "70%" : "70%",
    width: isSmallScreen ? "70%" : "40%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "16px",
    borderRadius: "8px",
  };

  function FeedbackForm() {
    return (
      <Box component="form" sx={formStyle} onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Feedback</Typography>
          <IconButton onClick={handleModalClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField label="Full Name" margin="normal" fullWidth required sx={{
    input: { color: '#000' } 
  }}/>
        <TextField label="Email" margin="normal" fullWidth required sx={{
    input: { color: '#000' } 
  }}/>
        <TextField label="Subject" margin="normal" fullWidth required sx={{
    input: { color: '#000' } 
  }}/>
        <TextField label="Description" margin="normal" fullWidth multiline rows={4} required sx={{
    input: { color: '#000' } 
  }}/>
        <Button type="submit" variant="contained" sx={{ marginTop: 2 ,fontWeight:"600" ,color:"#fff"}}>
          Submit Feedback
        </Button>
      </Box>
    );
  }

  return (
    <>
      {modalOpen && (
        <Box sx={modalStyle}>
          <FeedbackForm />
        </Box>
      )}
      <Snackbar
        
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        message="Thank you for your valuable feedback"
        sx={(theme)=>({backgroundColor:theme.palette.primary.main,color:"#fff"})}
        action={
          <IconButton size="small"onClick={handleSnackClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}

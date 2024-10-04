import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 576, 
      sm: 820,  
      md: 992,  
      lg: 1200, 
      xl: 1400, 
    },
  },
  palette: {
    primary: {
      main: "#34C94B",
    },
    background: {
      default: "#121212",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
  },
  typography: {
    body: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "21px",
      textAlign: "left",
      color: "#FFFFFF",
      "@media(max-width:820px)": {
        fontSize: "0.8rem",
        lineHeight: "15px",
      },
    },
    h1: {
      fontFamily: "Poppins",
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: "48px",
      textAlign: "center",
      color: "#ffffff",
      "@media(max-width:820px)": {
        fontSize: "1.8rem",
        fontWeight: 500,
        lineHeight: "35px",
      },
    },
    h2: {
      fontFamily: "Poppins",
      fontSize: "1.5rem",
      lineHeight: "30px",
      textAlign: "left",
      color: "#ffffff",
      "@media(max-width:820px)": {
        fontSize: "1.1rem",
        lineHeight: "25px",
      },
    },
    p: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "24px",
      textAlign: "left",
      color: "#FFFFFF",
      "@media(max-width:820px)": {
        fontSize: "0.8rem",
        fontWeight: 500,
        lineHeight: "18px",
      },
    },
    h3: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "24px",
      textAlign: "left",
      color: "#ffffff",
      "@media(max-width:820px)": {
        fontSize: "0.8rem",
        fontWeight: 500,
        lineHeight: "18px",
      },
    },
  },
});

export default theme;

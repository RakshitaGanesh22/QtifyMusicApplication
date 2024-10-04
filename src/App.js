import './App.css';
import { ContextProvider } from './components/dataContext';
import APIdata from './components/APIdta';
import theme from './components/Theme';
import { ThemeProvider } from '@mui/material';
import NavBar from "./components/navbar";
import { useEffect } from 'react';
import HeroSection from './components/Herosection';
import CommonCard from "./components/commonCard";
import TopAlbum from "./components/TopAlbum";
import NewAlbum from "./components/newAlbum";
import FAQ from "./components/FAQ";
import Songs from "./components/songs"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
      <APIdata />
        <div className="App">
          <NavBar/>
          <HeroSection/>
          <TopAlbum/>
          <NewAlbum/>
          <Songs/>
          <FAQ/>
        </div>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;

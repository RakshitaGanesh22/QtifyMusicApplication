import './App.css';
import { ContextProvider } from './components/dataContext';
import APIdata from './components/APIdta';
import theme from './components/Theme';
import { ThemeProvider } from '@mui/material';
import HomePage from "./components/pages/Homepage";
import ArtistPage from "./components/pages/artistpage";
import { useEffect } from 'react';
import AlbumHeroSection from "./components/AlbumInfo.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SongDisplay from "./components/SongsDisplay.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
      <APIdata />
        <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/music" element={<ArtistPage/>} />
        </Routes>
        </Router>
        </div>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;

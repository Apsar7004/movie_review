
import './App.css';
import {Routes,Route} from "react-router-dom";
import Register from './Register';
import Addmovie from './Addmovie';
import Login from './Login';
import Portal from './Portal';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movies';
import Paper from "@mui/material/Paper"
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useState } from 'react';
import Video from './Video';
import EditMovie from './EditMovie';

function App() {

  const [mode,setmode] = useState('light')
    const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
  
    <div className="App">
        <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh", borderRadius:"0%"}} elevation={9}>
   
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/portal" element={<Portal mode={mode} setmode={setmode}/>}>
              <Route path='Home' element={<Home />} />
              <Route path="addmovie" element={<Addmovie/>}/>
              <Route path="movie" element={<Movie />}/>
              <Route path="view/:id" element={<Video />} />
              <Route path="edit/:id" element={<EditMovie />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        </Paper>
        </ThemeProvider>
    </div>
  );
}

export default App;

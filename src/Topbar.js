import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useNavigate } from 'react-router-dom';




export default function Topbar({mode,setmode}) {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
        <Button color='inherit' onClick={()=>navigate("/portal/home")}>Home</Button>
        <Button color='inherit' onClick={()=>navigate("/portal/movie")}>Movies</Button>
        <Button color='inherit'  onClick={()=>navigate("/portal/addmovie")}>Addmovies</Button>
  
        <div style={{marginLeft:"40%",display:"flex",alignItems:"center"}}  onClick={()=>{setmode(mode === 'dark' ? "light" : "dark")}}>
        {mode === 'dark' ?<Brightness4Icon /> : <Brightness7Icon />} 
        <Button  color='inherit'>{mode === 'dark' ? "Light" : "Dark"}mode</Button>
        </div>
        
          <Button style={{marginLeft:"25px"}} color="inherit" onClick={()=>navigate("/login")}>Login</Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
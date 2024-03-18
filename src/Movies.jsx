import React, { useEffect, useState } from "react";

import Counter from "./Counter";
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from '@mui/icons-material/Delete';
import {api} from "./global"

function Movi({element,getmovies}){
    let [show,setshow] = useState(false)
    let navigate = useNavigate()

    function deletecomponent(id){
     
        fetch(`${api}/delete/${id}`,{
            method:"DELETE"
        })
        .then(()=>{getmovies()})
        .then(()=>alert("this movie is deleted"))
        
    }
 
    return(
        <div className="movie-container">
        <img className="movie-poster" src={element.poster} alt="as" />
        <div className="movie-spec">
            <h2 className="movie-name">{element.name}</h2>
            <IconButton color="primary" aria-label="show description" onClick={()=>{setshow(!show)}}>
          {show ?  <ExpandLessIcon />:<ExpandMoreIcon /> }
            </IconButton>
           <IconButton color="primary" aria-label="show description" onClick={()=>{navigate(`/portal/view/${element._id}`)}}>
            {<InfoIcon />}
            </IconButton>
            
            <h3 className="movie-rating">⭐{element.rating}</h3>
        </div>
       

        {show ? <p className="movie-summary">{element.summary}</p> : null }
    <div className="card-end">
        <Counter  />
      <div>
        <IconButton
        sx={{marginLeft:"auto"}}
        aria-label="editMovie"
        onClick={()=>navigate(`/portal/edit/${element._id}`)}>
            <EditIcon color="secondary"/>
        </IconButton>
        <IconButton
        sx={{marginLeft:"auto"}}
        aria-label="editMovie"
        onClick={()=>{deletecomponent(element._id)}}>
            <DeleteIcon color="secondary"/>
        </IconButton>
        </div>
        </div>
        </div>
    )
}

function Movie(){

    let [data,setdata] = useState([])
    const getmovies=()=>{
        fetch(`${api}/get`,{
            headers:{"backend-token":localStorage['backend-token']}
        }).then((das)=>das.json())
        .then((da)=>{setdata(da)
        console.log(da)})
       
    } 

    useEffect(()=>{
        getmovies();
    },[])

    return(
        <div className="movie_card">
        {data.map((element,index)=>(
            <Movi element={element} key={index} getmovies={getmovies}/>
    ))}
    </div>
        
    )
}

export default Movie;

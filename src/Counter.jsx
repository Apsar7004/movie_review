import React, { useState } from "react";
import { Badge, IconButton } from '@mui/material';

function Counter(){
    let [like,setlike] = useState(0);
    let [dislike,setdislike] = useState(0);
    
    return (
<div style={{marginBottom:'15px'}}>
    <IconButton color="primary" aria-label="like" onClick={()=>{setlike(like+1)}} >
    <Badge badgeContent={like} color="primary">
    👍
</Badge>
   
    </IconButton>
    <IconButton color="error" aria-label="dislike"onClick={()=>{setdislike(dislike+1)}} >
        <Badge badgeContent={dislike} color="error">
        👎
</Badge>
    </IconButton>
    
</div>
    )
}

export default Counter;
import React from 'react'
import './Sidebar.css'
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon fontSize='large'/>} className='sidebar__compose'>Compose</Button>
    </div>
  )
}

export default Sidebar
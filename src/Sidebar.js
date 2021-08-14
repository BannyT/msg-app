import React from 'react'
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core"
import { DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function Sidebar() {
  return (
    <div className="side-bar">
          <div className="sidebar-header">
            <Avatar/>
             <div className="header-right">

             </div>
          </div>    
    </div>
  )
}

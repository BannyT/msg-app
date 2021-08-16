import React from 'react'
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core"
import { DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SidebarChats from './SidebarChats';

export default function Sidebar() {
  return (
    <div className="side-bar">
          <div className="sidebar-header">
            <Avatar className="top-avatar"/>
             <div className="header-right">
               <IconButton>
                <DonutLarge/>
               </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>   
             </div>
          </div> 
          <div className="sidebar-search">
              <div className="search-container">
                  <SearchIcon/>
                  <input/>
              </div>
          </div>
          <div className="chat-head">
             <h2>Add New Chat</h2>
          </div>
         {/* create a div here and give it a class name of sidebar-chats */}
           <div className="sidebar-chats">
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
           </div>
    </div>
  )
}

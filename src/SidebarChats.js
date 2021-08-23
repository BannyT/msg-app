import React from 'react'
import "./SidebarChats.css"
import {Avatar, IconButton} from "@material-ui/core"
import {Link} from "react-router-dom";

export default function SidebarChats({chatname,id}) {
  return (
    <Link to={`/rooms/${id}`} className="sidebar_link">
    <div className="chats"> 
      <Avatar className="avat"/>
      <div className="chats-info">
          <h2>{chatname}</h2>
          <p>Hello guys whtsapp</p>
      </div>   
    </div>
    </Link>
    
  )
}

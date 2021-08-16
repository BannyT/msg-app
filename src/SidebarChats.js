import React from 'react'
import "./SidebarChats.css"
import {Avatar, IconButton} from "@material-ui/core"

export default function SidebarChats() {
  return (
    <div className="chats"> 
      <Avatar className="avat"/>
      <div className="chats-info">
          <h2>Message Header</h2>
          <p>Hello guys whtsapp</p>
      </div>   
    </div>
  )
}

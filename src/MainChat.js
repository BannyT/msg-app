import React from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import "./MainChat.css"
import { DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function MainChat() {
  return (
    <div className="chat-field">
        <div className="message-header">
           <Avatar/>
            <div className="header-info">
               <h3>message Header</h3>
               <p>Last seen message and time</p>
            </div>
            <div clasName="message-right"> 
               <IconButton>
               <AccountBoxIcon/>
               </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>    
            </div>
        </div>
     {/* create a div here and give is a class name message body */}
         <div className="message-body">
                <p className="chat-message">Aug 1, 2021 - Explore Pankaj Gupta's board "WhatsApp wallpaper", followed by 260 people on Pinterest. See more ideas about wallpaper, iphone wallpaper <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">Aug 1, 2021 - Explore Pankaj Gupta's board "WhatsApp wallpaper", followed by 260 people on Pinterest. See more ideas about wallpaper, iphone wallpaper<br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">Aug 1, 2021 - Explore Pankaj Gupta's board "WhatsApp wallpaper", followed by 260 people on Pinterest. See more ideas about wallpaper, iphone wallpaper <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">whats up people here <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">whats up people here <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">whats up people here <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">whats up people here <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">whats up people here <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">Aug 1, 2021 - Explore Pankaj Gupta's board "WhatsApp wallpaper", followed by 260 people on Pinterest. See more ideas about wallpaper, iphone wallpaper<br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">whats up people here <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">Aug 1, 2021 - Explore Pankaj Gupta's board "WhatsApp wallpaper", followed by 260 people on Pinterest. See more ideas about wallpaper, iphone wallpaper<br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">Aug 1, 2021 - Explore Pankaj Gupta's board "WhatsApp wallpaper", followed by 260 people on Pinterest. See more ideas about wallpaper, iphone wallpaper <br/>
                    <small className="time">4days ago</small>
                </p>
                <p className="chat-message">whats up people here <br/>
                    <small className="time">4days ago</small>
                </p>
         </div> 
         <div className="message-footer">
             <form>
                 <input/>
                 <button>Send Message</button>
             </form>
         </div> 
    </div>
  )
}

import React,{useState,useEffect} from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import "./MainChat.css"
import { DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useParams} from "react-router-dom";
import db from "./firebase"
import firebase from 'firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useStateValue} from "./StateProvider"

export default function MainChat() {
    const {roomId} =useParams()
    const [message,setMessage]=useState('')
    const [messages,setMessages]=useState([])
    const [{user}]=useStateValue()

    //fuction to send messages
    const sendMessage =(e)=>{
        e.preventDefault();
        db.collection("Rooms").doc(rommId).collection('messages').add({
            text:message,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimesStamp() 

        }).catch((e)=>toast.error(e.message))
       toast.success('message sent successfully')
       setMessage('')
    }

  //function to retrive messages from thr db
   useEffect(()=>{
        if(roomId){
            db.collection('Rooms').doc(roomId).collection('messages').orderby('timestamp','asc').onSnapshot(snap=>{
                setMessages(snap.docs.map(doc=>doc.data()))
            })
        }
   },[])

  return (
    <div className="chat-field">
        <ToastContainer />
        <div className="message-header">
           <Avatar/>
            <div className="header-info">
               <h3>message Header</h3>
               <p>Last seen message and time</p>
            </div>
            <div className="message-right"> 
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
                  {messages.map((msg)=>(
                    <p className="chat-message">{msg.text}<br/>
                         <small className="time">4days ago</small>
                     </p>
                  ))

                  }
                
      
         </div> 
         <div className="message-footer">
             <form>
                 <input  value={message} onChange={(e)=>setMessage(e.target.value)}   />
                 <button onClick={sendMessage}>Send Message</button>
             </form>
         </div> 
    </div>
  )
}

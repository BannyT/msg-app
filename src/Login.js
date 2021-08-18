import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="login-container">
            <img  src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
            <div className="login-text">
                 <h2>Sign in with us</h2>
            </div>
            <button>SignIn With Google</button>
        </div>
      
    </div>
  )
}

import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="login-container">
            <img  src="https://www.google.com/search?q=phone+images&sxsrf=ALeKk01yq_J2p0P02FVpQK5Eyui556pYDg:1629199611468&tbm=isch&source=iu&ictx=1&fir=8QPCv9tCQher6M%252C_VD92FxpQM8dLM%252C_&vet=1&usg=AI4_-kRX0eaXySQqL8DZEtOovg34YnUCog&sa=X&ved=2ahUKEwjw4e_A-bfyAhXSA2MBHSQzBfkQ9QF6BAgOEAE#imgrc=8QPCv9tCQher6M"/>
            <div className="login-text">
                 <h2>Sign in with us</h2>
            </div>
            <button>SignIn With Google</button>
        </div>
      
    </div>
  )
}

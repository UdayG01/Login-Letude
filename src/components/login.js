import React from "react"
import FormField from "./form_field"
import Circle from "./circle"
import { Link } from "react-router-dom"

export default function LogIn() {
  return(
      <div className="Login_div">
      <h1>Login</h1>
      <p>Sign in to continue</p>
          <div className="form_div">
            <Circle id="circle1"/>
            <Circle id="circle2"/>          
            <form>
              <FormField
                type = "text"
                title = "EMAIL"
                placeholder = "hello@reallygreatsite.com"
              />
              <FormField
                type = "password"
                title = "PASSWORD"
                placeholder = "********"
              />
              <input type="submit" name="submit" className="submit" value="Log In"/>

              <div>
              <p>Forgot Password?</p>
              <p><Link to="/" className="link">Sign Up</Link>   !</p>
              </div>
            </form> 
          </div> 
      </div>
    )
}
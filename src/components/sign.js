import React from "react"
import FormField from "./form_field"
import Circle from "./circle"
import { Link } from "react-router-dom"

export default function SignUp() {
  return(
      <div className="Login_div">
      <h1>Create new Account</h1>
      <p>Already registerd? <Link to="/login" className="link">Log in here.</Link></p>
          <div className="form_div">
            <Circle id="circle1"/>
            <Circle id="circle2"/>          
            <form>
              <FormField
                type = "text"
                title = "NAME"
                placeholder = "Jiara Martins"
              />
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
              <FormField
                type = "date"
                title = "DATE OF BIRTH"
                placeholder = "Select"
              />
              <input type="submit" name="submit" className="submit" value="Sign Up"/>
            </form> 
          </div> 
      </div>
    )
}
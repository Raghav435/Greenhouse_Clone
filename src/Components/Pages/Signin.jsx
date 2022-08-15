import { Container, Box, Img, Button  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "../../Styles/Signin.css"
import axios from "axios";

export default function Signin() {

    const [UnameOrEmail, setUnameOrEmail] = useState("");
    const [password, setpassword] = useState("");
  
    const user = {
      email: "test@test.com",
      username: "test123",
      password: "123456"
    };
    const handlesubmit = (e) => {
      e.preventDefault();
  
      if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
        if (password === user.password) {
          console.log("User Loged In");
        } else {
          console.log("wrong password");
        }
      } else {
        console.log("You Signed in");
        alert("Signin Success")
      }
    };
   
  return (
    <Container>
        <div className='signin_main'>
            <div className='signin_baground_img'></div>
            <div className='signin_right'>
                <Img
                src='https://recruiting.cdn.greenhouse.io/assets/sessions/iconGhr-46ff84da0055c0a9c2fb059555057583cbda14599c08baf319475bc337a82543.png'
                alt='signin_img'
                />
                <h1>Let's start hiring</h1>
                <form className='signin_form' onSubmit={handlesubmit}>
                  <div className="form-group">
                    <label className='signin_username' htmlFor="Email or UserName">Email or username</label>
                    <input
                        className="signin_input"
                        type="text"
                        placeholder="email or username"
                        required
                        value={UnameOrEmail}
                        onChange={(e) => setUnameOrEmail(e.target.value)}
                      />
                  </div>
                  <div className="form-group">
                    <label className='signin_password' htmlFor="Password">Password</label>
                    <input
                      type="Password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      className="signin_input"
                    />
                  </div>
                  <button className='signin_button' type="submit">Log in</button>
                </form>
            </div>
        </div>
    </Container>
  )
}

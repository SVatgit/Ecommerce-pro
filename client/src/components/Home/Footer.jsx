import { Box,Typography,styled } from '@mui/material';
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {Link} from "react-router-dom";
import LoginDialog from '../login/Logindialog';





const Container = styled(Box)
`
background: pink;
height:300px;

`
const Footer = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
}
  return (
    <>
  <div>
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#DDFFBC" }}
    >
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#263A29" }}>
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div style={{display:"flex", flexDirection: "row",  justifyContent:"space-between",marginLeft:"20px"}}> 
          <FacebookIcon/>
          <TwitterIcon/>
            <GoogleIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
           <GitHubIcon/>

        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5" >
          <div className="row mt-3" >
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
              <h6 className="text-uppercase fw-bold" >Company name</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#263A29", height: 2 }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{color:"#263A29"}}>
              <h6 className="text-uppercase fw-bold"style={{color:"#263A29"}}>Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#263A29", height: 2 }}
              />
              <p>
                <a href="#!" style={{color:"#263A29",textDecoration:"none"}}>
                Grocery
                </a>
              </p>
              <p>
                <a href="#!" style={{color:"#263A29",textDecoration:"none"}}>
                  Fashion
                </a>
              </p>
              <p>
                <a href="#!" style={{color:"#263A29",textDecoration:"none"}}>
                  Electronics
                </a>
              </p>
              <p>
                <a href="#!" style={{color:"#263A29",textDecoration:"none"}}>
                  Toys 
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >
              <h6 className="text-uppercase fw-bold" >Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#263A29", height: 2 }}
              />
              <p>
                <a style={{color:"#DDFFBC",textDecoration:"none",cursor:"pointer"}} onClick={() => openDialog()}>
                  Your Account
                </a>
              </p>
              <p>
                <Link to="/about" style={{color:"#DDFFBC",textDecoration:"none"}}>
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/contact"style={{color:"#DDFFBC",textDecoration:"none"}} >
                  Contact Us
                </Link>
              </p>
              <p>
                <Link to ="/help"style={{color:"#DDFFBC", textDecoration:"none"}} >
                  Help
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{color:"#263A29"}}>
              <h6 className="text-uppercase fw-bold" style={{color:"#263A29"}}>Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
              <HomeIcon/> India, Prayagraj 10012, UP
              </p>
              <p>
                <EmailIcon/> info@example.com
              </p>
              <p>
                <PhoneIcon/> +91 234567885
              </p>
              <p>
                <i className="fas fa-print mr-3" style={{color:"#263A29"}}/> +91 234567885
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#263A29"}}>
        © 2023 Copyright:
      </div>
      <LoginDialog open={open} setOpen={setOpen} />
    </footer>
  </div>
</>

  
  
  
  )
}

export default Footer;


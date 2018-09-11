import React, { Component } from 'react';
import './footer.css';
import fb from './img/fb.png';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';
import youtube from './img/youtube.png';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 


import './header.css';


class Footer extends Component {

 
  render() {
    return (
      
      
      <div className="text-center container-fluid header">
            <h2>2018 KNOWPIA</h2>
            <label>By Using this platform , you agree to the  </label> <a href="/TermsCondition"> Terms of Use</a>
            <div className="footerLink">
              <a href="/about">About</a>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<a href="/Work">How it Works</a> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<a href="/Privacy">Privacy</a>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <a href="/ContactUS">Contact</a>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <a href="#">FAQ</a> 
            </div>
        <img src={fb} className="social-icon"/><img src={twitter} className="social-icon"/> <img src={instagram} className="social-icon"/>  <img src={youtube} className="social-icon"/>
            
      </div>
   
    
    );
  }
}

export default Footer;

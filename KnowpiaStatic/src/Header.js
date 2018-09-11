import React, { Component } from 'react';
import knowpia from './knowpia_logo.svg';
import './header.css';
import './App.css';
import notification from './img/notification.png';
import edit from './img/edit.png';
import Pedia from './Pedia';
import user from './img/user.png';


class Header extends Component {
  render() {
    return (
     
      <div className="container-fluid header">
          <div className="row">
              <div className="col-md-2">
                <img src={knowpia} className="imglogo" alt="logo"></img>
              
              </div>
              <div className="col-md-3">

                      
                      <ul className="navbar-nav ml-auto">
                       
                          <a href='/Pedia'><div class="d-inline">Pedia</div></a>
                          <a href="/blog"><div class="d-inline">Blog</div></a>
                          <a href="/work"> <div class="d-inline">How it Works</div></a>
                          
                       
                        
                      </ul>
                    

              </div>
              <div className="col-md-2">

                  <div className="search-box">
                  
                      <input type="text" name="search" placeholder="Search.." className="form-control"></input>
                  </div>  

              </div>
              <div className="col-md-3">

                 
                     <img src={edit} alt="" className="header-icon"/>
                  
                     <img src={notification} alt=""  className="header-icon"/>
                     <img src={user} alt="" className="header-icon"/>  
                    
              </div>
              <div className="col-md-2">
                      <h3 className="lang-Drapdown">EN</h3>
              </div>
          </div>
          

      </div>
    
    );
  }
}

export default Header;

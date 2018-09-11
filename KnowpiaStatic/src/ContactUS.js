import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './ContactUS.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <h1 className="text-center top-Margin">
              Contact US
          </h1>
          <hr/>
        
          <form action="#" className="form">
              <div className="form-group">
                <div className="row">
               
                      <div className="col-md-6 col-md-offest-3 contact-us">
                          <div className="form-group">
                              <label>Full Name : </label>
                              <input type="text" className="form-control"></input>
                                
                          </div>
                          <div className="form-group">
                              <label>Email : </label> 
                              <input type="text" className="form-control"></input>
                                
                          </div>
                        
                          <div className="form-group">
                              <label>Comments : </label>
                              <textarea rows='10' cols="60" className="form-control"></textarea>
                                
                          </div>
                          <div className="form-group pull-right">
                              
                             <button type="button" name="submitComment" className="btn btn-info  btn-md">Submit</button>
                                
                          </div>

                      </div>
                    
                          
                  
            
              </div>
            </div>

          
          </form>
         
            
        
        
      </div>
    );
  }
}

export default App;

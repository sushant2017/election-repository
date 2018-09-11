import React, { Component } from 'react';

import './App.css';

import imgone from './knowpia_team/10.jpg';
import imgtwo from './knowpia_team/11.jpg';
import imgthree from './knowpia_team/12.png';
import imgfour from './knowpia_team/13.jpg';
import imgfive from './knowpia_team/14.jpg';
import imgsix from './knowpia_team/16.jpg';
import imgseven from './knowpia_team/18.jpg';

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
            <h2>About US</h2>

            <hr/>
              
            <div class="container">
                <div className="text-left">
                      <h3>OUR MISSION</h3>
                      <hr/>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                </p>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>

                 <div className="col-md-3">
                      <div className="value">
                          <h2>Value 1</h2>
                      </div>
                 </div>
                 <div className="col-md-3">
                      <div className="value">
                         <div className="hid-box">
                            <h2>Value 1</h2>
                         </div>
                      </div>
                  
                  </div>
                  <div className="col-md-3">
                       <div className="value">
                         <h2>Value 1</h2>
                       </div>
                  </div>
                  <div className="col-md-3">
                        <div className="value">
                            <h2>Value 1</h2>

                        </div>
                  </div>

                  </div>

                  <h2 className="exeteam">Board | Executive Team </h2>

                <div className="container">
                  <div className="col-md-3 board">
                       <img src={imgone} alt=""/>
                  </div>


                  <div className="col-md-3 board">
                       <img src={imgtwo} alt=""/>
                  </div>
                  
                  <div className="col-md-3 board">
                       <img src={imgthree} alt=""/>
                  </div>
                  
                  <div className="col-md-3 board">
                      <img src={imgfour} alt=""/>
                  </div>




            </div>

            <div className="container col-md-offset-2 teamboard">
                  <div className="col-md-3 board">
                       <img src={imgfive} alt=""/>
                  </div>


                  <div className="col-md-3 board">
                       <img src={imgsix} alt=""/>
                  </div>
                  
                  <div className="col-md-3 board">
                       <img src={imgseven} alt=""/>
                  </div>
                  
                  



            </div>


                   

                   
           

      </div>
    );
  }
}

export default App;

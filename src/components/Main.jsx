
import React, { Fragment } from 'react';


class Main extends React.Component{

    render(){
        return(
            <Fragment>

        {/* <!-- <div id="main"> --> */}
    <div id="main">
      
      <div className="container-fluid" id="content">
          <div className="squares square1"></div>
          <div className="squares square2"></div>
          <div className="squares square3"></div>
          <div className="squares square4"></div>
          <div className="squares square5"></div>
          <div className="squares square6"></div>
          <div className="squares square7"></div>
    
          
          <div className="container inner-container ">
              <div className="row second-inner">
                  <div className="col-lg-12">

                          <div className="card-register">
                              <div className="card-header">
                                {/* <!-- <img className="card-img" src="Square.jpg" alt="Card image"> --> */}
                                  <h4 className="card-title" id="card-title" style={{color:"#dadada",backgroundColor:"transparent", textAlign:"center"}}>&nbsp;ROBOTiX Club</h4>
                              </div>
                              <div className="card-body">
                                  <h4 className="text-primary" style={{color:"#e14eca", textAlign:"center"}}>National Institue of Technology, Raipur</h4>
                                  <p className="text-white" style={{textAlign:"center"}}>We, Robotix Club of NIT Raipur, constitute enthusiasts and experts in the field of
                                    robotics who deal with the application of robotics in real life situations....</p>
                                  <div className="btn-wrapper">
                                    <div className="button-container">
                                      <a rel="noreferrer" target="_blank" href="https://www.instagram.com/robotix_nitrr" className="icon">
                                        <i className="fa fa-instagram fa-2x" aria-hidden="true"></i><span className="tooltiptext">Follow Us</span>
                                      </a>
                                      <a rel="noreferrer" target="_blank" href="https://www.facebook.com/nitrrobots16/" className="icon">
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i><span className="tooltiptext">Follow Us</span>
                                      </a>
                                      <a rel="noreferrer" target="_blank" href="https://in.linkedin.com/company/robotix-club-nit-raipur" className="icon">
                                        <i className="fa fa-linkedin  fa-2x" aria-hidden="true"></i><span className="tooltiptext">Follow Us</span>
                                      </a>
                                      <a rel="noreferrer" target="_blank" href="mailto:robotixclub@nitrr.ac.in" className="icon">
                                        <i className="fa fa-envelope  fa-2x" aria-hidden="true"></i>
                                        <span className="tooltiptext">Mail Us</span>
                                      </a>
                                    </div>
                                  </div>
                              </div>
                             
                          </div>
                  </div>   
              </div>
          </div>
      </div>
    </div>

            </Fragment>
        );
    }
}

export default Main;
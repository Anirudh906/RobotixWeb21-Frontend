import React, { useState, useEffect, useRef, Fragment } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import { Helmet } from "react-helmet";
import Logo from "../images/RobotixLogo.png";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaR = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: myRef.current,
          backgroundColor: 0x171941,
          color: 0xc1cc5f
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef}>
      <Fragment>
        {/* <!-- <div id="main"> --> */}

        <div className="container-fluid" id="content">
          {/* <div className="squares square1"></div>
          <div className="squares square2"></div>
          <div className="squares square3"></div>
          <div className="squares square4" style={{zIndex:"2"}}></div>
          <div className="squares square5"></div>
          <div className="squares square6"></div>
          <div className="squares square7"></div>
      */}

          <div className="container inner-container ">
            <div className="row second-inner">
              <div className="col-lg-12">
                <div className="card-register">
                  <div className="card-header">
                    {/* <!-- <img className="card-img" src="Square.jpg" alt="Card image"> --> */}
                    <h4
                      className="card-title"
                      id="card-title"
                      style={{
                        color: "#dadada",
                        backgroundColor: "transparent",
                        textAlign: "center",
                      }}
                    >
                      &nbsp;
                      <span className="header header--shadow header--pushDown">
                        R
                        <span>
                          <img
                            src={Logo}
                            style={{
                              height: "60px",
                              width: "60px",
                              position: "relative",
                              top: "-5px",
                            }}
                            alt="logo"
                          ></img>
                        </span>
                        BOTI
                        <span className="X" style={{ fontSize: "70px" }}>
                          X
                        </span>{" "}
                        Club
                      </span>
                    </h4>
                  </div>
                  <div className="card-body">
                    <h4
                      className="text-primary"
                      style={{ color: "#e19eca", textAlign: "center", fontWeight:"bold" }}
                    >
                      National Institute of Technology, Raipur
                    </h4>
                    <p className="text-white" style={{ textAlign: "center" }}>
                      We, Robotix Club of NIT Raipur, constitute enthusiasts and
                      experts in the field of robotics who deal with the
                      application of robotics in real life situations....
                    </p>
                    <div className="btn-wrapper">
                      <div className="button-container social-icons">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.instagram.com/robotix_nitrr"
                          className="icon"
                        >
                          <i
                            className="fa fa-instagram fa-2x"
                            aria-hidden="true"
                          ></i>
                          <span className="tooltiptext">Follow Us</span>
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.facebook.com/nitrrobots16/"
                          className="icon"
                        >
                          <i
                            className="fa fa-facebook-square fa-2x"
                            aria-hidden="true"
                          ></i>
                          <span className="tooltiptext">Follow Us</span>
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://in.linkedin.com/company/robotix-club-nit-raipur"
                          className="icon"
                        >
                          <i
                            className="fa fa-linkedin  fa-2x"
                            aria-hidden="true"
                          ></i>
                          <span className="tooltiptext">Follow Us</span>
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="mailto:robotixclub@nitrr.ac.in"
                          className="icon"
                        >
                          <i
                            className="fa fa-envelope  fa-2x"
                            aria-hidden="true"
                          ></i>
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
        <Helmet>
          <link
            rel="stylesheet"
            href="./assets/css/style_certificate.css"
          ></link>
        </Helmet>
      </Fragment>
    </div>
  );
};

export default VantaR;


import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from "react-bootstrap/Carousel";
import api from "../service.js";
import axios from "axios";

class Gallery extends React.Component{

componentDidMount(){

}

    render(){
        return (
          <Fragment>
            <div className="section">
              <div className="container cc">
                <div className="justify-content-between row">
                  <div className="slide_image_boots">
                    <Carousel interval={1000} className="carousel-inner">
                      <Carousel.Item className="carousel-item">
                        <img
                          className="d-block w-100"
                          src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="carousel-item">
                        <img
                          className="d-block w-100"
                          src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg"
                          alt="Second slide"
                        />
                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="carousel-item">
                        <img
                          className="d-block w-100 "
                          src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg"
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                    {/* <div className="col-sm-12">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                    {/* <ol className="carousel-indicators">
                          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                        </ol> */}
                    {/* <!-- Wrapper for slides --> */}
                    {/* <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="Photos/564835.jpg" alt=" "/>
                            <div className="carousel-caption">
                              <h2>Slide 1</h2>
                              <span>Nothing 1</span>
                            </div>
                          </div>
                          <div className="carousel=item">
                            <img src="Photos/6782429-cool-pokemon-backgrounds.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 2</h2>
                                <span>Nothing 2</span>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img src="Photos/cute-anime-wallpaper-widescreen-c3o.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 3</h2>
                                <span>Nothing 3</span>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img src="Photos/goku.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 4</h2>
                                <span>Nothing 4</span>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img src="Photos/cute-anime-wallpaper-widescreen-c3o.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 5</h2>
                                <span>Nothing 5</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Controls --> */}
                    {/* <a className="carousel-control-prev" href="#carousel-example-generic" role="button" data-slide="prev">
                          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-generic" role="button" data-slide="next">
                          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      
                      <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div> */}
                  </div>

                  {/* <!--remove till here--> */}
                  <div className="col-md-5">
                    <h1 className="profile-title text-left">Gallery</h1>
                    {/* <h5 className="text-on-back">02</h5> */}
                    <p className="profile-description text-left">
                      An artist of considerable range, Ryan — the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

            <Helmet>
              <link
                rel="stylesheet"
                href="../../public/assets/css/gallery.css"
              ></link>
              {/*   <link rel="stylesheet" href="./assets/css/mrao-design-page.css"></link>  */}
              {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"/>   */}
              <script
                src="https://code.jquery.com/jquery-1.12.4.min.js"
                integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ"
                crossorigin="anonymous"
                defer
              ></script>
              <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
                integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
                crossorigin="anonymous"
                defer
              ></script>
              <script
                type="text/JavaScript"
                src="../../public/assets/js/mrao-design.js"
                defer
              ></script>
            </Helmet>
          </Fragment>
        );
    }
}

export default Gallery;

import React, { Fragment } from 'react';




class Gallery extends React.Component{

  

    render(){
        return(
            <Fragment>


<div className="section">
        <div className="container">
            <div className="justify-content-between row">
                <div className="slide_image_boots">
                    <div className="col-sm-12">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                        </ol>
                      
                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner" role="listbox">
                          <div className="item active">
                            <img src="Photos/564835.jpg" alt=" "/>
                            <div className="carousel-caption">
                              <h2>Slide 1</h2>
                              <span>Nothing 1</span>
                            </div>
                          </div>
                          <div className="item">
                            <img src="Photos/6782429-cool-pokemon-backgrounds.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 2</h2>
                                <span>Nothing 2</span>
                            </div>
                          </div>
                          <div className="item">
                            <img src="Photos/cute-anime-wallpaper-widescreen-c3o.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 3</h2>
                                <span>Nothing 3</span>
                            </div>
                          </div>
                          <div className="item">
                            <img src="Photos/goku.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 4</h2>
                                <span>Nothing 4</span>
                            </div>
                          </div>
                          <div className="item">
                            <img src="Photos/cute-anime-wallpaper-widescreen-c3o.jpg" alt=" "/>
                            <div className="carousel-caption">
                                <h2>Slide 5</h2>
                                <span>Nothing 5</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Controls --> */}
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      
                      <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                </div>
                
                {/* <!--remove till here--> */}
                <div className="col-md-5">
                    <h1 className="profile-title text-left">Projects</h1>
                    <h5 className="text-on-back">02</h5>
                    <p className="profile-description text-left">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                    <div className="btn-wrapper pt-3">
                        <a href="#pablo" className="btn-simple btn btn-primary"><i className="tim-icons icon-book-bookmark"></i> Bookmark</a>
                        <a href="#pablo" className="btn-simple btn btn-info"><i className="tim-icons icon-bulb-63"></i> Check it!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


            </Fragment>

        );
    }
}

export default Gallery;

import React, { Fragment } from 'react';


class AboutUs extends React.Component{

    render(){
        return(
            <Fragment>

 

    {/* SQUARES ANIMATION  */}

    <div className="container-fluid" id="content">
    

    </div>

















      {/* <img className="card-img" src="images/Square.jpg" alt="Card image">  */}

      <div className="aboutcont">
        <div className="page-title-sim header header--shadow header--pushDown" style={{color:"white"}}>
          About Us
        </div>
        <br /> <br />
        <p style={{fontSize:"35px",color:"#1d8cf8",fontWeight:"bold", textAlign:"center"}}>Who are we ??</p>
        <br />
        <p>The Robotix Club of NIT Raipur is the perfect combination of innovators, contributors and experts in the
          field
          of Robotics. The club has been inspiring minds ever since its inception in 2014.
          The foundation of Robotix Club was laid by a group of enthusiastic and ardent students with a vision to
          promote
          the versatile field of robotics and it’s ever growing application in present time.
          We make sure that every student seeking the knowledge gets it .The club is guided by our esteemed faculty In
          charge Dr. Rajesh Doriya (Department of Information Technology) who makes sure there is proper functioning of
          the club.
        </p>
        <br /> <br />
        <p style={{fontSize:"35px",color:"#1d8cf8",fontWeight:"bold", textAlign:"center"}}>Our Vision</p>
        <p>Robotix Club NITRR strives to develop technological skills in the diverse field of mechatronics and robotics
          by
          transcending the theoretical knowledge into live application and providing live simple yet creative solution
          for
          real world complex problems.
          The club's focus has always been on student specific events and workshops to increase the reach of robotics in
          the college. Major part of the club has been involved with students as well as teachers working together as a
          cohesive unit.</p>

      


      </div>
   

    <div className="container-fluid" id="content">
     
      <div className="squares square8"></div>
      <div className="squares square3"></div>
      <div className="squares square9"></div>
      
      <section className="section section-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <h2 className="text-info"><strong>What do we do ??</strong></h2>
              <p className="text-white h5">Kick-starting its journey with a workshop on manual robotics to now providing
                insight to most advanced topics like Artificial Intelligence.
                <br/>The club has been through a remarkable journey and it continues to inspire the students to
                explore the discipline of Robotics.
                <br/>The club conducts regular workshops and competitions to advance robotics in college.
                <br/>The workshops include free workshops as well as paid workshops where students get to know
                everything, from the basics of robotics to advance mechanisms of robotics.
              </p><br/><br/>
            </div>

            <div className="col-lg-8 col-md-8 text-center">
              <h2 className="text-info"><strong>Our Domains</strong></h2>
              <ul className="nav nav-pills nav-pills-info align-items-center">
                <li className="nav-item h5">
                  <a className="nav-link" data-toggle="tab" href="#link1" >Public Relations &
                    Marketing</a>
                </li>
                <li className="nav-item h5">
                  <a className="nav-link" data-toggle="tab" href="#link2" >Sponsorship</a>
                </li>
                <li className="nav-item h5">
                  <a className="nav-link" data-toggle="tab" href="#link3">Graphic & Web Design</a>
                </li>
                <li className="nav-item h5">
                  <a className="nav-link" data-toggle="tab" href="#link4">Documentation</a>
                </li>
              </ul>
       
              <div className="card">
                <div className="card-body">
                  <div className="tab-content tab-space text-center">
                    <div className="tab-pane active h5" id="link1">
                      {/* <!--<h4 className="text-center text-info" ><strong>PR & Marketing</strong></h4>--> */}
                      This club has a very fine and responsible team of<br/> Public Relations & Marketing.<br/>
                      They are responsible for planning and organizing the events <br/>with attention to
                      public, financial and time constraints.<br/>
                      They book venues and schedule speakers, meet with clients<br/> and coordinate with them
                      regularly.
                    </div>
                    <div className="tab-pane  h5" id="link2">
                      {/* <!--<h4 className="text-center text-info" ><strong>Sponsorship</strong></h4>--> */}
                      Many people can sell, but not everyone is comfortable<br/> selling what doesn't
                      exist.<br/>
                      This club is lucky to have the members who have strong<br/> ideation sense, are
                      innovative and have speaking and<br/> conversational skills.
                      <br/>They have great interest in marketing and business world.
                    </div>
                    <div className="tab-pane h5" id="link3">
                      {/* <h4 className="text-center text-info" ><strong>Graphic & Web Design</strong></h4> */}
                      You can’t use up creativity.<br/> The more you use, the more you have.<br/>
                      It is said that Design is intelligence made visible.<br/>
                      Robotix club has a dedicated and creative<br/> team of members in this domain.
                    </div>
                    <div className="tab-pane h5" id="link4">
                      {/* <h4 className="text-center text-info" ><strong>Documentation</strong></h4> */}
                      It is said that the words can be like X-rays if you use them<br/> properly, they'll go
                      through anything.<br/>
                      You read and you're pierced.<br/>
                      So last but not the least, we have a magnificent and<br/> outstanding set of members in
                      documentation team who are responsible for all the excellent content.
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </section>
    </div>
   
    </Fragment>


    




        );
    }
}

export default AboutUs;

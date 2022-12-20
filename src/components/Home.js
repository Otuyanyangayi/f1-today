import React from "react";
import background from "../assets/audi.jpeg";
import f2 from '../assets/f2.jpg';
import f1 from '../assets/f1.jpg';
import './style.css';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";

import StandingsCard from "./StandingsCard";
import { NewsInfo, SideOfStandings, TeamStandings, WcStanding } from "../utils/data";
import SideOfStandingsCard from "./SideOfStandingsCard";
import NewsCard from "./NewsCard";
import { Footer } from "./Footer";
import BlueGrey from "./BlueGrey";
import TwitterCard from "./TwitterCard";

export default function Home() {

  return (
    <div>
      <nav class="navbar">
        <div class="max-width">
            
            <ul class="menu">
              <li> <img src={f1} alt="F1" width="80" height="40" /></li>
                <li><a href="#home" class="menu-btn">HOME</a></li>
                <li><a href="#news" class="menu-btn">NEWS</a></li>
                <li><a href="#drivers" class="menu-btn">DRIVERS</a></li>
                <li><a href="#teams" class="menu-btn">TEAM</a></li>
                <li><a href="#photos" class="menu-btn">PHOTOS</a></li>
                <li><a href="#results" class="menu-btn">RESULTS</a></li>
                <li><a href="#calender" class="menu-btn">CALENDER</a></li>
                <li><a href="#test" class="menu-btn">TEST SESSIONS</a></li>
                <li><a href="#search" class="menu-btn">SEARCH</a></li>
                <li><a href="#tickets" class="menu-btn">TICKETS</a></li>
            </ul>
            
        </div>
    </nav>
      <div className="float-container" id="home">
        <div className="float-child" style={{
          backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat"
          , backgroundSize: "cover", color: "white"
        }} >


          <div>
            <span className="home-span">Featured</span>
            <h2 className="home-h2">Audi torn on Engine <br></br> Deal for Red Bull <br></br> Racing</h2>

            <p>Toto Wolff has admitted supplying Red Bull with <br></br> engines
              could be "an attractive option" for Mecedes. It <br></br>
              is a significan't change...</p>
          </div>

        </div>
        <div className="float-child1">
          <h3 className="">Top Stories</h3>

          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  August 20,2015
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <ul style={{ color: "whitesmoke" }}>
                    <li ><a style={{ color: "black" }} href="#" >Vettel will do anything to 'annoy Mercedes'</a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Renault continued to work hard during summer break </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">A lap Spa-Francorchamps onboard with Rosberg </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Clamdown on starts 'step in right direction </a></li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  August 19,2015
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <ul style={{ color: "whitesmoke" }}>
                    <li ><a style={{ color: "black" }} href="#" >Vettel will do anything to 'annoy Mercedes'</a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Renault continued to work hard during summer break </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">A lap Spa-Francorchamps onboard with Rosberg </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Clamdown on starts 'step in right direction </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  August 18,2015
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <ul style={{ color: "whitesmoke" }}>
                    <li ><a style={{ color: "black" }} href="#" >Vettel will do anything to 'annoy Mercedes'</a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Renault continued to work hard during summer break </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">A lap Spa-Francorchamps onboard with Rosberg </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Clamdown on starts 'step in right direction </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="parent" >
        
    <div style={{width:"50%"}}>
      <div style={{display:"flex",flexDirection:"row",width:"100%",height:500}}>
      {
      SideOfStandings.map((item, index)=>(
        <SideOfStandingsCard key={index} image={item.image} description={item.description}/>
      ))
    }

      </div>
      <Row style={{padding:10}}>

        {
           NewsInfo.map((item, index)=>(
            <NewsCard key={index} description={item.description} sport={item.sport} image={item.image}/>

           ))
        }

      </Row>
      <Row>
      <div style={{width:"100%",backgroundColor:"white",border:"1px solid rgb(212, 212, 212)",padding:5,marginRight:0,}}>
              <BlueGrey thin={true} text="Standings Ad Space"/>
            </div>
      </Row>
    </div>


        <div style={{width:"50%"}}>
            <div style={{display:"flex",
        flexDirection:"row",

      }}>
        <div className="child" id="drivers" style={{ padding:0}}>
        <center><h5>WC Standings</h5></center>
          {WcStanding.map((item, index)=>(
            <StandingsCard key={index} image={item.image} name={item.name} teamName={item.teamName} points={item.points}/>
          ))}
        </div>

        <div className="child" id="teams" style={{ padding:0}}>
          <center><h5>Team Standings</h5></center>
          {TeamStandings.map((item, index)=>(
            <StandingsCard key={index} image={item.image} name={item.name} points={item.points}/>
          ))}
        </div>
        </div>
        <Row>
          <div className="child" >
            <div style={{width:"100%",backgroundColor:"white",border:"1px solid rgb(212, 212, 212)",padding:5,marginRight:0,}}>
              <BlueGrey thin={true} text="Standings Ad Space"/>
            </div>
            <div style={{width:"100%",backgroundColor:"white",border:"1px solid rgb(212, 212, 212)",marginRight:0,}}>
              <Row style={{border:"1px solid rgb(212, 212, 212)",padding:5}}>
              <BlueGrey thin={false} text="Standings Ad Space"/>

               <StandingsCard isUnderStanding={true} image={f2} name="Next Grand Prix"/>
               <h5>G.P Reports of Belgie</h5>
               <NewsCard  description={"Some Description coming here"}  image={f2}/>
               <BlueGrey thin={false} text="Standings Ad Space"/>

              </Row>
              <Row>

              <NewsCard  description={"Some Description coming here"}  image={f2}/>
              <TwitterCard first={true}/>
              </Row>
              <Row>
              <NewsCard  description={"Some Description coming here"}  image={f2}/>
              <TwitterCard/>
              </Row>
              <Row>
              <BlueGrey thin={false} text="Standings Ad Space"/>
              <TwitterCard/>
              </Row>
            </div>
          </div>
        </Row>
        </div>

    
    </div>
    <Footer/>
    </div>
  )
}
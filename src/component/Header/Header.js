import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import ContactLinks from '../ContactLinks';

const Ulback = () =>{
  document.getElementsByClassName("navbar_items").style.left = "0px";
}

const Header = () => {

  return (

    <>  
    
        
        <div className="header">
        <div className="navbar sp_bw">
          <NavLink to="/" className="navbar_logo">
            Prep<span>0.com</span>
          </NavLink>
          <input type="checkbox" id="click"/>
          <label for="click">
              <i id="headline" class="zmdic zmdi zmdi-view-headline"></i>
          </label>

          <div className="navbar_names">
            <label for="click">
            <ul className ="navbar_items" id="back_go">
              <div className="ulbox">
                  <div className="navbar_logo ulpagelogo ulcloser">
                    Prep<span>0.com</span>
                  </div>
                  <i className="ulcloser zmdi zmdi-close" onClick={Ulback}></i>
              </div>
              
              <NavLink to="/" className="header_navlinks"> HOMe </NavLink>
              <NavLink to="/aktu-quantum-books" className="header_navlinks">Quantum Zone</NavLink>
              <NavLink to="/previous-year-question-paper-btech-aktu" className="header_navlinks">Previous Years</NavLink>
              <NavLink to="/new-post" className="header_navlinks">Best YouTube Channels</NavLink>
              <NavLink to="/Projects" className="header_navlinks">Project Reports</NavLink>
              <NavLink to="/developer-roadmaps" className="header_navlinks">RoadMaps</NavLink>
              <NavLink to="/resume-maker-online" className="header_navlinks" >Resume Builder</NavLink>
              <NavLink to="/basic-interview-questions-and-answers" className="header_navlinks">Interview Preperation</NavLink>               
              <NavLink to="/handwritten-notes-pdf" className="header_navlinks">Hand NOtes</NavLink>
              <NavLink to="/Team" className="header_navlinks">TeaM</NavLink>
              <div className="header_medialinks">
                      <ContactLinks/>
              </div>
              
            </ul>
              </label>



          </div>
        </div>

        </div>

    
    
    </>
  )
}

export default Header;
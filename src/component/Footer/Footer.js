import React from 'react';
import './Footer.css'
import ContactLinks from '../ContactLinks';
import { NavLink, Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className="first">
                <ul className='fot_ul'>
                    <li className="foot_list"><span>What we Provide</span></li>
                    <NavLink to="resume-maker-online"><li className="foot_list">Resume Builder</li></NavLink>
                    <NavLink to="aktu-quantum-books"><li className="foot_list">Qantum Books Pdf</li></NavLink>
                    <Link to="developer-roadmaps"><li className="foot_list">RoadMaps</li></Link>
                    <NavLink to="handwritten-notes-pdf"><li className="foot_list">Hand Written Notes</li></NavLink>
                    <Link to="projects"><li className="foot_list">Projects</li></Link>
                    <NavLink to="/previous-year-question-paper-btech-aktu"><li className="foot_list">Exam Papers</li></NavLink>
                    <NavLink to="/basic-interview-questions-and-answers"><li className="foot_list">Interview Zone</li></NavLink>
                    <NavLink to="/new-post"><li className="foot_list">Best Youtube Channel</li></NavLink>
                </ul>
            </div>
            <div className="second">
            <ul className='fot_ul'>
                    <NavLink to="/"><li className="foot_list"><span>Newly Added</span></li></NavLink>
                    <NavLink to="/basic-interview-questions-and-answers"><li className="foot_list">Interview Preperation</li></NavLink>
                    <NavLink to="/companies/google"><li className="foot_list">Google Interview</li></NavLink>
                    <NavLink to="/data/dsa"><li className="foot_list">DSA Beginner Guide</li></NavLink>
                    <NavLink to="/companies/facebook"><li className="foot_list">How Facebook Hire</li></NavLink>
                    <NavLink to="/basic-interview-questions-and-answers"><li className="foot_list">Interview Tips</li></NavLink>
                </ul>                
            </div>
            <div className="third">
            <ul className='fot_ul'>
                    <li className="foot_list"><span>About US</span></li>
                    <NavLink to="/FaqPage"><li className="foot_list">FAQ</li></NavLink>
                    <NavLink to="/Contact"><li className="foot_list">Contact Us</li></NavLink>
                    <NavLink to="/Team"><li to="/Team" className="foot_list">Founder & Website Designer</li></NavLink>
                    <Link to='/Team' className="foot_list"><span>Utkarsh Gupta</span></Link>
                    <li className="foot_list">Email : 0preperation@gmail.com</li>
                </ul>

                

                <div className="footer_medialinks">
                    <NavLink to='/' ><img className="prep_logo_image" src="https://brep0.netlify.app/image/prep_logo.png"  loading="lazy"alt="prep0 logo png, logo prep0, blue logo prep0, prep 0 logo"/></NavLink>
                    <ContactLinks/>
                </div>
            </div>
            
        </div>
    
    
    
    </>
  )
}

export default Footer
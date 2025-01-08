import React from 'react';
import './Team.css';
import Team_profile from '../Images/profile.jpeg';
import ContactLinks from './ContactLinks'
import { Helmet } from 'react-helmet';


const Team = () => {
  return (
    <>


        <Helmet>

            <title>Team prep0</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="prep0 founder, utkarsh gupta, founder of prep0.com" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet>


        <div className="Team_Page">
            <div className="Team_heading"></div>
            <div className="Team_Photo">
                <img className="Profile" src={Team_profile} loading="lazy" alt="prep0 founder, founder of prep0, founder prep0"/>
            </div>
            <div className="Profile_details">
                <ul>
                    <h1>Founder : Utkarsh Gupta</h1>
                    <li>1:on:1 :: 9026966203</li>
                    <li></li>
                    <div className="Team_medialinks">
                        <ContactLinks/>
                    </div>
                    
                </ul>

                    <div className='about_section'>
                        <div className="about_data">
                            <p>
                            <span>Welcome to our website,</span> where we provide last-minute preparation notes and books for students and professionals. We understand the importance of being well-prepared for exams and how stressful it can be to find the right resources at the last minute. That's why we've created this platform to make it easy for you to access the information you need when you need it.
                            </p>
                            <br/>
                            <p>
                            <span>Our notes & books</span> are carefully curated by a team of experts with years of experience in their respective fields. They are designed to help you quickly and efficiently review the most important information, so you can feel confident going into your exam
                            </p>
                            <br/>
                            <p>
                            In addition to our notes and books, we also offer online study groups where you can connect with other students and review the material together. Our community of users is a great resource for getting answers to your questions and sharing study tips.
                            </p>
                            <br/>
                            <p>
                            Thank you for choosing our website for your last-minute preparation needs. We are dedicated to providing you with the resources and support you need to succeed. If you have any questions or feedback, <k>please don't hesitate to contact us</k>
                            </p>
                            <br/>
                            <p>
                            <span>Email us at : </span> 0preperation@gmail.com
                            </p>
                            <br/>
                            <p>
                                This Website is designed and developed by <k>Utkarsh GUpta</k>
                            </p>

                        </div>
                        
            
                        
                    </div> 

                    Connect With Me On

                    <a href="https://www.linkedin.com/in/utkarshg494"><i class="zmdii zmdikk zmdi zmdi-linkedin" alt="utkarsh gupta linkedin profile link, linkedin logo link png"></i></a>
            </div>
        
        
        
        </div>
            
    </>
  )
}

export default Team
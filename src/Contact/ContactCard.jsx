import React from 'react'
import Tilt from 'react-parallax-tilt';
import { Link, NavLink } from 'react-router-dom';

const ContactCard = (props) => {
  return (
    <>
    <div className="contact_container">
        <Tilt glareEnable="true" glare-max-opacity="0.7" >
            <div className='contact_card'>
                <div className="contact_content">
                    <h2>{props.sno ? props.sno : " prep0"}</h2>
                    <h3>{props.heading}</h3>
                    <br/>
                    <br/>
                    <br/>
                    <p>{props.data}</p>
                    {props.href ? <a href={(props.href)}>Apply</a> : " "}
                    {props.src ? <NavLink to={props.src}>{props.button}</NavLink> : ""}
                    
                </div>
            </div>                
        </Tilt>

            
    </div> 
    
    
    </>
  )
}

export default ContactCard
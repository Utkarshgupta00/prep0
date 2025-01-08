import React from 'react'
import './Contact.css'

import ContactCard from './ContactCard'
import { Helmet } from 'react-helmet'
const Contact = () => {
  return (
    <>   

    
            <Helmet>
            {/* <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2105585555520096" crossorigin="anonymous"></script>
            </head> */}
            <title>Contact Us</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="how to conatact prep0, founder of prep0, about prep0, what is prep0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet>  


    <h1 className="contact_heading">Contact Us</h1>
    <div className="new_banner1"></div>

    <div className="contact_page">
      <div className="tap_to_scroll">Tap To Scroll Up</div>
      <div className='contact_slides_flex'>
        <ContactCard
            heading ="About"
            data="prep0 is a web app based on react which provides a valuable resource for students who are looking for last-minute exam preparation. prep0 focus on providing high-quality, reliable information."
            button="Read More"
            src="/FaqPage"
        />
        <ContactCard
            heading ="Founder"
            data="Utkarsh Gupta is the developer, designer and founder of prep0, which contains last minute prep notes with proper guidance in any particular area, "
            button="Contact Me"
            src="/Team"
        />

      </div>




    </div>





 
    </>
  )
}



export default Contact
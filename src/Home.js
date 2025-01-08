import React from 'react'
import Quote from './component/Quote/Quote'
import Hero from './component/Hero/Hero';
import Roadmap from './Roadmap';
import HandNotes from './HandNotes';
import Story from './Story'
import InterviewPrep from './component/InterviewPrep/InterviewPrep';
import Qantum from './Qantum';

import Frequent from './Frequent';
import Faq from './Faq/Faq';
import Information from './Information/Information'
import Contact from './Contact/Contact';
import MovingBanner from './UseAnywhere/MovingBanner';
import { Helmet } from 'react-helmet';



const Home = () => {
  return (
    <>

        
        <Hero/>
        <Information/>
        <Quote/>
        <Roadmap/>
        <Story/>
        <HandNotes/>
        <Frequent/>
        <Contact/>              
        <Faq/>
        <MovingBanner/> 



        <Helmet>
            <title>HOMe- PDF Study Materials free download</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="aktu quantum books for mechanical engineering, electrical engineering, computer science and engineering,civil engineering" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet>

    </>
  )
}

export default Home
import React from 'react'
import './Frequent.css'
import FrequentCard from './FrequentCard'
import { Link } from "react-router-dom"
import ShortCut from './UseAnywhere/ShortCut'

const Frequent = () => {
  return (
    <>
        <h1 className='frequent_banner'>Read My Blogs<span> on MEDIUM.COM</span></h1>
        
        <div className = "Frequent_card_holder">
        <FrequentCard
            src = "https://link.medium.com/NJCmtbcHvwb"
            sno = '1'
            title = "How to Earn Money Online ..."
        />
        <FrequentCard
            src="https://link.medium.com/bYMeQsUqvwb"
            sno = '2'
            title = "How to Create Your First React APp.."
        />
        <FrequentCard
            src="https://link.medium.com/LD9yYANbPwb"
            sno = '3'
            title = "What is Chat Gpt And How It Works"
        />
        <FrequentCard
            src=""
            sno = '4'
            title = "Top 5 Startup Ideas"
        />
        <FrequentCard
            src=""
            sno = '5'
            title = "How to Learn Coding From Zero"
        />
        <FrequentCard
            sno = '6'
            title = "Project Ideas for Web Developers"
        />
        
        <FrequentCard
            sno = '7'
            title = "Master React With These Youtube Tuts"
        />
        <FrequentCard
            sno = '8'
            title = "5 Awesome Javascript Projects For Resume"
        />
        <FrequentCard
            sno = '9'
            title = "5 projects to Master Front-end Development"
        />
        <FrequentCard
            sno = '10'
            title = "Ways Money Can Buy You Happiness"
        />
        </div>
    </>
  )
}

export default Frequent
import React from 'react'
import './FrequentCard.css'
import { NavLink , Link} from 'react-router-dom'


const FrequentCard = (props) => {
  return (
    <>
        <div className="Freq_card_box">
            <div className="Freq_card_left">
                {props.sno}
            </div>
            <div className="Freq_card_right">
                <a className="FrequentCardLink" href={(props.src)}>{props.title}</a>
            </div>            
        </div>
        <div className='Card_drop'>
            
        </div>
       
    </>
  )
}

export default FrequentCard
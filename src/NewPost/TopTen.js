import React from 'react'
import './Topten.css'
import { NavLink } from 'react-router-dom'
import ShortCut from '../UseAnywhere/ShortCut'

const TopTen = (props) => {
  return (
    <>
        <div className="top_ten_card">
            <div className="serial_no">{props.sno}</div>
            <div className="card_heading">{props.heading}</div>

              {
                props.src ?             
                <div className="toptenimage">
                    <img src={props.src} alt={props.alt} loading="lazy"/>
                </div> : " "
              }

              {
                  props.duration ? <h2><p> Complete Course Duration : {props.duration}</p></h2> : ""

              }
              {
                  props.lectures ? <h2><p className="lectures"> Total Lectures : {props.lectures}</p></h2> : ""

              }
              {
                  props.price ? <h2><p className="price"> Total Price : {props.price}</p></h2> : ""

              }
            <div className="top_ten_button">
              {props.path ? <NavLink className="top_ten_card_link" to={props.path}>{props.item ? props.item : "Click Here"}</NavLink> : <a className="top_ten_card_link" href={props.href}>{props.item ? props.item : "Click Here"}</a>}
            </div>
        </div>

    
    
    </>
  )
}

export default TopTen
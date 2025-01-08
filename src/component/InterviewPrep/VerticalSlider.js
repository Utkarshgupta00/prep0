import React from 'react'

const VerticalSlider = (props) => {
return (
    <>
        <div className="ip_ques_banner">
            <a href={(props.href1)}>
                <img src={props.src1} alt={props.alt1} loading="lazy"/>
            </a>

            <a href={(props.href2)}>
                <img src={props.src2} alt={props.alt2} loading="lazy"/>
            </a>

            <a href={(props.href3)}>
                <img src={props.src3} alt={props.alt3} loading="lazy"/>
            </a>
        
        </div>
    
    
    </>
)
}

export default VerticalSlider
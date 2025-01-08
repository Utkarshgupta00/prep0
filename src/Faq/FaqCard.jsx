import React from 'react'

const FaqCard = (props) => {
  return (
    <>

        <div className="faq_card">
            <div className="faq_question">
                <h3>{props.ques}</h3>
            </div>
            <div className="faq_answers">
                <p>
                    {props.ans}
                </p>

            </div>
        </div>

    
    </>
  )
}

export default FaqCard
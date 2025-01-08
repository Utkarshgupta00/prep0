import React from 'react';
import './Faq.css';
import { useState } from 'react';
import ShortCut from '../UseAnywhere/ShortCut';


const Faq = () => {
    const [select, setSelect] = useState();
const toggle = (i) =>{
    if(select==i){
        return setSelect(null);
    }
    setSelect(i);

}


  return (
    <>           
     <h1 className='faq_heading'>FAQ's</h1>
        <div className="wrapper">

            <div className="accordian">
                {
                data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{select==i ? '-' : '+'}</span>
                        </div>
                        <div className={select==i ? 'content show' : 'content'}>
                            <h3>{item.answer}</h3>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>


        
      <ShortCut/>
    </>

  
)
}

const data = [
    {
        question:"What is prep0 ?",
        answer:"prep0 is a web app based on react which provides a valuable resource for students who are looking for last-minute exam preparation. prep0 focus on providing high-quality, reliable information."
    },
    {
        question:"what is quantum zone ?",
        answer: "Quantum zone is a web page that provides all the Aktu quantum pdf books for BTech students including branches like Mechanical Engineering, Electrical Engineering, Information and Technology, Computer Science and Engineering, Civil Engineering, and Electronics Engineering"
    },
    {
        question:"How to use online resume maker on prep0 ?",
        answer:"prep0 also provides the facility of an online resume maker where we create a professional and polished resume for our users. We provide a number of resume templates, We are trying to save users time, by creating a visually appealing resume. Users can find a form in the resume builder section where one can fill in details and as soon as the user registers, the process of resume building starts."
    },
    {
        question:"How to Contact prep0 ?",
        answer:("Email-id : prep0eration@gmail.id")
    },
    {
        question:"How can anyone help prep0 ?",
        answer:"You can help us by sending your notes or whatever you think is relevant for this web app, you can send your documents on prep0eration@gmail.com"
    },
    {
        question:"How to Join prep0 ?",
        answer:"If anyone wants to join prep0 as a team member, he/she can send a mail regarding that, prep0 is open for All."
    },
    {
        question:"Founder of prep0",
        answer:"utkarsh Gupta is the developer and founder of prep0"
    },
    {
        question:"More to come ..."
    }



]

export default Faq
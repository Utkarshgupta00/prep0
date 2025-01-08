import React from 'react'
import ProjectBranch from './ProjectBranch'
import ProjectDetails from './ProjectDetails'

const Pdetails = (props) => {
  return (
    <>
            <div className='Project_subject'>{props.Subject}</div>
            <div className="project_box">


            <ProjectDetails
                topic={props.topic1}
                src={props.src1}
            />
            <ProjectDetails
                topic={props.topic2}
                src={props.src2}
            />
            <ProjectDetails
                topic={props.topic3}
                src={props.src3}
            />
            <ProjectDetails
                topic={props.topic4}
                src={props.src4}
            />
            <ProjectDetails
                topic={props.topic5}
                src={props.src5}
            />
            <ProjectDetails
                topic={props.topic6}
                src={props.src6}
            />
            <ProjectDetails
                topic={props.topic7}
                src={props.src7}
            />
            <ProjectDetails
                topic={props.topic8}
                src={props.src8}
            />
            <ProjectDetails
                topic={props.topic9}
                src={props.src9}
            />


            </div>


    
    </>
  )
}

export default Pdetails
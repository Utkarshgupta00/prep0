import React from 'react'


const ProjectDetails = (props) => {
  return (
    <div>

                  <div className="project_card">
                    <div className="Project_pdf_link">
                      <a href={(props.src)} className="Project_link">{props.topic}</a>
                    </div>
                  </div>

        
    </div>
  )
}

export default ProjectDetails
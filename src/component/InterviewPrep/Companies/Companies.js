import React from 'react'
import ContactCard from '../../../Contact/ContactCard'
import { Routes, Route } from 'react-router-dom'
import './Companies.css'
import CompaniesData from './CompaniesData'
const Companies = () => {
  return (
    <>
        <div className="companies_data_page">
            <Routes>

              


                <Route path="/google" element={<CompaniesData
                        submit="https://careers.google.com/"
                        heading="Hiring Process of GOOGLE"
                        data1="Resume Review: The first step is to review the resume of the candidate and ensure that they meet the minimum qualifications."
                        data2="Phone Screen: This involves a brief call with a recruiter to discuss the candidate's qualifications, experience, and interest in the role."
                        data3="Technical Interview: This is a more in-depth technical evaluation that is conducted by an engineer."
                        data4="Project Review: The candidate is given a project to work on to showcase their skills and problem-solving abilities."
                        data5="Onsite Interviews: The onsite interview is usually an all-day event where the candidate meets with several Googlers."
                        data6="Culture Fit Interviews: This is a series of interviews that focus on the candidate's fit with Google's unique culture and values."
                        data7="Hiring Committee Review: The hiring committee reviews all the information gathered from the various interviews and makes a decision on the candidate's suitability."
                        data8="Reference Checks: Google may conduct reference checks with the candidate's previous employers to verify their work history and performance."
                        data9="Offer: If the candidate is selected, they will receive an offer from Google, which includes details about salary, benefits, and the terms of employment."
                        data10="Onboarding: The final step is onboarding, where the new hire will receive training, meet their team, and begin their new role at Google."
                
                />}></Route>


                <Route path="/microsoft" element={<CompaniesData
                        submit="https://careers.microsoft.com/us/en"
                        heading="Hiring Process of Microsoft"
                        data1="Resume Review: The first step is to review the resume of the candidate and ensure that they meet the minimum qualifications."
                        data2="Phone Screen: This involves a brief call with a recruiter to discuss the candidate's qualifications, experience, and interest in the role."
                        data3="Technical Interview: This is a more in-depth technical evaluation that is conducted by an engineer."
                        data4="Project Review: The candidate is given a project to work on to showcase their skills and problem-solving abilities."
                        data5="Onsite Interviews: The onsite interview is usually an all-day event where the candidate meets with several Microsoft Employees."
                        data6="Culture Fit Interviews: This is a series of interviews that focus on the candidate's fit with Microsoft's unique culture and values."
                        data7="Hiring Committee Review: The hiring committee reviews all the information gathered from the various interviews and makes a decision on the candidate's suitability."
                        data8="Reference Checks: Google may conduct reference checks with the candidate's previous employers to verify their work history and performance."
                        data9="Offer: If the candidate is selected, they will receive an offer from Microsoft, which includes details about salary, benefits, and the terms of employment."
                        data10="Onboarding: The final step is onboarding, where the new hire will receive training, meet their team, and begin their new role at Microsof."
                

                
                
                />}></Route>

                <Route path="/amazon" element={<CompaniesData


                        submit="https://www.amazon.jobs/en/"
                        heading="Hiring Process of Amazon"
                        data1="Resume Review: The first step is to review the resume of the candidate and ensure that they meet the minimum qualifications."
                        data2="Phone Screen: This involves a brief call with a recruiter to discuss the candidate's qualifications, experience, and interest in the role."
                        data3="Technical Interview: This is a more in-depth technical evaluation that is conducted by an engineer."
                        data4="Project Review: The candidate is given a project to work on to showcase their skills and problem-solving abilities."
                        data5="Onsite Interviews: The onsite interview is usually an all-day event where the candidate meets with several Amazon employees."
                        data6="Culture Fit Interviews: This is a series of interviews that focus on the candidate's fit with Amazon's unique culture and values."
                        data7="Hiring Committee Review: The hiring committee reviews all the information gathered from the various interviews and makes a decision on the candidate's suitability."
                        data8="Reference Checks: Amazon may conduct reference checks with the candidate's previous employers to verify their work history and performance."
                        data9="Offer: If the candidate is selected, they will receive an offer from Amazon, which includes details about salary, benefits, and the terms of employment."
                        data10="Onboarding: The final step is onboarding, where the new hire will receive training, meet their team, and begin their new role at Amazon."
                
                
                
                />}></Route>

                <Route path="/apple" element={<CompaniesData
                
                submit="https://www.apple.com/careers/in/"

                    heading="Hiring Process of Apple"
                    data1="Visit Apple's career website and search for current job openings that match your skills and experience."
                    data2="Create a strong resume and cover letter that highlights your relevant skills and experiences."
                    data3="Application: Submit your resume, cover letter, and any other required materials through Apple's online application system."
                    data4="Screening: Apple's recruiters review your application and may reach out to schedule a phone screen if they believe you are a good fit for the role."
                    data5="Interviews: If you pass the screening stage, you may be invited to participate in one or more in-person or virtual interviews with Apple's hiring team. These may include behavioral, technical, or design-based interviews."
                    data6="Assessment: You may also be asked to complete an assessment, such as a skills test or case study, to demonstrate your abilities and fit for the role."
                    data7="Reference Checks: If you are a finalist for the role, Apple may reach out to your references to verify your work experience and skills."
                    data8="Offer: If you are selected for the role, Apple will extend a job offer, which may include details on compensation, benefits, and start date."
                    data9="If you are selected for an interview, be confident, professional, and emphasize how your skills and experience align with the job requirements and Apple's culture."
                    data10="Note: The hiring process at Apple can vary depending on the role and location, and may take several weeks or months. Be prepared to invest time and effort into the process to increase your chances of success."
                
                
                />}></Route>


                <Route path="/facebook" element={<CompaniesData

                    submit="https://www.metacareers.com/areas-of-work/Facebook%20App/?p[divisions][0]=Facebook&divisions[0]=Facebook"
                    heading="Hiring Process of Facebook"
                    data1="Submit an application: Apply for a role that interests you on Facebook's careers website."
                    data2="Resume Screening: Facebook recruiters will review your resume to determine if your skills and experience match the job requirements"
                    data3="Initial Interview: If you pass the resume screening, you may be invited for a phone or video interview with a Facebook recruiter."
                    data4="Technical Interview: If you pass the initial interview, you may be asked to participate in a technical interview with a Facebook engineer to assess your technical skills and abilities."
                    data5="On-Site Interview: If you pass the technical interview, you may be invited for an on-site interview at Facebook's headquarters. This may include behavioral, technical, and case-based interviews."
                    data6="Assessment Center: Facebook may also ask you to complete a coding challenge or take part in a design exercise to assess your problem-solving skills and creativity."
                    data7="Reference Checks: Facebook may reach out to your references to verify your work experience and skills."
                    data8="Offer: If you are selected for the role, Facebook will extend a job offer, which may include details on compensation, benefits, and start date."
                    data9="Background Check: Before starting work, you may be required to complete a background check."
                    data10="Onboarding: Once you accept the offer, Facebook will provide orientation and training to help you get started in your new role."
                
                
                />}></Route>

                




            </Routes>


        </div>



    </>
  )
}

export default Companies
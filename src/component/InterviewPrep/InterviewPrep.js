import React from 'react'
import Interview_Swiper from './Interview_Swiper'
import AutoplaySwi from '../../AutoplaySwi'
import VerticalSlider from './VerticalSlider'
import ContactCard from '../../Contact/ContactCard'
import ShortCut from '../../UseAnywhere/ShortCut'
import TopTenYoutube from '../../UseAnywhere/TopTenYoutube'
import { Helmet } from 'react-helmet'


const InterviewPrep = () => {
  return (
    <>



        <Helmet>

            <title>basic-interview-questions-and-answers</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="interview questions and answers for freshers, sample interview question and answer, leetcode top 100 interview questions, how to prepare for dsa interview" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet>





        <h1 className="ip_heading">
          <span>Interview </span>Preperation
        </h1>

        <div className="interview_dynamic_questions">
            <div className=''>

                    <div className="hero_banner_left">

                            <div className='interview_dynamic_text'>
                                  <ul>
                                      <li><span><k>ToPic : </k>ToP 100 Dsa Questions ?</span></li>
                                      <li><span><k>Ques : </k>Tell Me SomethinG about Yourself ?</span></li>
                                      <li><span><k>Topic : </k>Top 100 Interview Questions ?</span></li>
                                      <li><span><k>Leetcode : </k>Leetcode Top 50 Questions with Solutions ?</span></li>
                                      <li><span><k>interview : </k>Common Job Related Interview Questions ?</span></li>
                                      <li><span><k>Company : </k>Google | Microsoft | Amazon | FliPkart | Netflix ?</span></li>

                                  </ul>
 
        </div>


                    </div>


</div>
        </div>


        <div className="ip_banner">
          <img className="ip_banner_img" loading = "lazy" src="image/Interview/banner.webp" alt="interview,sample interview question and answer, How to answer tell me about yourself in interview  " />
        </div>









        <div>

          <AutoplaySwi

              img1="image/Interview/AutoSwi1/1.webp"
              alt1="top dsa interview questions with solutions"

              img2="image/Interview/AutoSwi1/2.webp"
              alt2="rat in a maze problem with solution"

              img3="image/Interview/AutoSwi1/4.webp"
              alt3="house robber dsa problem with solution"

              img4="image/Interview/AutoSwi1/3.webp"
              alt4="valid parenthesis important dsa interview questions"

              img5="image/Interview/AutoSwi1/5.webp"
              alt5="minimize cash flow interview questions with solution"

              img6="image/Interview/AutoSwi1/6.webp"
              alt6="number of islands problem dsa with solution"
              
          />
          
        </div>




          <VerticalSlider
              href1="https://drive.google.com/file/d/1bbs_bQuDcN0LhasOLNNjydt7k-v1NA7U/view?usp=drivesdk"
              href2="https://drive.google.com/file/d/1c3yr6GRJDz84fzxyHtZb56oFrTM_i5sj/view?usp=drivesdk"
              href3="https://drive.google.com/file/d/1aWyeqRheyoIlRTyxMTOke7k7Lgh78tjl/view?usp=drivesdk"

              //for images
              src1="image/interview_top_ques/dsa-must.webp"
              src2="image/interview_top_ques/common-interview-questions.webp"
              src3="image/interview_top_ques/leetcode.webp"

              alt1="dsa 100 must do questions with solutions for interview preperation"
              alt2="interview questions with answers, tell me about yourself, why do u want to join this company"
              alt3="leetcode top 50 interview questions with solutions"
          />


 

        <div className="interview_content_boxes">
          <h2  className='in_heading'>Top Interview Questions</h2>
            <Interview_Swiper

                  src1="image/RoadMap/react.webp"
                  link1="https://drive.google.com/file/d/1XJeEi1l_1lKCmdX-T1WaCxNPtRiIBTUZ/view?usp=drivesdk"
                  alt1="react js developer top interview questions with solution"
                  
                  src2="image/RoadMap/node.webp"
                  link2="https://drive.google.com/file/d/1a8t9UhqD1TQf89NcJaQrm_3M6mDDcPmD/view?usp=drivesdk"
                  alt2="node questions, node interview, node interview questions"

                  src3="image/RoadMap/mysql.webp"
                  link3="https://drive.google.com/file/d/1XKmxxSA-v65maVoCUX9-Zqlhd43f0ZAa/view?usp=drivesdk"
                  alt3="mysql backened interview questions"

                  src4="image/RoadMap/frontend.webp"
                  link4=""
                  alt4="frontend developer interview questions with answers"

                  src5="image/RoadMap/backend.webp"
                  link5="backend, backend developer, backend questions, backend interview"
                  alt5="backened developer interview questions with answers"

                  src6="image/RoadMap/backend.webp"
                  link6=""
                  alt6=""

                  
                  
            />


            <Interview_Swiper
                src1="image/RoadMap/java.webp"
                link1="https://drive.google.com/file/d/1aBdhZRvf4QqF3KWHP5bbdrnUivASXx7p/view?usp=drivesdk"
                alt1="java interview questions with solution pdf"

                src2="image/RoadMap/cpp.webp"
                link2="https://drive.google.com/file/d/1_7xH1GGm1-TZACeE0icl_KA8Jncji08L/view?usp=drivesdk"
                alt2="cpp c++ interview questions with solutions"

                src3="image/RoadMap/python.webp"
                link3="https://drive.google.com/file/d/1XJeEi1l_1lKCmdX-T1WaCxNPtRiIBTUZ/view?usp=drivesdk"
                alt3="python developer interview questions with answers"

                src4="image/RoadMap/js.webp"
                link4="https://drive.google.com/file/d/1aDABh7T75li6Dnh2NFWKfu--tvWLOWxE/view?usp=drivesdk"
                alt4="java script developer top asked interview questions with solutions"

                src5="image/interview_top_ques/oops.webp"
                link5="https://drive.google.com/file/d/1_9k0aevMP2IFuJxIi7DCC54YsbWfoDCG/view?usp=drivesdk"
                alt5="oops class inheritance interview question pdf"

                src6="image/RoadMap/c-language.webp"
                link6=""
                alt6="c language interview questions"
              
            
            />



        </div>






        <AutoplaySwi
              img1="image/Interview/AutoSwi1/a.webp"
              alt1="cpp cheat sheet pdf"
              img2="image/Interview/AutoSwi1/b.webp"
              alt2="cpp control flow , while loop, switch loop, for loop pdf"
              img3="image/Interview/AutoSwi1/c.webp"
              alt3="input and output using c language"
              img4="image/Interview/AutoSwi1/d.webp"
              alt4="data types and operators using c language"
              img5="image/Interview/AutoSwi1/e.webp"
              alt5="libraries using c and c++ language"
              img6="image/Interview/AutoSwi1/a.webp"
              alt6="cheat sheets for interview perperation"
          />





        <VerticalSlider
            //this is for a href
            href1="https://drive.google.com/file/d/1btlybqyTbtIYzdqX4--vxttyfVHDThQI/view?usp=drivesdk"
            href2="https://drive.google.com/file/d/1bpp1EoN2QmkXpHnEzFSFWOvJk5HTWQKy/view?usp=drivesdk"
            href3="https://drive.google.com/file/d/1Yo8kVbgRIn0pwbsMYbOoqRITSUpYJjfL/view?usp=drivesdk"

            //this is for images
            src1="image/Interview/cheat_sheets/vs-code.webp"
            src2="image/Interview/cheat_sheets/git-commands.webp"
            src3="image/Interview/cheat_sheets/dsa-cheat-sheet.webp"
            
            alt1="vscode shortcuts cheat sheets for interview preperation"
            alt2="git commands cheat sheets for interview "
            alt3="data structure and algorithm complete interview preperation cheat sheet"
        />
     




        {/* cheat-sheeets */}
        <div className="interview_content_boxes">
          <h2  className='in_heading'>Cheat Sheets</h2>
            <Interview_Swiper

                  src1="image/RoadMap/git.webp"
                  link1="https://drive.google.com/file/d/1YZAVOVXNL-Essj-3AMMgyyrJMUnS8RuN/view?usp=drivesdk"
                  alt1="git cheat sheets for interview preperation"

                  src2="image/Interview/cheat_sheets/datascience.webp"
                  link2="https://drive.google.com/file/d/1YVQvD3htjnwRNfatgzn44b4ERjkqb--C/view?usp=drivesdk"
                  alt2="data science cheat sheets for interview"

                  src3="image/Interview/cheat_sheets/python.webp"
                  link3="https://drive.google.com/file/d/1YZGr-PhnyOjtAG8VOvp4oI1K_9caZ7Y6/view?usp=drivesdk"
                  alt3="complete python course pdf"

                  src4="image/Interview/cheat_sheets/css.webp"
                  link4="https://drive.google.com/file/d/1YV7FcHF85xv3FQ-RKiLXJ1YQQP0ohvk4/view?usp=drivesdk"
                  alt4="css short notes pdf cheat sheets"

                  src5="image/RoadMap/js.webp"
                  link5="https://drive.google.com/file/d/1YYihFiXf1Iwqq7tYp_autfeUCIxqLY8T/view?usp=drivesdk"
                  alt5="javascript complete notes pdf"

                  src6="image/RoadMap/mondb.webp"
                  link6="https://drive.google.com/file/d/1Yv64opiFwPk5-co699GuJmmx0e-4XjJ5/view?usp=drivesdk"
                  alt6="mongodb short notes pdf"
            />
            <Interview_Swiper
                  src1="image/RoadMap/dsa.webp"
                  link1="https://drive.google.com/file/d/1Yo8kVbgRIn0pwbsMYbOoqRITSUpYJjfL/view?usp=drivesdk"
                  alt1="dsa short notes pdf for interview"

                  src2="image/RoadMap/cpp.webp"
                  link2="https://drive.google.com/file/d/1YjvcPDHCWM9sn8rnVB6uZ4-S7kb3edYv/view?usp=drivesdk"
                  alt2="cpp or c++ short notes for interview"

                  src3="image/RoadMap/java.webp"
                  link3="https://drive.google.com/file/d/1YRhnOeHXuoVg6GAh4n6rA1CspjG-ZFET/view?usp=drivesdk"
                  alt3="java cheat sheets for interview pdf"

                  src4="image/interview_top_ques/oops.webp"
                  link4="https://drive.google.com/file/d/1YkdymuZmQF9pwQe_A32DzdkCwyKkoAxE/view?usp=drivesdk"
                  alt4="oops short notes for interview"

                  src5="image/RoadMap/c-language.webp"
                  link5=""
                  alt5=""
                  
                  src6="image/RoadMap/Datastructure.webp"
                  link6=""
                  alt6=" datastructure notes for interview preperations"
            />

        </div>





        {/* top interview tips */}
        <div className="interview_content_boxes">
          <h2  className='in_heading'>Top Interview Tips</h2>
            <Interview_Swiper
                  
                  src1="image/RoadMap/java.webp" 
                  src2="image/RoadMap/cpp.webp"
                  src3="image/RoadMap/dsa.webp"
                  src4="image/RoadMap/python.webp"
                  src5="image/RoadMap/c-language.webp"
                  src6="image/RoadMap/ml.webp"

                  alt1=""
                  alt2=""
                  alt3=""
                  alt4=""
                  alt5=""
                  alt6=""

                  link1="https://drive.google.com/file/d/1pwJR22-Fwi-Exo0nb-ATfI_olG49-vUv/view?usp=drivesdk"
                  link2="https://drive.google.com/file/d/1pxanAtcBLQ--nGCG-1S050dTU5lg6pnN/view?usp=drivesdk"
                  link3="https://drive.google.com/file/d/1q8rat3nG3RSNTslhYfCISzHfnnX7eIZb/view?usp=drivesdk"
                  link4="https://drive.google.com/file/d/1paWyKt-zHyjEyNCZgkrf9njqETFF9fBH/view?usp=drivesdk"
                  link5="https://drive.google.com/file/d/1q9edFtaQ2Z7hH47IMx6egvzz_xXzwwZg/view?usp=drivesdk"
                  link6="https://drive.google.com/file/d/1q0nXgWOfrxsC7Obo4f0UptIbkcMINVms/view?usp=drivesdk"
            />



            <Interview_Swiper
                src1="image/RoadMap/react.webp"
                src2="image/RoadMap/node.webp"
                src3="image/RoadMap/mysql.webp"
                src4="image/RoadMap/js.webp"
                src5="image/RoadMap/frontend.webp"
                src6="image/RoadMap/backend.webp"

                alt1="react interview questions and answers"
                alt2="node interview questions, node interview, nodejs interview "
                alt3="my sql i, mysql questions, mysql answers"
                alt4="js for interview, js questions, javascript interview questions and answers"
                alt5="top front end, front end interview questions, front end "
                alt6="backend interview, backend interview questions, backend interview tips"
                
                
                link1="https://drive.google.com/file/d/1mwIw4yxhhzmlOpTILTMcv43dXsziJXCK/view?usp=drivesdk"
                link2="https://drive.google.com/file/d/1nP2kgkixoEV_H-QcGF6Bv0EUHLPw-Gbl/view?usp=drivesdk"
                link3="https://drive.google.com/file/d/1q7gaLdQXqruJkNSww2kSqPLoLp6hqu6U/view?usp=drivesdk"
                link4="https://drive.google.com/file/d/1nPDoMjJqdCsNNolSmjZ53TGpWuKhquaM/view?usp=drivesdk"
                link5="https://drive.google.com/file/d/1qWvNIHUk-dBMZ1lHKHb70Ha1TjRtokSs/view?usp=drivesdk"       
                link6="https://drive.google.com/file/d/1qOvhkdBxdBKvDFxQhglhhMS-K-2bOhdQ/view?usp=drivesdk"         
            />

        </div>





        <div className="common_job_ques_banner">
              <a href="https://drive.google.com/file/d/1c7vdEsoXO7FqBV13QfcM3kbYnoAHbdEf/view?usp=drivesdk">
                <img className="common_job_ques" loading="lazy" src="https://drive.google.com/uc?export=download&id=1nMTGL067FkPvQ4GiypPebXovAT2b6Yyw" alt="basic interview questions with solutions pdf, tell me about yourself, strength, weakness, where do you see yourself in next five years" />
              </a>
        </div>





        <h2 className="contact_heading">Top Dream Companies</h2>
        <div className="top_companies_interview">
          <ContactCard
              heading ="Google"
              data="To apply for a job at Google, you can visit the career section on their website. There you can search for open positions that match your skills and interests and submit your application online."
              src="/companies/google"
              button ="click Here"
          />
          <ContactCard
              heading ="Microsoft"
              data="To apply for a job at Microsoft, you can visit their careers website. On the site, you can browse and search for job openings that align with your skills and experience, and submit an online application."
              src="/companies/microsoft"
              button ="click Here"
          />
          <ContactCard
              heading ="Amazon"
              data="To apply for a job at Amazon, you can visit their careers website. On the site, you can browse and search for job openings that match your skills and interests, and submit an online application."
              src="companies/amazon"
              button ="click Here"
          />
          <ContactCard
              heading ="Facebook"
              data="To apply for a job at Flipkart, you can visit their careers website at https://www.flipkartcareers.com/. On the site, you can browse and search for job openings that match your skills and interests, and submit an online application."
              src="/companies/facebook"
              button ="click Here"
          />

              <ContactCard
              heading ="Apple"
              data="To apply for a job at Apple, you can visit their careers website . On the site, you can browse and search for job openings that match your skills and interests, and submit an online application."
              src="/companies/apple"
              button ="click Here"
          />

        </div>
    
            <TopTenYoutube/>
            
            <ShortCut/>
    
    </>
  )
}

export default InterviewPrep
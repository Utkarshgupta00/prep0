import React, {useState} from 'react';
import AutoplaySwi from './AutoplaySwi';
import './Resume.css';
import {Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';            
import 'swiper/css';
import ContactCard from './Contact/ContactCard'
import ShortCut from './UseAnywhere/ShortCut';

import { NavLink , useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';




const Resume = () => {

    const navigate = useNavigate();
    
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        projects:"",
        skills:"",
        education:"",
        others:""

    });

    let name,value;

const handleInputs=(e)=>{
    
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]:value})
}


const PostData = async (e) =>{
    e.preventDefault();
    const { name, email, phone, password, projects, skills, education, others } = user;

    const res = await fetch('/register', {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name, email, phone, password , projects, skills, education, others
        })
    });

    const data = await res.json();

    if(data.status === 422 || !data){
        window.alert("Invalid Registration");
        console.log("invalid registration");
    }
    else{   
            window.alert('successful');
            navigate('/');
    }
}

alert("Sorry : This Service Is not Available Now");


  return (
    
    <>   


        <Helmet>
            {/* <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2105585555520096" crossorigin="anonymous"></script>
            </head> */}
            <title>online-resume-builder</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Free Resume maker online, resume checker online, best reusme template, this resume got me selected, interview resume " />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet>
        
        <h1 id="resume-builder-online" className='resume_heading'>Resume Builder</h1>
        <div className="resume_hero_banner"></div>
        <div className="resume_container_heading">Get A Job Winning Resume</div>
        <div className="resume_banner">
                <img src="image/Resume/Resume_img.png" alt="" className="resume_img" />
         </div>

        <div className='resume_about_section'>Don't spend time on building Resume Let us Do this For You</div>
         <div className="resume_card_swiper">
                <img src="https://drive.google.com/uc?export=download&id=1yk59ziPNPfbvCqPIwYPtSnmga8hXJwZk" alt="" className="resume_card_swi" />
         </div>        
        
        <div className='select_resume'>We Build Best Resume With Filtered Details Provided By User</div>

        <div className="resume_slide_box">
            <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={5}
                  slidesPerView={1}
                  navigation
                  pagination
                  autoplay={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
            >
                  <SwiperSlide className='resume_slide'>
                    <NavLink to=""><img className='resume_slider_img' src="image/Resume/ResumeTemplates/1.webp"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='resume_slide'>
                    <NavLink to=""><img className='resume_slider_img' src="image/Resume/ResumeTemplates/2.webp"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='resume_slide'>
                    <NavLink to=""><img className='resume_slider_img' src="image/Resume/ResumeTemplates/3.webp"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='resume_slide'>
                    <NavLink to=""><img className='resume_slider_img' src="image/Resume/ResumeTemplates/4.webp"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='resume_slide'>
                    <NavLink to=""><img className='resume_slider_img' src="image/Resume/ResumeTemplates/5.webp"/></NavLink>
                  </SwiperSlide>

            </Swiper>

    </div>

            <div className="select_resume">
                 You Can Select Your Resume From These Templates
            </div>
            <div className='resume_main_sign_box'>
                <div className="sign_page resume_sign_page">
                    <div className='sign_box resume_form_box'>
                        <div className = "resume_main_page">
                            <h2 className='resume_form_title'> FILL UP YOUR DETAILS</h2>
                        
                                <div className="">
                                    {/* <img className="resume_form_img" src="" alt="" /> */}
                                </div>
                                


                            <form className="registration_form" id="registration_form" method="POST">
                    




                    <div className="form_group">
                        <label htmlFor="name">
                            {/* <i class="zmdi zmdi-account"></i> */}
                        </label>
                        <input type="text" className="resume_input_field" name="name" autoComplete='off'
                        value={user.name}
                        onChange={handleInputs}
                        placeholder='Enter your name'/>
                    </div>





                    <div className="form_group">
                        <label htmlFor="email">
                            {/* <i class="zmdi zmdi-email"></i> */}
                        </label>
                        <input type="email" className="resume_input_field" name="email" autoComplete='off'
                        value={user.email}
                        onChange={handleInputs}
                        placeholder='Enter your email'/>
                    </div>






                    <div className="form_group">
                        <label htmlFor="phone">
                            {/* <i class="zmdi zmdi-phone"></i> */}
                        </label>
                        <input type="number" className="resume_input_field" name="phone" autoComplete='off'
                        value={user.phone}
                        onChange={handleInputs}
                        placeholder='Enter your phone number'/>
                    </div>






                    <div className="form_group">
                        <label htmlFor="password">
                            {/* <i class="zmdi zmdi-lock"></i> */}
                        </label>
                        <textarea type="password" className="resume_input_field resume_textarea" name="password" autoComplete='off'
                        value={user.password}
                        onChange={handleInputs}
                        placeholder='Enter your Work Experience'/>
                    </div>



                    <div className="form_group">
                        <label htmlFor="projects">
                            {/* <i class="zmdi zmdi-lock"></i> */}
                        </label>
                        <textarea type="text" className="resume_input_field resume_textarea" name="projects" autoComplete='off'
                        value={user.projects}
                        onChange={handleInputs}
                        placeholder='Enter you projects details in brief'/>
                    </div>

                    <div className="form_group">
                        <label htmlFor="skills">
                            {/* <i class="zmdi zmdi-lock"></i> */}
                        </label>
                        <textarea type="text" className="resume_input_field resume_textarea" name="skills" autoComplete='off'
                        value={user.skills}
                        onChange={handleInputs}
                        placeholder='Enter you skills details in brief'/>
                    </div>

                    <div className="form_group">
                        <label htmlFor="education">
                            {/* <i class="zmdi zmdi-lock"></i> */}
                        </label>
                        <textarea type="text" className="resume_input_field resume_textarea" name="education" autoComplete='off'
                        value={user.education}
                        onChange={handleInputs}
                        placeholder='Enter your educational details'/>
                    </div>


                    <div className="form_group">
                        <label htmlFor="others">
                            {/* <i class="zmdi zmdi-lock"></i> */}
                        </label>
                        <textarea type="text" className="resume_input_field resume_textarea" name="others" autoComplete='off'
                        value={user.others}
                        onChange={handleInputs}
                        placeholder='Enter any other details you want to add on'/>
                    </div>





                    <div className='reg_button'>
                    <input type="submit" name="signup" id = "signup" className='form_submit'
                     value="Register" onClick={PostData}/>
                     
                    </div>
                    



                            </form>

                        </div>
                    </div>
                </div>
            </div>

        <div className="resume_container_heading kprice">price : $1</div>
        <div className="resume_container_heading kprice">premium : $2</div>


        <div className="resume_important_information">
            <h3>Importance of a Good Resume</h3>
            <p>The resume is a critical component of the job interview process as it provides the employer with the first impression of a job candidate. A well-crafted resume can help a candidate stand out among other applicants and can help increase their chances of being selected for an interview.</p>
        </div>



        {/* <div className="tap_to_scroll">A well-crafted resume can bring numerous benefits,including:</div> */}
        
        
        <div className='resume_benefits'>
            <ContactCard
                data="Improved chances of getting hired: A well-written resume showcases your skills and qualifications, making it easier for potential employers to see how you would fit into their organization."
            />
                <ContactCard
                data="Increased visibility: A strong resume helps you stand out from the competition and get noticed by hiring managers."
            />
                <ContactCard
                data="Better salary offers: A resume that accurately reflects your skills, experience, and accomplishments can help you negotiate better salary and benefits packages."
            />
                <ContactCard
                data="Career advancement: A strong resume can open the door to new job opportunities, helping you progress in your career."
            />
                <ContactCard
                data="Increased confidence: A well-written resume can boost your confidence and help you feel more prepared for job interviews."
            />
                <ContactCard
                data="Clarity and focus: The process of creating a good resume requires you to take a close look at your skills, experiences, and goals, helping you gain clarity and focus on your career path."
            />
                <ContactCard
                data="A professional image: A well-designed and well-written resume can help you present a professional image to potential employers and other business contacts."
            />
                <ContactCard
                data="Overall, a good resume is an essential tool for job seekers, as it can make the difference between getting hired or getting passed over for a job opportunity."
            />

            
        </div>


        <ShortCut/>
        
        <AutoplaySwi
            img1="image/Resume/Evaluation_swiper/1.webp"
            img2="image/Resume/Evaluation_swiper/2.webp"
            img3="image/Resume/Evaluation_swiper/3.webp"
            img4="image/Resume/Evaluation_swiper/4.webp"
            img5="image/Resume/Evaluation_swiper/5.webp"
            img6="image/Resume/Evaluation_swiper/6.webp"
        
        />



    
    
    </>
  )
}

export default Resume
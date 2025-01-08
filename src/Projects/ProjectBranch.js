import React from 'react'
import {Navigation, Pagination, Autoplay} from 'swiper';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';   
import './ProjectBranch.css';    
import ProjectDetails from './ProjectDetails';  
import 'swiper/css';
import Pdetails from './Pdetails';

import { Routes,Route } from 'react-router-dom';



const ProjectBranch = (props) => {
  
    return (
        <>
            



  


<Routes>

  
  <Route exact path = "/mechanical-engineering-project-report-pdf" element={
        <Pdetails
            Subject="Mechanical"


            topic1="Conversion Gate Project PDF"
            src1="https://drive.google.com/file/d/1AVXQYpIZ2eIg5J2_ww6NCPg96l0-vO33/view?usp=drivesdk"

            topic2="Can Crusher Project . PDF"
            src2="https://docs.google.com/document/d/1CLsjhQpvILx8NrpRsFabN-8waXcHanXv/edit?usp=drivesdk&ouid=104551471672108102752&rtpof=true&sd=true"

            topic3="Gear Cutting Attachment . PDF"
            src3="https://drive.google.com/file/d/1C7-BYZ7VUa6LA3XPJHJYUIB9SWb5N5qH/view?usp=drivesdk"

            topic4="Hydraulic Arm Project . PDF"
            src4="https://docs.google.com/document/d/1CKJBr06_rMppyjGMUyo0yqiQJYPtwMVh/edit?usp=drivesdk&ouid=104551471672108102752&rtpof=true&sd=true"

            topic5="Universal Coupling . PDF"
            src5="https://drive.google.com/file/d/1C-PpURi2D4jQUUaRbA_F7dHe6lQfV3ub/view?usp=drivesdk"

            topic6="Aircraft Auto Pilor ROll . PPT"
            src6="https://docs.google.com/presentation/d/1C4a-Pz15MKcayckrXt7-Ve-krLC9_U1W/edit?usp=drivesdk&ouid=104551471672108102752&rtpof=true&sd=true"

            topic7="Gear Box Project . PDF"
            src7="https://docs.google.com/document/d/1C1u8CsaG8V4LUQ4I9P4Q6IFv62NKKMeP/edit?usp=drivesdk&ouid=104551471672108102752&rtpof=true&sd=true"

            topic8="Design and Fabrication of Tensionless Bike.PDF+"
            src8="https://docs.google.com/document/d/1CFpQuYntOCze5EELzxh4Fx75AJANqz2q/edit?usp=drivesdk&ouid=104551471672108102752&rtpof=true&sd=true"

            topic9=""
            src9=""

            topic10=""
            src10=""            

        />  



  }/>
    


  <Route exact path = "/electrical-engineering-project-report-pdf" element={
        <Pdetails
            Subject ="Electrical"


            topic1=""
            src1=""

            topic2=""
            src2=""

            topic3=""
            src3=""

            topic4=""
            src4=""

            topic5=""
            src5=""

            topic6=""
            src6=""

            topic7=""
            src7=""

            topic8=""
            src8=""

            topic9=""
            src9=""

            topic10=""
            src10=""


        />      
  }
  />


<Route exact path = "/chemical-engineering-project-report-pdf" element={
        <Pdetails
            Subject ="Chemical"


            topic1=""
            src1=""

            topic2=""
            src2=""

            topic3=""
            src3=""

            topic4=""
            src4=""

            topic5=""
            src5=""

            topic6=""
            src6=""

            topic7=""
            src7=""

            topic8=""
            src8=""

            topic9=""
            src9=""

            topic10=""
            src10=""


        />      
  }
  />


<Route exact path = "/computer-science-engineering-project-report-pdf" element={
        <Pdetails
            Subject ="CSE"


            topic1=""
            src1=""

            topic2=""
            src2=""

            topic3=""
            src3=""

            topic4=""
            src4=""

            topic5=""
            src5=""

            topic6=""
            src6=""

            topic7=""
            src7=""

            topic8=""
            src8=""

            topic9=""
            src9=""

            topic10=""
            src10=""


        />      
  }
  />



</Routes>








      
        </>
      )
}

export default ProjectBranch
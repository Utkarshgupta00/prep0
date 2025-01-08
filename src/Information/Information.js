import React from 'react'
import "./Information.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation,Pagination } from 'swiper';
import AutoplaySwi from '../AutoplaySwi'
import { NavLink, Link } from 'react-router-dom';

const Information = () => {
  return (
    <>

    <h1 className='information_heading'>Main Problems</h1>

    <div className="information_banner"></div>

    <h2 className="information_heading">Beginner's Guide</h2>

    <div className="information">
            <div className="information_dropbox">
              <ul className="information_content_type">
                <NavLink to="/data/dsa"><li className='type_name'>DSA</li></NavLink>
                <NavLink to="/data/c++"><li className="type_name">C++</li ></NavLink>
                <NavLink to="/data/java"><li className="type_name">JAVA</li></NavLink>
                <NavLink to="/data/python"><li className="type_name">PYTHON</li></NavLink>
                <NavLink  to="/data/web-development"><li className="type_name">WEB-DEVELOPMENT</li></NavLink>
                <NavLink to="/data/app-development"><li className="type_name">APP-DEVELOPMENT</li></NavLink>
                <NavLink to="/data/data-science"><li className="type_name">DATA-SCIENCE</li></NavLink>
                <NavLink to="/data/machine-learning"><li className="type_name">MACHINE-LEARning</li></NavLink>
                <NavLink to="/data/auto-cad"><li className="type_name">AUTOCAD</li></NavLink>
                <NavLink  to="/data/solid-works"><li className="type_name">SOLID-WORKS</li></NavLink>
                <NavLink to="/data/graphic-designing"><li className="type_name">GRAPHIC-DESIGNING</li></NavLink>
                <NavLink to="/data/video-editing"><li className="type_name">VIDEO-EDITING</li></NavLink>
                <NavLink to="/data/content-writing"><li className="type_name">CONTENT-WRiTiNG</li></NavLink>
              </ul>
              
            </div>
            <div className="information_img">
              <div className="information_swi_box">
                  <AutoplaySwi
                      spl="1"
                      img1="image/Information/graphic-designing.webp"
                      img2="image/Information/machine-learning.webp"
                      img3="image/RoadMap/datastructure.webp"
                      img4="image/RoadMap/js.webp"
                      img5="image/RoadMap/ml.webp"
                      img6="image/RoadMap/c-language.webp"

                      alt1="learning graphic design for beginners free, easy steps to learn graphic design, Learning graphic design for beginners"
                      alt2="start here with machine learning, how to start learning machine learning"
                      alt3="how to start learning dsa from scratch"
                      alt4="javascript logo, how to start javascript beginner"
                      alt5="machine learning logo, how to start learning machine learning as a beginner, fresher machine learning roadmap"
                      alt6="c language logo, how to start learning c from scratch as a beginner"
                  />
              </div>
                  <AutoplaySwi
                      class="remove_back_shadow"
                      spl="1"
                      img1="image/RoadMap/cpp.webp"
                      img2="image/Information/auto-cad.webp"
                      img3="image/RoadMap/java.webp"
                      img4="image/RoadMap/dina.webp"
                      img5="image/RoadMap/python.webp"
                      img6="image/RoadMap/comp.webp"

                      alt1="cpp png logo, how to start learning cpp fresher"
                      alt2="autocad logo png, autocad designing learn from scratch"
                      alt3="java logo png for free, how to start learning java from scratch, beginner java developer roadmap"
                      alt4="dinasour png logo"
                      alt5="python development from scratch basic"
                      alt6=""
                  />                




            </div>
        </div>   
    
    
    
    </>
  )
}

export default Information
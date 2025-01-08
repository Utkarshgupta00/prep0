import React from 'react'
import { Routes , Route} from 'react-router-dom';
import AutoplaySwi from './AutoplaySwi';
import SwiperStruct from './component/SwiperStruct';
import './Roadmap.css';
import { Helmet } from 'react-helmet';







const Roadmap = () => {
  return (
    <>        
    
        <Helmet>
            <title>Developer Roadmaps</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="developer roadmaps, 90 days dsa roadmap, react roadmap, node roadmap, how to become node developer" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet> 

        <h1
        
        
         className='roadmap_heading'>ROADMAPS</h1>
        <div className="roadmap_banner">
            <img className="roadmap_banner_image"src="image/roadmap_banner.webp"/>
        </div>

        <AutoplaySwi
            img1="image/RoadMap/road_swap/1.webp"
            alt1="node js roadmap pdf, how to become node js developer"
            img2="image/RoadMap/road_swap/2.webp"
            alt2="developer roadmap"
            img3="image/RoadMap/road_swap/3.webp"
            alt3="roadmap node js"
            img4="image/RoadMap/road_swap/4.webp"
            alt4="roadmap template"
            img5="image/RoadMap/road_swap/5.webp"
            alt5="path to node js"
            img6="image/RoadMap/road_swap/6.webp"
            alt6="how to learn node js"
            img7="image/RoadMap/road_swap/7.webp"
        />


        
        <SwiperStruct
           
            spv1 = {4}


            img=""
            rm=""
            rsrc=""

            img1="image/RoadMap/python.webp"
            rm1="Python"
            rsrc1="https://drive.google.com/file/d/1PDq60fzxknotFZNQzNMzW5yOv8j4Mol6/view?usp=drivesdk"
            alt1="python roadmap pdf"

            img2="image/RoadMap/java.webp"
            rm2="Java"
            rsrc2="https://drive.google.com/file/d/1NeOoBDOS6Dq21IxKr2MPV8c2iux3mvrU/view?usp=drivesdk"
            alt2="java complete roadmap"   
            
            
            img3="image/RoadMap/cpp.webp"
            rm3="Cpp"
            rsrc3="https://drive.google.com/file/d/1Nd-G_0VBk9EemOja2GLg_ECY9RUUVenB/view?usp=drivesdk"
            alt3="cpp roadmap pdf"

            img4="image/RoadMap/chas.webp"
            rm4="C#"
            rsrc4=""
            alt4="c hash complete roadmap pdf"

            img5="image/RoadMap/mysql.webp"
            rm5="MySql"
            rsrc5=""
            alt5="my sql roadmap pdf"

            img6="image/RoadMap/backend.webp"
            rm6="Backened"
            rsrc6="https://drive.google.com/file/d/1QQVp9U-4hyyaNpsnwumhFgND2z0k94qp/view?usp=drivesdk"
            alt6="backened developer roadmap pdf"

            img7=""
            rm7=""
            rsrc7=""
        />  




        <SwiperStruct
            auto = {true}
            
            spv1 = {3.8}
            
            img1="image/RoadMap/html.webp"
            rm1 = "HTML"
            rsrc1 = "https://drive.google.com/file/d/1O6Xjub_iYHBRWGJjLYIuXdLSgdXMSyEi/view?usp=drivesdk"
            alt1="html roadmap beginner to advance, how to learn html"

            img2="image/RoadMap/css.webp"
            rm2="CSS"
            rsrc2="https://drive.google.com/file/d/1OGTNAztuz_RMNFC2pXYyiP9r6FycJUoo/view?usp=drivesdk"
            alt2="css roadmap, how to learn css"

            img3="image/RoadMap/js.webp"
            rm3="JavaScript"
            rsrc3="https://drive.google.com/file/d/1Npfh5cXjjb_b2j-tYpehvw_r_GI_974q/view?usp=drivesdk"
            alt3="how to start javascript roadmap"

            img4="image/RoadMap/react.webp"
            rm4 = "React Js"
            rsrc4 = "https://drive.google.com/file/d/1NrMWz0L7eiWz41HFHOZJ7BQTpHzsXpP5/view?usp=drivesdk"
            alt4="react js complete roadmap, how to start and learn react js from beginning"

            img5="image/RoadMap/node.webp"
            rm5="NoDE JS"
            rsrc5="https://drive.google.com/file/d/1ONHrU9Jtt9ZkFDMugpfYseeBCC8WgAd8/view?usp=drivesdk"
            alt5='roadmap to node js, how to learn node js as a fresher, start node js, nodejs simple roadmap'

            img6="image/RoadMap/mondb.webp"
            rm6="Mongo-DB"
            rsrc6="https://drive.google.com/file/d/1usBAybkG5qmN220wEOKcQNQyRT-9Vvdu/view?usp=drivesdk"
            alt6="roadmap to mongodb fast way to learn mongo db mongoosh"

            img7="image/RoadMap/Angu.webp"
            rm7="Angular"
            rsrc7="https://drive.google.com/file/d/1P73_pJQNNhf2fG6Yp_MHIQD9HEeE6YY1/view?usp=drivesdk"
            alt7="roadmap to angular developer"

        />        
        <SwiperStruct
            spv1 = {3.6}
            auto={true}


            img1="image/RoadMap/datastructure.webp"
            rm1 = "Data-Structure-Detailed"
            rsrc1 = "https://drive.google.com/file/d/1-mrFXs7f-Isb1yp_s2M5bGBkYy_XZPEW/view?usp=drivesdk"
            alt1="data structure and algorithm roadmap, start dsa"

            img2="image/RoadMap/ml.webp"
            rm2="Machine Learning"
            rsrc2="https://drive.google.com/file/d/1OgYP4n3Oku9s0l3MoNBsEFUT6Bo1gpVL/view?usp=drivesdk"
            alt2="machine learning roadmap , way to learn ml"

            img3="image/RoadMap/datascience.webp"
            rm3="MERN Complete"
            rsrc3="https://drive.google.com/file/d/1QHUNn593Eq-vhWbI-dOzJHp7VjkkF1qs/view?usp=drivesdk"
            alt3="mern developer roadmap, how to become a mern developer"

            img4="image/RoadMap/dsa.webp"
            rm4="DSA-Short"
            rsrc4="https://drive.google.com/file/d/1KtMxc4lDFWsDs2g6MncUkEsCFpls9D5E/view?usp=drivesdk"
            alt4="dsa short notes and roadmaps , ways to start dsa"

            img5="image/RoadMap/devops.webp"
            rm5="DevOps"
            rsrc5="https://drive.google.com/file/d/1On6bLHx11ZKfHNV1Q868d6BEaoQ8atJ1/view?usp=drivesdk"
            alt5="devops way to learn"

            img6=""
            rm6=""
            rsrc6=""
            alt6=""

            img7=""
            rm7=""
            rsrc7=""

        />

        <SwiperStruct
            spv1={4}
            pv1 = {4}


            img1="image/RoadMap/Mech.webp"
            rm1="Mechanical"
            rsrc1=""
            alt1="mechanical engineering roadmap"

            img2="image/RoadMap/elec.webp"
            rm2="Electrical"
            rsrc2=""
            alt2="electrical engineering pdf"

            img3="image/RoadMap/comp.webp"
            rm3="Computer Science"
            rsrc3=""
            alt3="cse roadmap 1st year to last year"

            img4="image/RoadMap/chem.webp"
            rm4="Chemical"
            rsrc4=""
            alt4="chemical engineering roadmap"

            img5="image/RoadMap/civil.webp"
            rm5="civil"
            rsrc5=""
            alt5="roadmap of civil engineering"
        />
        <SwiperStruct
            spv1 = {4}


            img1="image/RoadMap/glr.webp"
            rm1="50 Resources for content"
            rsrc1="https://drive.google.com/file/d/1FIUNxpCbu1tXQZQNhOKgpdABRSIdWp46/view?usp=drivesdk"
            alt="50 resources for best developer content"

            img2="image/RoadMap/Interviewques.webp"
            rm2="Best Ques for Tech"
            rsrc2="https://drive.google.com/file/d/1FIsjq-RZZOlnq3HdvZPYSz-c9tItvgxP/view?usp=drivesdk"
            alt2="best questions for tech interview"

            img3="image/RoadMap/new/Dalle.webp"
            rm3="DAlle open Ai"
            rsrc3="https://drive.google.com/file/d/1KqbFGO7AiDoIKhPJtvEM-YVmHQpvAerU/view?usp=drivesdk"
            alt3="open Ai for image dalle"

            img4="image/RoadMap/new/skills.webp"
            rm4="Best skills for Career"
            rsrc4="https://drive.google.com/file/d/1KrWdJtvFyiTPkDUi4Rx7PIPNohL9hhyS/view?usp=drivesdk"
            alt4="best skills for career growth learn these skills now"

            img5="image/RoadMap/top6algorithm.webp"
            rm5="TOp 6 Algorithm"
            rscr5="https://drive.google.com/file/d/1NHiPK5k2WQVPP_zTbZVGb_4uBfUojIVy/view?usp=drivesdk"
            alt5="top 6 algorithms to learn in 2023"

            img6="image/RoadMap/top10sites.webp"
            rm6="Free Online Education"
            rscr6="https://drive.google.com/file/d/1NMDOsmAIJ3KBn8F5FzEtgJrfF_8xO5yc/view?usp=drivesdk"        
            alt6="best platform for free education online"

            img7="image/RoadMap/top10sitesjob.webp"
            rm7="Top 10 Websites"
            rscr7="https://drive.google.com/file/d/1NMlMqSH1lx1AhP_SSUey71h9P0YjeLZx/view?usp=drivesdk"
            alt7="top 10 website for getting job, internship, job portal"             
        />




<AutoplaySwi
            auto="0"
            spl = "3"
            img1="image/RoadMap/Best_youtube_channel_for_web_development/1.webp"
            alt1="best youtube channel for developers"

            img2="image/RoadMap/Best_youtube_channel_for_web_development/2.webp"
            alt2="traversy media, freecodecamp.org, programming with mosh, the net ninja"

            img3="image/RoadMap/Best_youtube_channel_for_web_development/3.webp"
            alt3="programming knowledge, web dev simplified, code with harry, hitesh chaudhry"

            img4="image/RoadMap/Best_youtube_channel_for_web_development/4.webp"
            alt4="academind, the new boston, javascript mastery, clever programming"

            img5="image/RoadMap/Best_youtube_channel_for_web_development/5.webp"
            alt5="codeacademy, deved, designCourse, edureka"

            img6="image/RoadMap/Best_youtube_channel_for_web_development/6.webp"
            alt6="tech with tim, thapa technical, fireship, devtips"

            img7="image/RoadMap/Best_youtube_channel_for_web_development/7.webp"
        />


    </>    
    
    
    

  )
}

export default Roadmap
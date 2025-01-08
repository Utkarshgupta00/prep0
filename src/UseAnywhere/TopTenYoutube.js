import React from 'react'
import Interview_Swiper from '../component/InterviewPrep/Interview_Swiper';
const TopTenYoutube = () => {
  return (
    <>
    <div className="toptenyoutube">
        <h2>Top 10 Resources</h2>
        <Interview_Swiper
        
            auto="false"
            spl="3.5"
            src1="image/top10/app-development.webp"
            src2="image/top10/web-development.webp"
            src3="image/RoadMap/datastructure.webp"
            src4="image/RoadMap/python.webp"
            src5="image/RoadMap/cpp.webp"
            src6="image/RoadMap/java.webp"

            alt1="10 great free online courses for app development"
            alt2="10 best web development online courses for beginners in 2023"
            alt3="data structures and algorithms course best youtube channel to learn dsa in hindi, best youtube channel for dsa in c++"
            alt4="best youtube channel to learn python in india"
            alt5="best youtube channels to learn c++ for beginners, c++ programming in english and hindi"
            alt6="best youtube channel for java programming, top 10 best youtube channels for java programming"


            title="App Development"
            title2="Web Development"
            title3="DSA"
            title4="Python"
            title5="C++"
            title6="Java"

            dest1="/top-ten-youtube-channels-for/free-online-app-development-courses"
            dest2="/top-ten-youtube-channels-for/free-online-web-development-courses"
            dest3="/top-ten-youtube-channels-for/free-online-data-structure-and-algorithms-courses"
            dest4="/top-ten-youtube-channels-for/free-online-python-development-course"
            dest5="/top-ten-youtube-channels-for/free-online-cpp-development-course"
            dest6="/top-ten-youtube-channels-for/free-online-java-development-course"
        
        />
      </div>

    
    
    
    </>
  )
}

export default TopTenYoutube
import React from 'react'
import TopTen from './TopTen'
import './NewPost.css'
import { Routes, Route } from 'react-router-dom'
import ShortCut from '../UseAnywhere/ShortCut'
import { Helmet } from 'react-helmet'


const NewPost = () => {
  return (
    <>

        <Helmet>

            {/* <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2105585555520096" crossorigin="anonymous"></script>
            </head> */}
            <title>Top Ten YouTube Channels</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content=" best youtube channel for web development, app development, machine learning, data structure and algorithms " />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />
        </Helmet>

        



        <div className="new_post_page">

        <div className="ten_data_page_heading">
            TOP 10 ZONE
        </div>


          <TopTen
              heading="Top 10 YouTube Channels For learning WEb DEvelopment"
              src="image/top10/web-development.webp"
              path="/top-ten-youtube-channels-for/free-online-web-development-courses"
          />
          <TopTen
              heading="Top 10 YouTube Channels For learning App DEvelopment"
              src="image/top10/app-development.webp"
              path="/top-ten-youtube-channels-for/free-online-app-development-courses"
          />
          <TopTen
              heading="Top 10 YouTube Channels For learning DSA"
              src="image/Roadmap/datastructure.webp"
              path="/top-ten-youtube-channels-for/free-online-data-structure-and-algorithms-courses"
          />

          <TopTen
              heading="Top 10 YouTube Channels For learning Python"
              src="image/RoadMap/python.webp"
              path="/top-ten-youtube-channels-for/free-online-python-development-course"
          />



          <TopTen
              heading="Top 10 YouTube Channels For learning C++"
              src="image/RoadMap/cpp.webp"
              path="/top-ten-youtube-channels-for/free-online-cpp-development-course"
          />
          <TopTen
              heading="Top 10 YouTube Channels For learning C++"
              src="image/RoadMap/java.webp"
              path="/top-ten-youtube-channels-for/free-online-java-development-course"
          />

        </div>


        <ShortCut/>
 
        
    
    
    
    </>
  )
}

export default NewPost
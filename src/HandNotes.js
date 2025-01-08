import React from 'react'
import './HandNotes.css';
import SwiperStruct from './component/SwiperStruct'
import AutoplaySwi from './AutoplaySwi';
import { Helmet } from 'react-helmet';
const Handnotes = () => {
  return (
    <>

        <Helmet>
            {/* <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2105585555520096" crossorigin="anonymous"></script>
            </head> */}
            <title>Handwritten notes</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="handwritten notes pdf, notes for exam preperation, short notes, dsa short notes, react short notes" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet> 
        
       <div className='Handnotes_banner_img'>
        <img src="image/HandWritten/blue_banner.webp" alt="notes for exam preperation"/>
       </div>
        <h1 className='HN_heading'>
            NOTES
        </h1>
        <h1 className="HN_banner">
          <img className="HN_banner_img" src="image/HandWritten/HNbanner.webp"
          alt="handwritten notes pdf"
          />
        </h1>
        <AutoplaySwi
                        img1="image/HandWritten/swap/1.webp"
                        alt1="data structure and algorithm handwritten notes"

                        img2="image/HandWritten/swap/2.webp"
                        alt2="dsa constant time handwrittennotes"

                        img3="image/HandWritten/swap/3.webp"
                        alt3="array and linked list handwritten notes pdf"

                        img4="image/HandWritten/swap/4.webp"
                        alt4="linked list array short notes pdf"

                        img5="image/HandWritten/swap/5.webp"
                        alt5="stack and queue notes pdf"
                        
                        img6="image/HandWritten/swap/6.webp"
                        alt6="data structure complete study material pdf"

        
        />
        <div>
            <SwiperStruct
            spv1 = {4}


            img=""
            rm=""
            rsrc=""
            alt=""

            img1="image/HandWritten/dsa.webp"
            rm1 = "DSA"
            rsrc1 = "https://drive.google.com/file/d/1cib7Jy7WOwragLonIMdDpxAhJELCoJ3C/view?usp=drivesdk"
            alt1="data structure and algorithms hand written notes pdf free"

            img2="image/HandWritten/oops.webp"
            rm2 = "OOPs"
            rsrc2="https://drive.google.com/file/d/142ieJS5Lk_3rXbJbGz1LdeJj9Hpfl3I7/view?usp=drivesdk"
            alt2="oops hand written notes pdf free download"

            img3="image/HandWritten/dbms.webp"
            rm3="DBMS"
            rsrc3="https://drive.google.com/file/d/14YatHyKL27U0NymWv5H2et4qUVJviDll/view?usp=drivesdk"
            alt3="DBMS hand written notes pdf free"

            img4="image/HandWritten/operating_system.png"
            rm4="Operating System"
            rsrc4="https://drive.google.com/file/d/1vKjOuEBZCkB7kew5I81-8hLHAhLYW-XP/view?usp=drivesdk"
            alt4="operating system handwritten notes free download pdf"

            img5="image/HandWritten/dynamic_programming.png"
            rm5="Dynamic Programming"
            rsrc5="https://drive.google.com/file/d/1vOeZJJBpVhvlcxv_oUi-hhyNj84V7sGo/view?usp=drivesdk"
            alt5="dynamic programming handwritten notes free pdf download"


            img6="image/HandWritten/MachineLearning.webp"
            rm6="Machine Learning"
            rsrc6="https://drive.google.com/file/d/144RaeycebfBQ_PPdoNmBLA2ME071xvaa/view?usp=drivesdk"
            alt6="Machine Learning hand written notes"

            /> 

<SwiperStruct
            spv1 = {4}


            img=""
            rm=""
            rsrc=""
            alt=""

            img1="image/HandWritten/python.webp"
            rm1 = "Python"
            rsrc1 = "https://drive.google.com/file/d/141oRGi-BJlZBLdkdp8kNZ84NUY4iiGee/view?usp=drivesdk"
            alt1="python notes pdf"

            img2="image/HandWritten/javascript.webp"
            rm2 = "Javascript"
            rsrc2="https://drive.google.com/file/d/143RmzfoNWgPlRFF8Mtrrfazpi-IXnCkv/view?usp=drivesdk"
            alt2="javascript notes pdf handwritten"

            img3="image/HandWritten/java.webp"
            rm3="java"
            rsrc3="https://drive.google.com/file/d/1v4MneltcstqaM5nWP2Sx_BFF8LKXF9RB/view?usp=drivesdk"
            alt3="java notes pdf download free"

            img4="image/HandWritten/cpp.webp"
            rm4="C++"
            rsrc4=""
            alt4="cpp c++ notes pdf"
            
            img5="image/HandWritten/php.webp"
            rm5="PHP"
            rsrc5="https://drive.google.com/file/d/1aYoGe0L6aFBUOCS6AhTews1Nr0MxsGk-/view?usp=drivesdk"
            alt5="php notes pdf"
             
            /> 

<SwiperStruct
            spv1 = {4}


            img=""
            rm=""
            rsrc=""

            img1="image/HandWritten/BitMani.webp"
            rm1 = "Bit Manipulation"
            rsrc1 = "https://drive.google.com/file/d/14McieVA9-BglbJM8gFVg5kspG90bxEdQ/view?usp=drivesdk"
            alt1="bit manipulation notes pdf"

            img2="image/HandWritten/stl.webp"
            rm2 = "c++ STL"
            rsrc2="https://drive.google.com/file/d/14BQuSRJ9tLRrScPlgADpeYJtmGwLtZ9y/view?usp=drivesdk"
            alt2="cpp stl c++ stl pdf notes free"

            img3="image/RoadMap/html.webp"
            rm3="HTML"
            rsrc3="https://drive.google.com/file/d/15AdPo6Q2mp40vS1nUlzmWP0qUGNqLLLE/view?usp=drivesdk"
            alt3="html logo png , html handwritten notes pdf free download"

            img4="image/RoadMap/css.webp"
            rm4="CSS"
            rsrc4="https://drive.google.com/file/d/14w3j2WUKskqo1tqkBgk0tk0Az25Xr6qM/view?usp=drivesdk"
            alt4="css logo png, css handwritten notes for free pdf download"


            /> 

<SwiperStruct
            spv1 = {4}


            img=""
            rm=""
            rsrc=""

            img1="image/HandWritten/React.webp"
            rm1 = "React Js"
            rsrc1 = "https://drive.google.com/file/d/1563i2-HPaoUnNmQjVs_jFoocfbf1Dxjh/view?usp=drivesdk"
            alt1="reactjs pdf notes download"

            img2="image/HandWritten/Angular.webp"
            rm2 = "Angular"
            rsrc2="https://drive.google.com/file/d/155f4yWaAh9a0DzAuUtcikg1gQzCk0kiF/view?usp=drivesdk"
            alt2="angular pdf notes free download"

            img3="image/HandWritten/nodejs.webp"
            rm3="Node.js"
            rsrc3="https://drive.google.com/file/d/14ruLA3Sxod0AAv9DYNEZ3bJhMZSnX6Nn/view?usp=drivesdk"
            alt = "node js pdf handwritten notes"

            img4="image/HandWritten/MongoDb.webp"
            rm4="Mongo-db"
            rsrc4="https://drive.google.com/file/d/14tIQv7NnQFP__10ppqAdklguUjpoUcW2/view?usp=drivesdk"
            alt4="mongo db notes pdf mongo"

            img5=""
            rm5=""
            rsrc5=""
            alt5=""

            /> 



        </div>

    </>
  )
}

export default Handnotes;
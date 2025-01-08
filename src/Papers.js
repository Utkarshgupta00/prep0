import React from 'react'
import Branch from './component/Branches/Branch'
import Sports from './component/Sports'
import PapersImg from './Images/Papers/PapersImg.webp'
import PapersBanner from './Images/Papers/papersbanner.webp'
import { Helmet } from 'react-helmet'
const Papers = () => {
  return (
    <>        

        <Helmet>
            <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2105585555520096" crossorigin="anonymous"></script>
            </head>
            <title>Aktu Previous Years</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="aktu previous years, aktu all previous question papers, question papers aktu last 10 years" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet> 



        <Branch
            src={PapersBanner}
            to1="/previous-year-question-paper-btech-aktu/mechanical-engineering"
            to2="/previous-year-question-paper-btech-aktu/electrical-engineering"
            to3="/previous-year-question-paper-btech-aktu/information-technology"
            to4="/previous-year-question-paper-btech-aktu/cse"
            to5="/previous-year-question-paper-btech-aktu/civil-engineering"
            to6="/previous-year-question-paper-btech-aktu/civil-engineering"
        />




        <Sports
            //dynamic slides per view
            spv = {4}
            year="Btech 1st year"
            images1={PapersImg}
            


            //Mechanical subjects for 1st year
            msub1="Physics-1"
            msub2="Chemistry-1"
            msub3="Mathematics-l"
            msub4="Engineering-Mechanics"
            msub5="Chemistry-2"
            msub6="Mathematics-2"
            msub7="Physics-2"
            msub8="Basic_Electrical"
            msub9="Basic_Mechanical"
            msub10="C-Programming"

            //mechanical 1st pdf drive links

            msrc1="https://drive.google.com/file/d/1U1wwVEajcMdGn_1draHVJGf1wFHqTRRK/view?usp=drivesdk"
            msrc2="https://drive.google.com/file/d/1U9-Ymq9YzV5OS7DTjgTQphj1uWSbrRpU/view?usp=drivesdk"
            msrc3="https://drive.google.com/file/d/1TtrBylUtA8Fl7RepgGBZ8uyFgaPVZCIf/view?usp=drivesdk"
            msrc4=""
            msrc5="https://drive.google.com/file/d/1U7N0w1jRevTRGAxm6RpBdKEZXR484Lz0/view?usp=drivesdk"
            msrc6="https://drive.google.com/file/d/1U1Sqv6E56VW88qLRzkMvLnZwWqv0hxtn/view?usp=drivesdk"
            msrc7="https://drive.google.com/file/d/1U6ZwJcr4eCXluccd5Gdel8rSroTbobOh/view?usp=drivesdk"
            msrc8="https://drive.google.com/file/d/1ULDOph-EpRTv7RZI2o73Iw-mI7P3A9t8/view?usp=drivesdk"
            msrc9="https://drive.google.com/file/d/1UF-S5dCXDG7AGXxBGXj-wWPpSCA_sT28/view?usp=drivesdk"
            msrc10="https://drive.google.com/file/d/1UTdKJs9os4cG1chfHodYOBogvnw8ilvL/view?usp=drivesdk"

//..................................................................................................................................................
            
            //electrical subjects 1st year
            esub1="Physics-1"
            esub2="Chemistry-1"
            esub3="Mathematics-l"
            esub4="Engineering-Mechanics"
            esub5="Chemistry-2"
            esub6="Mathematics-2"
            esub7="Physics-2"
            esub8="Basic_Electrical"
            esub9="Basic_Mechanical"
            esub10="C-Programming"

            //electrical links for 1st year
            esrc1="https://drive.google.com/file/d/1U1wwVEajcMdGn_1draHVJGf1wFHqTRRK/view?usp=drivesdk"
            esrc2="https://drive.google.com/file/d/1U9-Ymq9YzV5OS7DTjgTQphj1uWSbrRpU/view?usp=drivesdk"
            esrc3="https://drive.google.com/file/d/1TtrBylUtA8Fl7RepgGBZ8uyFgaPVZCIf/view?usp=drivesdk"
            esrc4=""
            esrc5="https://drive.google.com/file/d/1U7N0w1jRevTRGAxm6RpBdKEZXR484Lz0/view?usp=drivesdk"
            esrc6="https://drive.google.com/file/d/1U1Sqv6E56VW88qLRzkMvLnZwWqv0hxtn/view?usp=drivesdk"
            esrc7="https://drive.google.com/file/d/1U6ZwJcr4eCXluccd5Gdel8rSroTbobOh/view?usp=drivesdk"
            esrc8="https://drive.google.com/file/d/1ULDOph-EpRTv7RZI2o73Iw-mI7P3A9t8/view?usp=drivesdk"
            esrc9="https://drive.google.com/file/d/1UF-S5dCXDG7AGXxBGXj-wWPpSCA_sT28/view?usp=drivesdk"
            esrc10="https://drive.google.com/file/d/1UTdKJs9os4cG1chfHodYOBogvnw8ilvL/view?usp=drivesdk"


//..............................................................................................................................................
            //chemical subjects 1st year
            csub1="Physics-1"
            csub2="Chemistry-1"
            csub3="Mathematics-l"
            csub4="Engineering-Mechanics"
            csub5="Chemistry-2"
            csub6="Mathematics-2"
            csub7="Physics-2"
            csub8="Basic_Electrical"
            csub9="Basic_Mechanical"
            csub10="C-Programming"

            //chemical links for 1st year
            csrc1="https://drive.google.com/file/d/1U1wwVEajcMdGn_1draHVJGf1wFHqTRRK/view?usp=drivesdk"
            csrc2="https://drive.google.com/file/d/1U9-Ymq9YzV5OS7DTjgTQphj1uWSbrRpU/view?usp=drivesdk"
            csrc3="https://drive.google.com/file/d/1TtrBylUtA8Fl7RepgGBZ8uyFgaPVZCIf/view?usp=drivesdk"
            csrc4=""
            csrc5="https://drive.google.com/file/d/1U7N0w1jRevTRGAxm6RpBdKEZXR484Lz0/view?usp=drivesdk"
            csrc6="https://drive.google.com/file/d/1U1Sqv6E56VW88qLRzkMvLnZwWqv0hxtn/view?usp=drivesdk"
            csrc7="https://drive.google.com/file/d/1U6ZwJcr4eCXluccd5Gdel8rSroTbobOh/view?usp=drivesdk"
            csrc8="https://drive.google.com/file/d/1ULDOph-EpRTv7RZI2o73Iw-mI7P3A9t8/view?usp=drivesdk"
            csrc9="https://drive.google.com/file/d/1UF-S5dCXDG7AGXxBGXj-wWPpSCA_sT28/view?usp=drivesdk"
            csrc10="https://drive.google.com/file/d/1UTdKJs9os4cG1chfHodYOBogvnw8ilvL/view?usp=drivesdk"

//........................................................................................................................................
            //Information subjects for 1st year

            Isub1="Physics-1"
            Isub2="Chemistry-1"
            Isub3="Mathematics-l"
            Isub4="Engineering-Mechanics"
            Isub5="Chemistry-2"
            Isub6="Mathematics-2"
            Isub7="Physics-2"
            Isub8="Basic_Electrical"
            Isub9="Basic_Mechanical"
            Isub10="C-Programming"

            //chemical links for 1st year
            Isrc1="https://drive.google.com/file/d/1U1wwVEajcMdGn_1draHVJGf1wFHqTRRK/view?usp=drivesdk"
            Isrc2="https://drive.google.com/file/d/1U9-Ymq9YzV5OS7DTjgTQphj1uWSbrRpU/view?usp=drivesdk"
            Isrc3="https://drive.google.com/file/d/1TtrBylUtA8Fl7RepgGBZ8uyFgaPVZCIf/view?usp=drivesdk"
            Isrc4=""
            Isrc5="https://drive.google.com/file/d/1U7N0w1jRevTRGAxm6RpBdKEZXR484Lz0/view?usp=drivesdk"
            Isrc6="https://drive.google.com/file/d/1U1Sqv6E56VW88qLRzkMvLnZwWqv0hxtn/view?usp=drivesdk"
            Isrc7="https://drive.google.com/file/d/1U6ZwJcr4eCXluccd5Gdel8rSroTbobOh/view?usp=drivesdk"
            Isrc8="https://drive.google.com/file/d/1ULDOph-EpRTv7RZI2o73Iw-mI7P3A9t8/view?usp=drivesdk"
            Isrc9="https://drive.google.com/file/d/1UF-S5dCXDG7AGXxBGXj-wWPpSCA_sT28/view?usp=drivesdk"
            Isrc10="https://drive.google.com/file/d/1UTdKJs9os4cG1chfHodYOBogvnw8ilvL/view?usp=drivesdk"

//.....................................................................................................................................
            



            csesub1="Physics-1"
            csesub2="Chemistry-1"
            csesub3="Mathematics-l"
            csesub4="Engineering-Mechanics"
            csesub5="Chemistry-2"
            csesub6="Mathematics-2"
            csesub7="Physics-2"
            csesub8="Basic_Electrical"
            csesub9="Basic_Mechanical"
            csesub10="C-Programming"

            //chemical links for 1st year
            csesrc1="https://drive.google.com/file/d/1U1wwVEajcMdGn_1draHVJGf1wFHqTRRK/view?usp=drivesdk"
            csesrc2="https://drive.google.com/file/d/1U9-Ymq9YzV5OS7DTjgTQphj1uWSbrRpU/view?usp=drivesdk"
            csesrc3="https://drive.google.com/file/d/1TtrBylUtA8Fl7RepgGBZ8uyFgaPVZCIf/view?usp=drivesdk"
            csesrc4=""
            csesrc5="https://drive.google.com/file/d/1U7N0w1jRevTRGAxm6RpBdKEZXR484Lz0/view?usp=drivesdk"
            csesrc6="https://drive.google.com/file/d/1U1Sqv6E56VW88qLRzkMvLnZwWqv0hxtn/view?usp=drivesdk"
            csesrc7="https://drive.google.com/file/d/1U6ZwJcr4eCXluccd5Gdel8rSroTbobOh/view?usp=drivesdk"
            csesrc8="https://drive.google.com/file/d/1ULDOph-EpRTv7RZI2o73Iw-mI7P3A9t8/view?usp=drivesdk"
            csesrc9="https://drive.google.com/file/d/1UF-S5dCXDG7AGXxBGXj-wWPpSCA_sT28/view?usp=drivesdk"
            csesrc10="https://drive.google.com/file/d/1UTdKJs9os4cG1chfHodYOBogvnw8ilvL/view?usp=drivesdk"
//.........................................................................................................................
            
            civsub1="Physics-1"
            civsub2="Chemistry-1"
            civsub3="Mathematics-l"
            civsub4="Engineering-Mechanics"
            civsub5="Chemistry-2"
            civsub6="Mathematics-2"
            civsub7="Physics-2"
            civsub8="Basic_Electrical"
            civsub9="Basic_Mechanical"
            civsub10="C-Programming"

            //chemical links for 1st year
            civsrc1="https://drive.google.com/file/d/1U1wwVEajcMdGn_1draHVJGf1wFHqTRRK/view?usp=drivesdk"
            civsrc2="https://drive.google.com/file/d/1U9-Ymq9YzV5OS7DTjgTQphj1uWSbrRpU/view?usp=drivesdk"
            civsrc3="https://drive.google.com/file/d/1TtrBylUtA8Fl7RepgGBZ8uyFgaPVZCIf/view?usp=drivesdk"
            civsrc4=""
            civsrc5="https://drive.google.com/file/d/1U7N0w1jRevTRGAxm6RpBdKEZXR484Lz0/view?usp=drivesdk"
            civsrc6="https://drive.google.com/file/d/1U1Sqv6E56VW88qLRzkMvLnZwWqv0hxtn/view?usp=drivesdk"
            civsrc7="https://drive.google.com/file/d/1U6ZwJcr4eCXluccd5Gdel8rSroTbobOh/view?usp=drivesdk"
            civsrc8="https://drive.google.com/file/d/1ULDOph-EpRTv7RZI2o73Iw-mI7P3A9t8/view?usp=drivesdk"
            civsrc9="https://drive.google.com/file/d/1UF-S5dCXDG7AGXxBGXj-wWPpSCA_sT28/view?usp=drivesdk"
            civsrc10="https://drive.google.com/file/d/1UTdKJs9os4cG1chfHodYOBogvnw8ilvL/view?usp=drivesdk"
        />

        <Sports
            year="Btech 2nd year"


            //dynamic slides per view
            images1={PapersImg}
            spv = {4}
            
            // Mechanical subjects for 2nd year
            msub1="Applied Thermo"
            msub2="Manufacturing"
            msub3="Engineering Materials"
            msub4="fluid Mechanics"
            msub5="Mathematics-3"
            msub6="Energy Science"
            msub7="Universal Human"
            msub8 ="Technical communication"             

            //Mechanical 2nd year drive links
            msrc1="https://drive.google.com/file/d/1Ufl07uiwF8kvjMkObJVuRPdznqkKVE5z/view?usp=drivesdk"
            msrc2=""
            msrc3=""
            msrc4=""
            msrc5=""
            msrc6=""
            msrc7=""
            msrc8=""
            msrc9=""
            msrc10=""

//......................................................................................................................................................
            
            //electrical subjects 2nd year
            esub1="Electrical Machines"
            esub2="EFT"
            esub3="Css"
            esub4="Basic Signal System"
            esub5="Digital Electronics"
            esub6="Maths-4"
            esub7="Technical Communication" 
            esub8="Human Values" 

            //electrical links for 2nd year
            esrc1=""
            esrc2=""
            esrc3=""
            esrc4=""
            esrc5=""
            esrc6=""
            esrc7=""
            esrc8=""
            esrc9=""
            esrc10=""



//..............................................................................................................................................................................................
            //chemical subjects 2nd year
            csub1="Physics"
            csub2="Chemistry"
            csub3="Mathematics-l"
            csub4="Soft-skill"
            csub5="Programming"
            csub6="Basic ELectrical"
            csub7=""

            //chemical links for 2nd year
            csrc1=""
            csrc2=""
            csrc3=""
            csrc4=""
            csrc5=""
            csrc6=""
            csrc7=""
            csrc8=""
            csrc9=""
            csrc10=""



//..............................................................................................................................

            //Information subjects for 2nd year
            Isub1="DBMS"
            Isub2="Analog_elctronics"
            Isub3="Operating_system"
            Isub4="OOps"
            Isub5="Applied_Maths 3"
            Isub6="Digital Electronics"
            Isub7="Management Information"
            Isub8="Computer Graphics"
            Isub9="Communication System"
            Isub10="Discrete Mathematics"

            //Information links for 2nd year
            Isrc1=""
            Isrc2=""
            Isrc3=""
            Isrc4=""
            Isrc5=""
            Isrc6=""
            Isrc7=""
            Isrc8=""
            Isrc9=""
            Isrc10=""

//.....................................................................................................................................
        

            //computer subjects for 2nd year
            csesub1="COA"
            csesub2="Css"
            csesub3="Data Structure"
            csesub4="DSTL"
            csesub5="Human Values"
            csesub6="Maths_4"
            csesub7="MP"
            csesub8="OS"
            csesub9="PP"
            csesub10="Technical Communication"
            csesub11="Theory of Automat"

            //computer links for 2nd year
            csesrc1=""
            csesrc2=""
            csesrc3=""
            csesrc4=""
            csesrc5=""
            csesrc6=""
            csesrc7=""
            csesrc8=""
            csesrc9=""
            csesrc10=""
//.........................................................................................................................
            
            //civil subjects for 2nd year
            civsub1="Css"
            civsub2="Fluid Mechanics"
            civsub3="Engineering Mechanics"
            civsub4="Human Values"
            civsub5="Math 3"
            civsub6="PP"
            civsub7="Surveying"
            civsub8="Technical Com"

            //civil links for 2nd year
            civsrc1=""
            civsrc2=""
            civsrc3=""
            civsrc4=""
            civsrc5=""
            civsrc6=""
            civsrc7=""
            civsrc8=""
            civsrc9=""
            civsrc10=""

        />

        <Sports
            year="Btech 3rd year"


            //dynamic slides per view
            images1={PapersImg}
            spv = {4}      
            

            //Mechanical subjects for 3rd year
            msub1="Heat-Transfer"
            msub2="SOM"
            msub3="Industrial"
            msub4="Advanced_Welding"
            msub5="CIM"
            msub6="Theory Of Machines"
            msub7=""
            msub8="Automotive-chases"
            msub9="Mechanical Vibration"
            //Mechanical links for 3rd year
            msrc1=""
            msrc2=""
            msrc3=""
            msrc4=""
            msrc5=""
            msrc6=""
            msrc7=""
            msrc8=""
            msrc9=""
            msrc10=""


            //electrical subjects 3rd year
            esub1="Control System"
            esub2="Electrical Machines-2"
            esub3="Digital Signal"
            esub4="Microprocessor"
            esub5="Power Electronics"
            esub6="Power-system 1"
            esub7="Power system Analysis"
            esub8="Robotics"
            esub9 = "Sensors Transducers"
            esub10 = "Special Electrical Machines"

            //electrical links for 3rd year
            esrc1=""
            esrc2=""
            esrc3=""
            esrc4=""
            esrc5=""
            esrc6=""
            esrc7=""
            esrc8=""
            esrc9=""
            esrc10=""
            


            //chemical subjects 3rd year
            csub1="Physics"
            csub2="Chemistry"
            csub3="Mathematics-l"
            csub4="Soft-skill"
            csub5="Programming"
            csub6="Basic ELectrical"
            csub7=""

            //chemical links for 3rd year
            csrc1=""
            csrc2=""
            csrc3=""
            csrc4=""
            csrc5=""
            csrc6=""
            csrc7=""
            csrc8=""
            csrc9=""
            csrc10=""
//..............................................................................................................................

            //Information subjects for 3rd year
            Isub1="Software Engineering"
            Isub2="VHDL Programming"
            Isub3="Computer Architecture"
            Isub4="Dc & Cn"
            Isub5="Java Programming"
            Isub6="Artificial Intelligence"
            Isub7="SPM"
            Isub8="Information security"
            Isub9="GRid Computing"
            Isub10="Mobile Computing"

            //Information links for 3rd year
            Isrc1=""
            Isrc2=""
            Isrc3=""
            Isrc4=""
            Isrc5=""
            Isrc6=""
            Isrc7=""
            Isrc8=""
            Isrc9=""
            Isrc10=""

//.....................................................................................................................................
        

            //computer subjects for 3rd year
            csesub1="Big Data"
            csesub2="Compiler Design"
            csesub3="Computer Network"
            csesub4="Constitution of India"
            csesub5="DBMS"
            csesub6="DA"
            csesub7="Indian Tradition"
            csesub8="Machine learning"
            csesub9="OOs_design"
            csesub10="Software Engineering"
            csesub11="SPM"
            csesub12="WD"

            //computer links for 3rd year
            csesrc1=""
            csesrc2=""
            csesrc3=""
            csesrc4=""
            csesrc5=""
            csesrc6=""
            csesrc7=""
            csesrc8=""
            csesrc9=""
            csesrc10=""
//.........................................................................................................................
            
            //civil subjects for 3rd year
            civsub1="COI"
            civsub2="Design of Concrete Structure"
            civsub3="Engineering Hydrology"
            civsub4="Environmental"
            civsub5="Air & Noise"
            civsub6="Concrete Technology"
            civsub7="GeoTechnical Engineering"
            civsub8="Indian Tradition"
            civsub9="QTY ESTIMATION"
            civsub10="Structural Analysis"

            //civil links for  ye3rdar
            civsrc1=""
            civsrc2=""
            civsrc3=""
            civsrc4=""
            civsrc5=""
            civsrc6=""
            civsrc7=""
            civsrc8=""
            civsrc9=""
            civsrc10=""
        />




        <Sports
            spv={4}
            year="Btech 4th year"
            images1={PapersImg}

            // Mechanica subjects for 4th year
            msub1="Automation & RObotics"
            msub2="CAD/CAM"
            msub3="Machine Learning"
            msub4="Power Plant"
            msub5="Operational"
            msub6="Renewable Energy"
            msub7=""

            //Mechanical 4th year Drive lInks
            msrc1=""
            msrc2=""
            msrc3=""
            msrc4=""
            msrc5=""
            msrc6=""
            msrc7=""
            msrc8=""
            msrc9=""
            msrc10=""


//...................................................................................................................................
            //electrical subjects 4th year
            esub1="Control System"
            esub2="Electrical Machines-2"
            esub3="Digital Signal"
            esub4="Microprocessor"
            esub5="Power Electronics"
            esub6="Power-system 1"
            esub7="Power system Analysis"
            esub8="Robotics"
            esub9 = "Sensors Transducers"
            esub10 = "Special Electrical Machines"

            //electrical links 4th year

            esrc1=""
            esrc2=""
            esrc3=""
            esrc4=""
            esrc5=""
            esrc6=""
            esrc7=""
            esrc8=""
            esrc9=""
            esrc10=""


            //chemical subjects 4th year
            csub1="Physics"
            csub2="Chemistry"
            csub3="Mathematics-l"
            csub4="Soft-skill"
            csub5="Programming"
            csub6="Basic ELectrical"
            csub7=""

            //chemical links for 4th year
            csrc1=""
            csrc2=""
            csrc3=""
            csrc4=""
            csrc5=""
            csrc6=""
            csrc7=""
            csrc8=""
            csrc9=""
            csrc10=""
//..............................................................................................................................

            //Information subjects for 4th year

            Isub1="Physics"
            Isub2="Chemistry"
            Isub3="Mathematics-l"
            Isub4="Soft-skill"
            Isub5="Programming"
            Isub6="Basic ELectrical"
            Isub7=""

            //Information links for 4th year
            Isrc1=""
            Isrc2=""
            Isrc3=""
            Isrc4=""
            Isrc5=""
            Isrc6=""
            Isrc7=""
            Isrc8=""
            Isrc9=""
            Isrc10=""

//.....................................................................................................................................
        

            //computer subjects for 4th year
            csesub1="Artificial Intelligence"
            csesub2="Cloud Computing"
            csesub3="Deep Learning"
            csesub4="Distributed system"
            csesub5="Mobile Computing"
            csesub6="Project Management"
            csesub7="Renewable Resources"
            csesub8="Software Testing"

            //computer links for 4th year
            csesrc1=""
            csesrc2=""
            csesrc3=""
            csesrc4=""
            csesrc5=""
            csesrc6=""
            csesrc7=""
            csesrc8=""
            csesrc9=""
            csesrc10=""
//.........................................................................................................................
            
            //civil subjects for 4th year
            civsub1="Physics"
            civsub2="Chemistry"
            civsub3="Mathematics-l"
            civsub4="Soft-skill"
            civsub5="Programming"
            civsub6="Basic ELectrical"
            civsub7=""

            //civil links for 4th year
            civsrc1=""
            civsrc2=""
            civsrc3=""
            civsrc4=""
            civsrc5=""
            civsrc6=""
            civsrc7=""
            civsrc8=""
            civsrc9=""
            civsrc10=""









        />
        
        
        
    
    </>    
    
  )
}

export default Papers
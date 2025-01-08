import React from 'react'
import q from './Images/QuantumBook.webp'
import Sports from './component/Sports'
import Branch from './component/Branches/Branch';
import Quantum from './Images/qantum.webp'
import { Helmet } from 'react-helmet';



const Qantum = (props) => {
  return (

    <>        

        <Helmet>

            <title>Aktu Quantum Books</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="aktu quantum books for mechanical engineering, electrical engineering, computer science and engineering,civil engineering" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />
        </Helmet>



        <Branch
            src={Quantum}
            alt="aktu quantum books pdf free download"
            to1="/aktu-quantum-books/mechanical-engineering"
            to2="/aktu-quantum-books/electrical-engineering"
            to3="/aktu-quantum-books/information-technology"
            to4="/aktu-quantum-books/cse"
            to5="/aktu-quantum-books/civil-engineering"
            to6="/aktu-quantum-books/civil-engineering"
        />




        <Sports
            images1={q}
            //dynamic slides per view
            spv = {4}
            year="Btech 1st year"
            


            //Mechanical subjects for 1st year
            msub1="Physics"
            msub2="Chemistry"
            msub3="Mathematics-l"
            msub4="Soft-skill"
            msub5="Programming"
            msub6="Basic Electrical"
            msub7=""


            //alt tages
            malt1="mechanical engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            malt2="mechanical engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            malt3="mechanical engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            malt4="mechanical engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            malt5="mechanical engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            malt6="mechanical engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            malt7=""

            ealt1="electrical engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            ealt2="electrical engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            ealt3="electrical engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            ealt4="electrical engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            ealt5="electrical engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            ealt6="electrical engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            ealt7=""

            csealt1="computer science engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            csealt2="computer science engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            csealt3="computer science engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            csealt4="computer science engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            csealt5="computer science engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            csealt6="computer science engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            csealt7=""

            civalt1="civil engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            civalt2="civil engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            civalt3="civil engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            civalt4="civil engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            civalt5="civil engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            civalt6="civil engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            civalt7=""

            eloalt1="electronincs engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            eloalt2="electronincs engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            eloalt3="electronincs engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            eloalt4="electronincs engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            eloalt5="electronincs engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            eloalt6="electronincs engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            eloalt7=""




            //mechanical 1st year img links
            // mimg1 = "image/QuantumFront/.jpeg"
            // mimg2 = "image/QuantumFront/.jpeg"
            // mimg3 = "image/QuantumFront/.jpeg"
            // mimg4 = "image/QuantumFront/.jpeg"
            // mimg5 = "image/QuantumFront/.jpeg"
            // mimg6 = "image/QuantumFront/.jpeg"
            // mimg7 = "image/QuantumFront/.jpeg"
            // mimg8 = "image/QuantumFront/.jpeg"
            // mimg9 = "image/QuantumFront/.jpeg"
            // mimg10 ="image/QuantumFront/.jpeg"
            //mechanical 1st pdf drive links
            msrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            msrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            msrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            msrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            msrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            msrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            msrc7=""

//..................................................................................................................................................
            
            //electrical subjects 1st year
            esub1="Physics"
            esub2="Chemistry"
            esub3="Mathematics-l"
            esub4="Soft-skill"
            esub5="Programming"
            esub6="Basic ELectrical"
            esub7=""
            //electrical images for 1st year
            // eimg1 = "image/QuantumFront/.jpeg"
            // eimg2 = "image/QuantumFront/.jpeg"
            // eimg3 = "image/QuantumFront/.jpeg"
            // eimg4 = "image/QuantumFront/.jpeg"
            // eimg5 = "image/QuantumFront/.jpeg"
            // eimg6 = "image/QuantumFront/.jpeg"
            // eimg7 = "image/QuantumFront/.jpeg"
            // eimg8 = "image/QuantumFront/.jpeg"
            // eimg9 = "image/QuantumFront/.jpeg"
            // eimg10 ="image/QuantumFront/.jpeg"
            //electrical links for 1st year
            esrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            esrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            esrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            esrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            esrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            esrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            esrc7=""

//..............................................................................................................................................
            //chemical subjects 1st year
            csub1="Physics"
            csub2="Chemistry"
            csub3="Mathematics-l"
            csub4="Soft-skill"
            csub5="Programming"
            csub6="Basic ELectrical"
            csub7=""
            //chemical images for 1st year
            // cimg1 = "image/QuantumFront/.jpeg"
            // cimg2 = "image/QuantumFront/.jpeg"
            // cimg3 = "image/QuantumFront/.jpeg"
            // cimg4 = "image/QuantumFront/.jpeg"
            // cimg5 = "image/QuantumFront/.jpeg"
            // cimg6 = "image/QuantumFront/.jpeg"
            // cimg7 = "image/QuantumFront/.jpeg"
            // cimg8 = "image/QuantumFront/.jpeg"
            // cimg9 = "image/QuantumFront/.jpeg"
            // cimg10 ="image/QuantumFront/.jpeg"
            //chemical links for 1st year
            csrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            csrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            csrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            csrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            csrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            csrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            csrc7=""

//........................................................................................................................................
            //Information subjects for 1st year

            Isub1="Physics"
            Isub2="Chemistry"
            Isub3="Mathematics-l"
            Isub4="Soft-skill"
            Isub5="Programming"
            Isub6="Basic ELectrical"
            Isub7=""
            //chemical images for 1st year
            // Iimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // Iimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // Iimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // Iimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // Iimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // Iimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // Iimg7 = ""
            // Iimg8 = ""
            //chemical links for 1st year
            Isrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            Isrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            Isrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            Isrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            Isrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            Isrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            Isrc7=""

//.....................................................................................................................................
        

            //computer subjects for 1st year
            csesub1="Physics"
            csesub2="Chemistry"
            csesub3="Mathematics-l"
            csesub4="Soft-skill"
            csesub5="Programming"
            csesub6="Basic ELectrical"
            csesub7=""
            //computer images for 1st year
            // cseimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // cseimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // cseimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // cseimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // cseimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // cseimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // cseimg7 = ""
            // cseimg8 = ""
            //computer links for 1st year
            csesrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            csesrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            csesrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            csesrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            csesrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            csesrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            csesrc7=""
//.........................................................................................................................
            
            //civil subjects for 1st year
            civsub1="Physics"
            civsub2="Chemistry"
            civsub3="Mathematics-l"
            civsub4="Soft-skill"
            civsub5="Programming"
            civsub6="Basic ELectrical"
            civsub7=""
            //chemical images for 1st year
            // civimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // civimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // civimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // civimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // civimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // civimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // civimg7 = ""
            // civimg8 = ""
            //chemical links for 1st year
            civsrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            civsrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            civsrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            civsrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            civsrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            civsrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            civsrc7=""

//...............................................................................................................................................................
            //electronics subjects for 1st year
            elosub1="Physics"
            elosub2="Chemistry"
            elosub3="Mathematics-l"
            elosub4="Soft-skill"
            elosub5="Programming"
            elosub6="Basic ELectrical"
            elosub7=""
            //electornics links for 1st year
            elosrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            elosrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            elosrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            elosrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            elosrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            elosrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            elosrc7=""
        />






        <Sports
            year="Btech 2nd year"

            images1={q}
            //dynamic slides per view
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
            
                        //alt tages
            malt1="mechanical engineering second year quantum book, aktu applied thermodynamics quantum book, applied thermodynamics quantum book pdf"
            malt2="mechanical engineering second year quantum book, aktu manufacturing process quantum book, manufacturing process quantum book pdf"
            malt3="mechanical engineering second year quantum book, aktu engineering materials quantum book, engineering materials quantum book pdf"
            malt4="mechanical engineering second year quantum book, aktu fluid mechanics and machines quantum book, fluid mechanics and machines quantum book pdf"
            malt5="mechanical engineering second year quantum book, aktu mathematics 3 quantum book, mathematics 3 quantum book pdf"
            malt6="mechanical engineering second year quantum book, aktu energy science quantum book, energy science quantum book pdf"
            malt7="mechanical engineering second year quantum book, aktu universal human values quantum book,universal human values  quantum book pdf"

            ealt1="electrical engineering second year quantum book, aktu electrical machines quantum book, electrical machines quantum book pdf"
            ealt2="electrical engineering second year quantum book, aktu electromagnetic field theory , eft quantum book, electromagnetic field theory , eft quantum book pdf"
            ealt3="electrical engineering second year quantum book, aktu  css computer security system quantum book, css computer security system quantum book pdf"
            ealt4="electrical engineering second year quantum book, aktu basic signal system quantum book, basic signal system quantum book pdf"
            ealt5="electrical engineering second year quantum book, aktu digital electronics quantum book, digital electronics quantum book pdf"
            ealt6="electrical engineering second year quantum book, aktu mathematics-4 maths 4 quantum book, mathematics-4 maths 4 quantum book pdf"
            ealt7="electrical engineering second year quantum book, aktu technical communication quantum book prep0, technical communication quantum book prep0 pdf"
            ealt8="electrical engineering second year quantum book, aktu human values quantum book prep0, human values quantum book prep0 pdf"

            csealt1="computer science engineering second year quantum book, aktu dstl quantum book, dstl quantum book pdf"
            csealt2="computer science engineering second year quantum book, aktu human values quantum book, human values quantum book pdf"
            csealt3="computer science engineering second year quantum book, aktu  maths 4  quantum book, maths 4  quantum book pdf"
            csealt4="computer science engineering second year quantum book, aktu mp quantum book, mp quantum book pdf"
            csealt5="computer science engineering second year quantum book,operating system aktu  quantum book, operating system  quantum book pdf"
            csealt6="computer science engineering second year quantum book, aktu pp quantum book, pp quantum book pdf"
            csealt7="computer science engineering second year quantum book, aktu technical communication quantum book, technical communication quantum book pdf"

            civalt1="civil engineering second year quantum book, aktu physics quantum book, physics quantum book pdf"
            civalt2="civil engineering second year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            civalt3="civil engineering second year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            civalt4="civil engineering second year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            civalt5="civil engineering second year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            civalt6="civil engineering second year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            civalt7=""

            eloalt1="electronincs engineering second year quantum book, aktu physics quantum book, physics quantum book pdf"
            eloalt2="electronincs engineering second year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            eloalt3="electronincs engineering second year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            eloalt4="electronincs engineering second year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            eloalt5="electronincs engineering second year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            eloalt6="electronincs engineering second year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            eloalt7=""

            //Mechanical 2nd year image links
            // mimg1 = "image/QuantumFront/.jpeg"
            // mimg2 = "image/QuantumFront/.jpeg"
            // mimg3 = "image/QuantumFront/.jpeg"
            // mimg4 = "image/QuantumFront/.jpeg"
            // mimg5 = "image/QuantumFront/.jpeg"
            // mimg6 = "image/QuantumFront/.jpeg"
            // mimg7 = "image/QuantumFront/.jpeg"
            // mimg8 = "image/QuantumFront/.jpeg"
            // mimg9 = "image/QuantumFront/.jpeg"
            // mimg10 ="image/QuantumFront/.jpeg"
            //Mechanical 2nd year drive links
            msrc1="https://drive.google.com/file/d/1zHMyZK0kIDDELyY6F-rnMkJpveAjzy-n/view?usp=drivesdk"
            msrc2="https://drive.google.com/file/d/1zFgwfwuuOD8Zs_WHga5SUPnTZ-qBSvtY/view?usp=drivesdk"
            msrc3="https://drive.google.com/file/d/1zC6tsD1TNZeJxFOlTI1z9HsSx5ZyJZe8/view?usp=drivesdk"
            msrc4="https://drive.google.com/file/d/1zE3r8xA5iRvLtDmLz-KdJFXuUyWg5SwV/view?usp=drivesdk"
            msrc5=""
            msrc6="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XioNxOwGPb1EK5pSrPnibFTwXuPWIt7btjYcyTjqC5vo5C8VqauCh6K3bHbdyk73FHE&usqp=CAU"
            msrc7=""
            msrc8="https://m.media-amazon.com/images/I/71-NQgiYWfL.jpg"

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
            
            //electrical images for 2nd year
            // eimg1 = "image/QuantumFront/.jpeg"
            // eimg2 = "image/QuantumFront/.jpeg"
            // eimg3 = "image/QuantumFront/.jpeg"
            // eimg4 = "image/QuantumFront/.jpeg"
            // eimg5 = "image/QuantumFront/.jpeg"
            // eimg6 = "image/QuantumFront/.jpeg"
            // eimg7 = "image/QuantumFront/.jpeg"
            // eimg8 = "image/QuantumFront/.jpeg"
            // eimg9 = "image/QuantumFront/.jpeg"
            // eimg10 ="image/QuantumFront/.jpeg"
            //electrical links for 2nd year
            esrc1="https://drive.google.com/file/d/17g-12UVBk4rpq_YARgrTrN_gXF5-fzmQ/view?usp=drivesdk"
            esrc2="https://drive.google.com/file/d/17nchrTbpo6uzEfUf9FDf0xW5FVwIjOn0/view?usp=drivesdk"
            esrc3="https://drive.google.com/file/d/17FcOfUFr7jneGCAtohhwuSqRbMyQSLHG/view?usp=drivesdk"
            esrc4="https://drive.google.com/file/d/172EiCVf8MGoGJfflj2IB55JL7aIioM0w/view?usp=drivesdk"
            esrc5="https://drive.google.com/file/d/17inWEUN7v357xd8dPnS1B_GSYrslDwbl/view?usp=drivesdk"
            esrc6="https://drive.google.com/file/d/16QFtGyqCJ7hY5GbNkNDhO5w-GCBzKHWg/view?usp=drivesdk"
            esrc7="https://drive.google.com/file/d/1h9SqS-GO8RCYOJFP2Wy9eQ1Utz6yDaKh/view?usp=drivesdk"
            esrc8="https://drive.google.com/file/d/1lpcQ-69zsctoYllmL768fgXILrFCpiKo/view?usp=drivesdk"

//..............................................................................................................................................................................................
            //chemical subjects 2nd year
            csub1="Physics"
            csub2="Chemistry"
            csub3="Mathematics-l"
            csub4="Soft-skill"
            csub5="Programming"
            csub6="Basic ELectrical"
            csub7=""
            // //chemical images for 2nd year
            // cimg1 = "image/QuantumFront/.jpeg"
            // cimg2 = "image/QuantumFront/.jpeg"
            // cimg3 = "image/QuantumFront/.jpeg"
            // cimg4 = "image/QuantumFront/.jpeg"
            // cimg5 = "image/QuantumFront/.jpeg"
            // cimg6 = "image/QuantumFront/.jpeg"
            // cimg7 = "image/QuantumFront/.jpeg"
            // cimg8 = "image/QuantumFront/.jpeg"
            // cimg9 = "image/QuantumFront/.jpeg"
            // cimg10 ="image/QuantumFront/.jpeg"
            //chemical links for 2nd year
            csrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            csrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            csrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            csrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            csrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            csrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            csrc7=""
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
            //chemical images for 2nd year
            // Iimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // Iimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // Iimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // Iimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // Iimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // Iimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // Iimg7 = ""
            // Iimg8 = ""
            //chemical links for 2nd year
            Isrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            Isrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            Isrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            Isrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            Isrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            Isrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            Isrc7=""

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
            //computer images for 2nd year
            // cseimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // cseimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // cseimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // cseimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // cseimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // cseimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // cseimg7 = ""
            // cseimg8 = ""
            //computer links for 2nd year
            csesrc1= "https://drive.google.com/file/d/1RGqugxsgn5P7KFKT1JVgSVehxiYPOCrl/view?usp=drivesdk"
            csesrc2="https://drive.google.com/file/d/1j1TFGyCBFwpzRF7z7RbIK_LlRr8dXqqi/view?usp=drivesdk"
            csesrc3="https://drive.google.com/file/d/17kfp6TbhNidat7bi9DL9v5S5zg7xNeNj/view?usp=drivesdk"
            csesrc4="https://drive.google.com/file/d/15byC9mMxOVHIP7Tbxyf41UMHSFLU8BIT/view?usp=drivesdk"
            csesrc5="https://drive.google.com/file/d/1lpcQ-69zsctoYllmL768fgXILrFCpiKo/view?usp=drivesdk"
            csesrc6="https://drive.google.com/file/d/16QFtGyqCJ7hY5GbNkNDhO5w-GCBzKHWg/view?usp=drivesdk"
            csesrc7="https://drive.google.com/file/d/1ED4WZcKDDZX5W_yc3fdCItcaEYjZNRJL/view?usp=drivesdk"
            csesrc8="https://drive.google.com/file/d/18rTe73gBpEnAYHaMi4pRU40-kp_VqM6k/view?usp=drivesdk"
            csesrc9="https://drive.google.com/file/d/1Z8ZUt7lpuT3NdSAjF4DQl1uW0T3l7PID/view?usp=drivesdk"
            csesrc10="https://drive.google.com/file/d/1h9SqS-GO8RCYOJFP2Wy9eQ1Utz6yDaKh/view?usp=drivesdk"


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
            //civil images for 2nd year
            civimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            civimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            civimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            civimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            civimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            civimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            civimg7 = ""
            civimg8 = ""
            //civil links for 2nd year
            civsrc1="https://drive.google.com/file/d/1Cj55aaBEQB5DJR8wVvT8-jvVtf0TH1VS/view?usp=drivesdk"
            civsrc2="https://drive.google.com/file/d/1CjFxhSwkUlHBJlPQCgK2gphleXMbzvr9/view?usp=drivesdk"
            civsrc3="https://drive.google.com/file/d/1Cl5dVNXmL6Y52e-AaEe3K0Si1LvrIEF_/view?usp=drivesdk"
            civsrc4="https://drive.google.com/file/d/1CnTApTC8cAjrMCQafXOKDaslzLMrbRWK/view?usp=drivesdk"
            civsrc5="https://drive.google.com/file/d/1Cqtmg3-htApKKXFNilxr5jE7AThsHmeD/view?usp=drivesdk"
            civsrc6="https://drive.google.com/file/d/1D7j9BdMkdo4osmCXmEcBPK75A41uE6MO/view?usp=drivesdk"
            civsrc7="https://drive.google.com/file/d/1CrZ7oeHDl3R1An71sG-VfL7uyCsq-F-s/view?usp=drivesdk"
            civsrc8="https://drive.google.com/file/d/1CtzLwQlRkh9Qqa6hTq-hk4Txlzlsx6BT/view?usp=drivesdk"
            civsrc9=""
            civsrc10=""

//...............................................................................................................................................................
            //electronics subjects for 2nd year
            elosub1="Basic Singnal"
            elosub2="COmmunication Engineering"
            elosub3="Css"
            elosub4="Digital System Design"
            elosub5="Electronic Devices"
            elosub6="Human Values"
            elosub7="Maths 4"
            elosub8="Network Analysis"
            elosub9="PP"
            elosub10="technnical Communication"
            //electornics links for 2nd year
            elosrc1="https://drive.google.com/file/d/1HjIzqNIhxDxG1XHcZ5JeGkjDI2Slsggk/view?usp=drivesdk"
            elosrc2="https://drive.google.com/file/d/1IGBZUx21a_tXsniHEl22I9_fwUTRrg7V/view?usp=drivesdk"
            elosrc3="https://drive.google.com/file/d/1I02tzz0PwlEh7gsOh5AZhuh2cH2ov54r/view?usp=drivesdk"
            elosrc4="https://drive.google.com/file/d/1I-IJVhjGxYvmjuDbArAfEy-ewy1axld4/view?usp=drivesdk"
            elosrc5="https://drive.google.com/file/d/1I6AuGDJyp3UHRrJ9pYTNfyUpP-5E-8sm/view?usp=drivesdk"
            elosrc6="https://drive.google.com/file/d/1lpcQ-69zsctoYllmL768fgXILrFCpiKo/view?usp=drivesdk"
            elosrc7="https://drive.google.com/file/d/16QFtGyqCJ7hY5GbNkNDhO5w-GCBzKHWg/view?usp=drivesdk"
            elosrc8="https://drive.google.com/file/d/1HytYDrkFP7KZ2lddytwJCH3v4qBXBFM_/view?usp=drivesdk"
            elosrc9="https://drive.google.com/file/d/1I8BO76hiIU1Iow0nmeLtpETRrR2ido7s/view?usp=drivesdk"
            elosrc10="https://drive.google.com/file/d/1I7rt5t3JaK0CjOAXdE0-bLLMx9zMUmha/view?usp=drivesdk"
        />




        <Sports          
            year="Btech 3rd year"
            images1={q}

            //dynamic slides per view
            spv = {4}      
            
            //Mechanical 3nd year image links
            // mimg1 = "image/QuantumFront/.jpeg"
            // mimg2 = "image/QuantumFront/.jpeg"
            // mimg3 = "image/QuantumFront/.jpeg"
            // mimg4 = "image/QuantumFront/.jpeg"
            // mimg5 = "image/QuantumFront/.jpeg"
            // mimg6 = "image/QuantumFront/.jpeg"
            // mimg7 = "image/QuantumFront/.jpeg"
            // mimg8 = "image/QuantumFront/.jpeg"
            // mimg9 = "image/QuantumFront/.jpeg"
            // mimg10 ="image/QuantumFront/.jpeg"
            //Mechanical subjects for 3rd year


                        //alt tages
            malt1="mechanical engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            malt2="mechanical engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            malt3="mechanical engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            malt4="mechanical engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            malt5="mechanical engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            malt6="mechanical engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            malt7=""

            ealt1="electrical engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            ealt2="electrical engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            ealt3="electrical engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            ealt4="electrical engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            ealt5="electrical engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            ealt6="electrical engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            ealt7=""

            csealt1="computer science engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            csealt2="computer science engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            csealt3="computer science engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            csealt4="computer science engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            csealt5="computer science engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            csealt6="computer science engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            csealt7=""

            civalt1="civil engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            civalt2="civil engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            civalt3="civil engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            civalt4="civil engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            civalt5="civil engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            civalt6="civil engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            civalt7=""

            eloalt1="electronincs engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            eloalt2="electronincs engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            eloalt3="electronincs engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            eloalt4="electronincs engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            eloalt5="electronincs engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            eloalt6="electronincs engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            eloalt7=""




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
            msrc1="https://drive.google.com/file/d/16UT9-AyKiQ3hO4nuiyTH1XAk0Gc-0v2r/view?usp=drivesdk"
            mscr2="https://drive.google.com/file/d/16eP34FLWE5eHGWui-jonYgHEeRBiroui/view?usp=drivesdk"
            msrc3="https://drive.google.com/file/d/16W25EOMK9PusRhH9mP1eM7Oyrl6JPwK8/view?usp=drivesdk"
            msrc4="https://drive.google.com/file/d/16OQeYZrh9PTb6GqUTPCpVW6fr4ZfWxS4/view?usp=drivesdk"
            msrc5="https://drive.google.com/file/d/16OfH0Fgvhaimq4ZtP3EwjivytKslAAk4/view?usp=drivesdk"
            msrc6="https://drive.google.com/file/d/16gyISELcfYDoeWN_jsljIH4V8sG5my7H/view?usp=drivesdk"
            msrc7=""
            msrc8="https://drive.google.com/file/d/16NCN5V1JqU0I5cvK_d6BpEUXyBV_1yrZ/view?usp=drivesdk"
            msrc9="https://drive.google.com/file/d/16_GpyCc0LX1dSYKUN3QqEb0FMQfeAW8W/view?usp=drivesdk"
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
            //electrical images for 3rd year
            // eimg1 = "image/QuantumFront/.jpeg"
            // eimg2 = "image/QuantumFront/.jpeg"
            // eimg3 = "image/QuantumFront/.jpeg"
            // eimg4 = "image/QuantumFront/.jpeg"
            // eimg5 = "image/QuantumFront/.jpeg"
            // eimg6 = "image/QuantumFront/.jpeg"
            // eimg7 = "image/QuantumFront/.jpeg"
            // eimg8 = "image/QuantumFront/.jpeg"
            // eimg9 = "image/QuantumFront/.jpeg"
            // eimg10 ="image/QuantumFront/.jpeg"
            esrc1="https://drive.google.com/file/d/18_e0dVRuUXvVaKkMSUPcSF2wNer3LZSX/view?usp=drivesdk"
            esrc2="https://drive.google.com/file/d/18YA9H-oLUi0oWDLrYCokYphLl-R-V1EU/view?usp=drivesdk"
            esrc3="https://drive.google.com/file/d/18OMEKQpdSUfD8EnRZzBizWaW7BJ8KTIe/view?usp=drivesdk"
            esrc4="https://drive.google.com/file/d/18atiDOK6tEeRm9CvAqg7-NebdlLDQKnY/view?usp=drivesdk"
            esrc5="https://drive.google.com/file/d/18rPnsaN5MjJnoZtMQJJ2JOV5VXUAKIU_/view?usp=drivesdk"
            esrc6="https://drive.google.com/file/d/18s3Y77IIFhA2bLgNsp8oRHaEI3dFWyRk/view?usp=drivesdk"
            esrc7="https://drive.google.com/file/d/19TcYuW6zGcT1fT0Mk0BEhoGws9f9DFv1/view?usp=drivesdk"
            esrc8="https://drive.google.com/file/d/18tk1tvZaHsewczXv64IOxcR2pdUQt_u-/view?usp=drivesdk"
            esrc9="https://drive.google.com/file/d/18uPXs-cetHtS-PufEqoCByJbaK8OqjbW/view?usp=drivesdk"
            esrc10=""
            


            //chemical subjects 3rd year
            csub1="Physics"
            csub2="Chemistry"
            csub3="Mathematics-l"
            csub4="Soft-skill"
            csub5="Programming"
            csub6="Basic ELectrical"
            csub7=""
            //chemical images for 3rd year
            // cimg1 = "image/QuantumFront/.jpeg"
            // cimg2 = "image/QuantumFront/.jpeg"
            // cimg3 = "image/QuantumFront/.jpeg"
            // cimg4 = "image/QuantumFront/.jpeg"
            // cimg5 = "image/QuantumFront/.jpeg"
            // cimg6 = "image/QuantumFront/.jpeg"
            // cimg7 = "image/QuantumFront/.jpeg"
            // cimg8 = "image/QuantumFront/.jpeg"
            // cimg9 = "image/QuantumFront/.jpeg"
            // cimg10 ="image/QuantumFront/.jpeg"
            //chemical links for 3rd year
            csrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            csrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            csrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            csrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            csrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            csrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            csrc7=""


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
            //Information images for 3rd year
            // Iimg1 = "image/QuantumFront/.jpeg"
            // Iimg2 = "image/QuantumFront/.jpeg"
            // Iimg3 = "image/QuantumFront/.jpeg"
            // Iimg4 = "image/QuantumFront/.jpeg"
            // Iimg5 = "image/QuantumFront/.jpeg"
            // Iimg6 = "image/QuantumFront/.jpeg"
            // Iimg7 = "image/QuantumFront/.jpeg"
            // Iimg8 = "image/QuantumFront/.jpeg"
            // Iimg9 = "image/QuantumFront/.jpeg"
            // Iimg10 ="image/QuantumFront/.jpeg"
            //Information links for 3rd year
            Isrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            Isrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            Isrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            Isrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            Isrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            Isrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            Isrc7=""

            
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
            //computer images for 3rd year
            // cseimg1 = "image/QuantumFront/.jpeg"
            // cseimg2 = "image/QuantumFront/.jpeg"
            // cseimg3 = "image/QuantumFront/.jpeg"
            // cseimg4 = "image/QuantumFront/.jpeg"
            // cseimg5 = "image/QuantumFront/.jpeg"
            // cseimg6 = "image/QuantumFront/.jpeg"
            // cseimg7 = "image/QuantumFront/.jpeg"
            // cseimg8 = "image/QuantumFront/.jpeg"
            // cseimg9 = "image/QuantumFront/.jpeg"
            // cseimg10 ="image/QuantumFront/.jpeg"
            //computer links for 3rd year
            csesrc1="https://drive.google.com/file/d/1ZebHWdoz4v_Ez79FaagxqPw6v112meiN/view?usp=drivesdk"
            csesrc2="https://drive.google.com/file/d/1ue0W7DSPCV8GpZMr4V_WbvzsPFmaU0bs/view?usp=drivesdk"
            csesrc3="https://drive.google.com/file/d/1DwUVZpcDmXLJzGp5TzUyvBP0T_4UJDII/view?usp=drivesdk"
            csesrc4="https://drive.google.com/file/d/12JUKzc4WoV3oxtxF0ll2JYMJuRKcmClm/view?usp=drivesdk"
            csesrc5="https://drive.google.com/file/d/12c9FQWgeP4EH2NXD-fL9cgSFHCmZ06HB/view?usp=drivesdk"
            csesrc6="https://drive.google.com/file/d/1Y508lWuexkW7MGDMXyr-31z-GwKLJnvx/view?usp=drivesdk"
            csesrc7="https://drive.google.com/file/d/1fmRXt8MUkYXaKqcAz4dNgdvLdyqfvkEA/view?usp=drivesdk"
            csesrc8="https://drive.google.com/file/d/13EfehJ72LzS70maF6jBfDbf8A6tn_mkm/view?usp=drivesdk"
            csesrc9="https://drive.google.com/file/d/1TfuXBzkCiwRT7QhNqFqBpuqlfX48e_1b/view?usp=drivesdk"
            csesrc10="https://drive.google.com/file/d/1voiZYBY13Lh7Zjd8n0Jqi9BiixOjTMXL/view?usp=drivesdk"
            csesrc11="https://drive.google.com/file/d/1M1RfNMdRMiyzNZ4dXudvpzlk-ZzgaVFV/view?usp=drivesdk"
            csesrc12="https://drive.google.com/file/d/1FfHWC7n8_idesPuvTdEqm8jyyf52j9L-/view?usp=drivesdk"

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
            //civil images for 3rd year
            // civimg1 = "image/QuantumFront/.jpeg"
            // civimg2 = "image/QuantumFront/.jpeg"
            // civimg3 = "image/QuantumFront/.jpeg"
            // civimg4 = "image/QuantumFront/.jpeg"
            // civimg5 = "image/QuantumFront/.jpeg"
            // civimg6 = "image/QuantumFront/.jpeg"
            // civimg7 = "image/QuantumFront/.jpeg"
            // civimg8 = "image/QuantumFront/.jpeg"
            // civimg9 = "image/QuantumFront/.jpeg"
            // civimg10 ="image/QuantumFront/.jpeg"
            //civil links for  ye3rdar
            civsrc1="https://drive.google.com/file/d/1EsXd5gd0hlJvyIkuy0CLnsrrv_cw9a04/view?usp=drivesdk"
            civsrc2="https://drive.google.com/file/d/1EQMMGWjZKCsn2voLLnOSqYl5rlBCvLBO/view?usp=drivesdk"
            civsrc3="https://drive.google.com/file/d/1EpajjbpZ2BubGG7EQSo003O08xWRG9lh/view?usp=drivesdk"
            civsrc4="https://drive.google.com/file/d/1EexBdumyxho08AsCl4s7OVeG854FMM1q/view?usp=drivesdk"
            civsrc5="https://drive.google.com/file/d/1Evf0fiZX37FYcLJdhs623R6wofrIVgUI/view?usp=drivesdk"
            civsrc6="https://drive.google.com/file/d/1EddQtw6zR5LgegnMr-ujRHLjs_k9AHRo/view?usp=drivesdk"
            civsrc7="https://drive.google.com/file/d/1El4Gs-rr4DEOAjJF_FF2w0HouYd4OOaF/view?usp=drivesdk"
            civsrc8="https://drive.google.com/file/d/1EVOlNWhVIKkPLfaCfwdUso-HqJY5KP63/view?usp=drivesdk"
            civsrc9="https://drive.google.com/file/d/1EgGJq4SHzZ0sU_SBMr8hS6I64IWr8fgH/view?usp=drivesdk"
            civsrc10="https://drive.google.com/file/d/1EfVL15Yg1VP_5RMB_VJAMb0LYp-2pFpe/view?usp=drivesdk"


//...............................................................................................................................................................
            //electronics subjects for 3rd year
            elosub1="DCN"
            elosub2="Digital Communication"
            elosub3="DSP"
            elosub4="ES1"
            elosub5="IC"
            elosub6="Microcontroller"
            elosub7="MicroProcessor"
            elosub8="OfC"
            elosub9=""
            //electornics links for 3rd year
            elosrc1="https://drive.google.com/file/d/1KduRBjkZMdwiR5DGWsaoLil_9blZUtGC/view?usp=drivesdk"
            elosrc2="https://drive.google.com/file/d/1JjNDiveLNzAdrOzOZNy0AEVseIWkEaW8/view?usp=drivesdk"
            elosrc3="https://drive.google.com/file/d/1JafDHC4Ff04EeF7wcSuTn_OD7Dj6Og2m/view?usp=drivesdk"
            elosrc4="https://drive.google.com/file/d/1KIgjAxzTG7GSCgvCp9uLjiFlLtP9xgyx/view?usp=drivesdk"
            elosrc5="https://drive.google.com/file/d/1JwCH5mNjSOyv0xKTCLl2OY1jdD5dhsHP/view?usp=drivesdk"
            elosrc6="https://drive.google.com/file/d/1KAojoH0Yyu8eqxIuVsUnAmcuKksS7gIx/view?usp=drivesdk"
            elosrc7="https://drive.google.com/file/d/1JoDe3rgC9NS06yz_X3I89gQ9P10FY33X/view?usp=drivesdk"
            elosrc8="https://drive.google.com/file/d/1Jl_GeRj1AXJjIn9VNEn8nLC2P6D81OH2/view?usp=drivesdk"
            elosrc9=""
            elosrc10=""
        />




        <Sports
            spv={4}
            year="Btech 4th year"
            images1={q}



                        //alt tages
            malt1="mechanical engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            malt2="mechanical engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            malt3="mechanical engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            malt4="mechanical engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            malt5="mechanical engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            malt6="mechanical engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            malt7=""

            ealt1="electrical engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            ealt2="electrical engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            ealt3="electrical engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            ealt4="electrical engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            ealt5="electrical engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            ealt6="electrical engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            ealt7=""

            csealt1="computer science engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            csealt2="computer science engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            csealt3="computer science engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            csealt4="computer science engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            csealt5="computer science engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            csealt6="computer science engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            csealt7=""

            civalt1="civil engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            civalt2="civil engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            civalt3="civil engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            civalt4="civil engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            civalt5="civil engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            civalt6="civil engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            civalt7=""

            eloalt1="electronincs engineering 1st year quantum book, aktu physics quantum book, physics quantum book pdf"
            eloalt2="electronincs engineering 1st year quantum book, aktu chemistry quantum book, chemistry quantum book pdf"
            eloalt3="electronincs engineering 1st year quantum book, aktu  maths 1 quantum book, maths 1 quantum book pdf"
            eloalt4="electronincs engineering 1st year quantum book, aktu soft skill quantum book, soft skill quantum book pdf"
            eloalt5="electronincs engineering 1st year quantum book, aktu programming quantum book, cpp programming quantum book pdf"
            eloalt6="electronincs engineering 1st year quantum book, aktu basic electrical quantum book, basic electrical quantum book pdf"
            eloalt7=""

            // Mechanical subjects for 4th year
            msub1="Automation & RObotics"
            msub2="CAD/CAM"
            msub3="Machine Learning"
            msub4="Power Plant"
            msub5="Operational"
            msub6="Renewable Energy"
            msub7=""
            //Mechanical 4th year image links
            // mimg1 = "image/QuantumFront/.jpeg"
            // mimg2 = "image/QuantumFront/.jpeg"
            // mimg3 = "image/QuantumFront/.jpeg"
            // mimg4 = "image/QuantumFront/.jpeg"
            // mimg5 = "image/QuantumFront/.jpeg"
            // mimg6 = "image/QuantumFront/.jpeg"
            // mimg7 = "image/QuantumFront/.jpeg"
            // mimg8 = "image/QuantumFront/.jpeg"
            // mimg9 = "image/QuantumFront/.jpeg"
            // mimg10 ="image/QuantumFront/.jpeg"
            //Mechanical 4th year Drive lInks
            msrc1="https://drive.google.com/file/d/11z9yPugBG1pisP9T9TyspbFXFohViW7B/view?usp=drivesdk"
            msrc2="https://drive.google.com/file/d/12FCZMHezlwWcMEDrlCQbYM2Pnh24YnFJ/view?usp=drivesdk"
            msrc3="https://drive.google.com/file/d/11x-dNgFg2TbgXJjj9aNMBzbQpslbXEw6/view?usp=drivesdk"
            msrc4="https://drive.google.com/file/d/11x-dNgFg2TbgXJjj9aNMBzbQpslbXEw6/view?usp=drivesdk"
            msrc5="https://drive.google.com/file/d/128ZnRoeOxN14CVO7awEmXfrmoHbJL9kS/view?usp=drivesdk"
            msrc6="https://drive.google.com/file/d/121w6xwgq2SxKWVH83_StqlX-E8S_nsWT/view?usp=drivesdk"
            msrc7=""


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
            //electrical images for 4th year
            // eimg1 = "image/QuantumFront/.jpeg"
            // eimg2 = "image/QuantumFront/.jpeg"
            // eimg3 = "image/QuantumFront/.jpeg"
            // eimg4 = "image/QuantumFront/.jpeg"
            // eimg5 = "image/QuantumFront/.jpeg"
            // eimg6 = "image/QuantumFront/.jpeg"
            // eimg7 = "image/QuantumFront/.jpeg"
            // eimg8 = "image/QuantumFront/.jpeg"
            // eimg9 = "image/QuantumFront/.jpeg"
            // eimg10 ="image/QuantumFront/.jpeg"


            //chemical subjects 4th year
            csub1="Physics"
            csub2="Chemistry"
            csub3="Mathematics-l"
            csub4="Soft-skill"
            csub5="Programming"
            csub6="Basic ELectrical"
            csub7=""
            // //chemical images for 4th year
            // cimg1 = "image/QuantumFront/.jpeg"
            // cimg2 = "image/QuantumFront/.jpeg"
            // cimg3 = "image/QuantumFront/.jpeg"
            // cimg4 = "image/QuantumFront/.jpeg"
            // cimg5 = "image/QuantumFront/.jpeg"
            // cimg6 = "image/QuantumFront/.jpeg"
            // cimg7 = "image/QuantumFront/.jpeg"
            // cimg8 = "image/QuantumFront/.jpeg"
            // cimg9 = "image/QuantumFront/.jpeg"
            // cimg10 ="image/QuantumFront/.jpeg"
            //chemical links for 4th year
            csrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            csrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            csrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            csrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            csrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            csrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            csrc7=""
//..............................................................................................................................

            //Information subjects for 4th year

            Isub1="Physics"
            Isub2="Chemistry"
            Isub3="Mathematics-l"
            Isub4="Soft-skill"
            Isub5="Programming"
            Isub6="Basic ELectrical"
            Isub7=""
            //Information images for 4th year
            // Iimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // Iimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // Iimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // Iimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // Iimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // Iimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // Iimg7 = ""
            // Iimg8 = ""
            //Information links for 4th year
            Isrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            Isrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            Isrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            Isrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            Isrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            Isrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            Isrc7=""

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
            //computer images for 4th year
            // cseimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // cseimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // cseimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // cseimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // cseimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // cseimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // cseimg7 = ""
            // cseimg8 = ""
            //computer links for 4th year
            csesrc1="https://drive.google.com/file/d/1gueLIleM-PtzIY5TJiCFF10XiMUwFGTh/view?usp=drivesdk"
            csesrc2="https://drive.google.com/file/d/1mT2g0NV0Ypb77cRblDHScv70zQ230FNq/view?usp=drivesdk"
            csesrc3="https://drive.google.com/file/d/19RqaTzbOVhc4sMWfzrBEb8EOjs-fJ-Gr/view?usp=drivesdk"
            csesrc4="https://drive.google.com/file/d/12Is9RQkeON7KI5sfdJP4OW-wJgweTd6E/view?usp=drivesdk"
            csesrc5="https://drive.google.com/file/d/1lQTyNBY0Y_zWDUxQu0tRYyLSDnf6isqS/view?usp=drivesdk"
            csesrc6="https://drive.google.com/file/d/1KZ5AT305U0ppX1cHw6Mv0LLTYGqY4J4E/view?usp=drivesdk"
            csesrc7="https://drive.google.com/file/d/114LcqUtJpoLOQVg40GmSSqtu-Ac91otl/view?usp=drivesdk"
            csesrc8="https://drive.google.com/file/d/1gayUQoRp_5CEAdH67MdzH14W4vcEdpwE/view?usp=drivesdk"
//.........................................................................................................................
            
            //civil subjects for 4th year
            civsub1="Physics"
            civsub2="Chemistry"
            civsub3="Mathematics-l"
            civsub4="Soft-skill"
            civsub5="Programming"
            civsub6="Basic ELectrical"
            civsub7=""
            //civil images for 4th year
            // civimg1 = "https://m.media-amazon.com/images/I/717zJEEpK0L.jpg"
            // civimg2 = "https://m.media-amazon.com/images/I/41ZrzfVq1xL.jpg"
            // civimg3 = "https://wishallbook.com/wp-content/uploads/2022/01/IMG_20220203_145955-scaled.jpg"
            // civimg4 = "https://m.media-amazon.com/images/I/61hDXeFL6wL.jpg"
            // civimg5 = "https://m.media-amazon.com/images/I/51egtSfJQHL._SX319_BO1,204,203,200_.jpg"
            // civimg6 = "https://m.media-amazon.com/images/I/71B3nujWo6L.jpg"
            // civimg7 = ""
            // civimg8 = ""
            //civil links for 4th year
            civsrc1= "https://drive.google.com/file/d/1zXC_-PPH1H6sDCyVoZgW395bt_ng647N/view?usp=drivesdk"
            civsrc2="https://drive.google.com/file/d/1yUy2qj1EvGDcM-H9z7UyjXe7neTpuSD2/view?usp=drivesdk"
            civsrc3="https://drive.google.com/file/d/1zXGwwJC9cwDnUoH26-lC76nBq_bdvt3l/view?usp=drivesdk"
            civsrc4="https://drive.google.com/file/d/1yMFLoQyTKdGmWxiC4sLHOgboNXSleei4/view?usp=drivesdk"
            civsrc5="https://drive.google.com/file/d/1ymfzigxtT7fzOzFqzYSrdD1pL204Gppg/view?usp=drivesdk"
            civsrc6="https://drive.google.com/file/d/1ymJcMC25pYrYdC6-hEeag-IEcI9UOMW5/view?usp=drivesdk"
            civsrc7=""



//...............................................................................................................................................................
            //electronics subjects for 4th year
            elosub1=""
            elosub2=""
            elosub3=""
            elosub4=""
            elosub5=""
            elosub6=""
            elosub7=""
            elosub8=""
            elosub10=""
            //electornics links for 4th year
            elosrc1=""
            elosrc2=""
            elosrc3=""
            elosrc4=""
            elosrc5=""
            elosrc6=""
            elosrc7=""
            elosrc8=""
            elosrc9=""
            elosrc10=""






        />
        
        
        
    
    </>    
    

  )
}

export default Qantum
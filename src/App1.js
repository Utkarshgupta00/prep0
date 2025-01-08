import React from 'react';
import Home from './Home';
import Header from './component/Header/Header';
import { Routes , Route, NavLink} from 'react-router-dom';
import Roadmap from './Roadmap';
import Qantum from './Qantum';
import Footer from './component/Footer/Footer';
import Team from './component/Team';
import HandNotes from './HandNotes';
import Projects from './Projects/Projects';
import Footera from './component/FooterAbove/Footera';
import Papers from './Papers';
import Resume from './Resume';
import './App1.css';
import InterviewPrep from './component/InterviewPrep/InterviewPrep';
import Error from './Error/Error';
import Faq from './Faq/Faq';
import Data from './Information/Data/Data'
import Frequent from './Frequent';
import NewPost from './NewPost/NewPost'
import { useAuth0 } from "@auth0/auth0-react";
import ScrollToTop from './ScrollToTop';
import Contact from './Contact/Contact';
import Companies from './component/InterviewPrep/Companies/Companies';
import TopTenData from './NewPost/TopTenData';
import Wave from './Wave/Wave';
import { Helmet } from 'react-helmet';




const App1 = () => {

    
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();


  let mybutton = document.getElementById('myBtn');
  window.onscroll = function(){scrollFunction()};

  function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      mybutton.style.display = "block";
    }else{
      mybutton.style.display = "none";
    }
  }

  function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 
  
  return (







    <>








        <ScrollToTop />
        <Header/> 
        <div className='navbar_pos'></div> 

        <div className="view">
        <div className="laptop_view">


          
        <Routes>


            <Route path='/'element={<Home/>}/>
            <Route path='/developer-roadmaps' element={<Roadmap/>}/>
            <Route path='/handwritten-notes-pdf' element={<HandNotes/>}/>
            <Route path='/Team' element={<Team/>}/>
            <Route path="/resume-maker-online" element={<Resume/>}/>  


            <Route path="/basic-interview-questions-and-answers" element={<InterviewPrep/>}>
            

            
            </Route>     

            <Route path="/companies" element={<Companies/>}>
              <Route path="/companies/google"/>
              <Route path="/companies/microsoft"/>
              <Route path="/companies/amazon"/>
              <Route path="/companies/apple"/>
              <Route path="/companies/facebook"/>

            </Route>

            <Route path="/new-post" element={<NewPost/>}></Route>
            <Route path="/top-ten-youtube-channels-for" element={<TopTenData/>}>
              <Route path="/top-ten-youtube-channels-for/free-online-web-development-courses"/>
              <Route path="/top-ten-youtube-channels-for/free-online-app-development-courses"/>
              <Route path="/top-ten-youtube-channels-for/free-online-data-structure-and-algorithms-courses"/>
              <Route path="/top-ten-youtube-channels-for/free-online-python-development-course"/>
              <Route path="/top-ten-youtube-channels-for/free-online-cpp-development-course"/>
              <Route path="/top-ten-youtube-channels-for/free-online-java-development-course"/>

            </Route>


            
            <Route exact path="/aktu-quantum-books" element={<Qantum/>}>
              <Route path="/aktu-quantum-books/mechanical-engineering"></Route>
              <Route path="/aktu-quantum-books/electrical-engineering"></Route>
              <Route path="/aktu-quantum-books/information-technology"></Route>
              <Route path="/aktu-quantum-books/cse"></Route>
              <Route path="/aktu-quantum-books/civil-engineering"></Route>
              <Route path="/aktu-quantum-books/electronics-engineering"></Route>
            </Route>

            <Route path="/previous-year-question-paper-btech-aktu" element={<Papers/>}>
              <Route path="/previous-year-question-paper-btech-aktu/mechanical-engineering"></Route>
              <Route path="/previous-year-question-paper-btech-aktu/electrical-engineering"></Route>
              <Route path="/previous-year-question-paper-btech-aktu/information-technology"></Route>
              <Route path="/previous-year-question-paper-btech-aktu/cse"></Route>
              <Route path="/previous-year-question-paper-btech-aktu/civil-engineering"></Route>
              <Route path="/previous-year-question-paper-btech-aktu/electronics-engineering"></Route>
            </Route>


            <Route path="/projects" element={<Projects/>}>
              <Route path="/projects/mechanical-engineering-project-report-pdf"></Route>
              <Route path="/projects/electrical-engineering-project-report-pdf"></Route>
              <Route path="/projects/chemical-engineering-project-report-pdf"></Route>
              <Route path="/projects/computer-science-engineering-project-report-pdf"></Route>
            </Route>

            

            <Route path="/data" element={<Data/>}>
              <Route path="/data/dsa"/>
              <Route path="/data/c++"/>
              <Route path="/data/java"/>
              <Route path="/data/python"/>
              <Route path="/data/web-development"/>
              <Route path="/data/app-development"/>
              <Route path="/data/data-science"/>
              <Route path="/data/machine-learning"/>
              <Route path="/data/auot-cad"/>
              <Route path="/data/solid-works"/>
              <Route path="/data/graphic-designing"/>
              <Route path="/data/video-editing"/>
              <Route path="/data/content-writing"/>
            </Route>  

            <Route path="*" element={<Error/>}/>   
            <Route path="/FaqPage" element={<Faq/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path = "/Frequent" element={<Frequent/>}/>


        </Routes>


        </div>
        </div>

        <div className="whtsapp_btn">
          <button id="whatsapp-login"></button>
          <i class="zmdi zmdi-whatsapp" alt="whatsapp login button, login with prep0"></i>
        </div>
        


<Routes>
  <Route to="/Contact" element={<Contact/>}></Route>
  <Route to="/FaqPage" element={<Faq/>}></Route>
  <Route to="/Frequent" element={<Frequent/>}></Route>
  
</Routes>




        <Footera/>
        <Wave/>
        <Footer/>
        
        <button onClick={topFunction} id="scroll_up_button" ><i class="zmdi zmdi-navigation"></i></button>


        <div>
          <ul id="down_bar">
            <li><NavLink to = "/" id="home_button"><i class="zmdi zmdi-home"></i></NavLink></li>
            <li><NavLink to = "/aktu-quantum-books" id="home_button"><i>Q</i></NavLink></li>
            <li><NavLink to = "/basic-interview-questions-and-answers" id="home_button"><i class="zmdi zmdi-book"></i></NavLink></li>
            <li><NavLink to = "/resume-maker-online" id="home_button"><i class="zmdi zmdi-developer-board"></i></NavLink></li>
            <li><NavLink to = "/contact" id="home_button"><i class="zmdi zmdi-phone"></i></NavLink></li>

          <li>
            {
              isAuthenticated ? <li><button id="home_button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><i class="zmdi zmdi-mood"></i></button></li> :             <li><button onClick={() => loginWithRedirect()} id="home_button"><i class="zmdi zmdi-account-add"></i></button></li>
            }
          </li>
          
          </ul>
        </div>
{
  isAuthenticated && alert(`Hii ${user.name}`)
}

        
    </>



  )
}

export default App1
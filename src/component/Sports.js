import React from 'react'
import './Sports.css'
import { Routes , Route} from 'react-router-dom';
import Mechanical from './Branches/Mechanical'



const Sports = (props) => {
  return (
    <>
        


        <div className="container_first">
        


<Routes>
          <Route path='/mechanical-engineering' element={              
              <Mechanical
                      
                      ans={true}
                      imk = {props.images1}
                      year = {props.year}
                  
                      spv1 = {props.spv}

                      
                      src1={props.msrc1}
                      src2={props.msrc2}
                      src3={props.msrc3}
                      src4={props.msrc4}
                      src5={props.msrc5}
                      src6={props.msrc6}
                      src7={props.msrc7}
                      src8={props.msrc8}
                      src9={props.msrc9}
                      src10={props.msrc10}

                      alt1={props.malt1}
                      alt2={props.malt2}
                      alt3={props.malt3}
                      alt4={props.malt4}
                      alt5={props.malt5}
                      alt6={props.malt6}
                      alt7={props.malt7}
                      alt8={props.malt8}
                      alt9={props.malt8}
                      alt10={props.malt10}

                      subject1 = {props.msub1}
                      subject2 = {props.msub2}
                      subject3 = {props.msub3}
                      subject4 = {props.msub4}
                      subject5 = {props.msub5}
                      subject6 = {props.msub6}
                      subject7 = {props.msub7}
                      subject8 = {props.msub8}
                      subject9 = {props.msub9}
                      subject10 = {props.msub10}
              />

            }/>

          <Route  path='/electrical-engineering' element={
              <Mechanical
              ans={true}
              year = {props.year}
              imk = {props.images1}
              

              src1={props.esrc1}
              src2={props.esrc2}
              src3={props.esrc3}
              src4={props.esrc4}
              src5={props.esrc5}
              src6={props.esrc6}
              src7={props.esrc7}
              src8={props.esrc8}
              src9={props.esrc9}
              src10={props.esrc10}

              alt1={props.ealt1}
              alt2={props.ealt2}
              alt3={props.ealt3}
              alt4={props.ealt4}
              alt5={props.ealt5}
              alt6={props.ealt6}
              alt7={props.ealt7}
              alt8={props.ealt8}
              alt9={props.ealt8}
              alt10={props.ealt10}

              subject1 = {props.esub1}
              subject2 = {props.esub2}
              subject3 = {props.esub3}
              subject4 = {props.esub4}
              subject5 = {props.esub5}
              subject6 = {props.esub6}
              subject7 = {props.esub7}
              subject8 = {props.esub8}
              subject9 = {props.esub9}
              subject10 = {props.esub10}

              />
            }/>

          <Route exact path='/' element={
              <Mechanical
              ans={true}
              year = {props.year}
              imk = {props.images1}          
                      
              src1={props.csrc1}
              src2={props.csrc2}
              src3={props.csrc3}
              src4={props.csrc4}
              src5={props.csrc5}
              src6={props.csrc6}
              src7={props.csrc7}

              // subject1 = {props.csub1}
              // subject2 = {props.csub2}
              // subject3 = {props.csub3}
              // subject4 = {props.csub4}
              // subject5 = {props.csub5}
              // subject6 = {props.csub6}
              // subject7 = {props.csub7}
              // subject8 = {props.csub8}
              // subject9 = {props.csub9}
              // subject10 = {props.csub10}

              />
            }/>

          <Route exact path='/information-technology' element={
              <Mechanical
                      
              year = {props.year}

              imk = {props.images1}


              subject1 = {props.csesub1}
              subject2 = {props.csesub2}
              subject3 = {props.csesub3}
              subject4 = {props.csesub4}
              subject5 = {props.csesub5}
              subject6 = {props.csesub6}
              subject7 = {props.csesub7}
              subject8 = {props.csesub8}
              subject9 = {props.csesub9}
              subject10 = {props.csesub10}
              subject11 = {props.csesub11}


              alt1={props.csealt1}
              alt2={props.csealt2}
              alt3={props.csealt3}
              alt4={props.csealt4}
              alt5={props.csealt5}
              alt6={props.csealt6}
              alt7={props.csealt7}
              alt8={props.csealt8}
              alt9={props.csealt8}
              alt10={props.csealt10}


              src1={props.csesrc1}
              src2={props.csesrc2}
              src3={props.csesrc3}
              src4={props.csesrc4}
              src5={props.csesrc5}
              src6={props.csesrc6}
              src7={props.csesrc7}
              src8={props.csesrc7}
              src9={props.csesrc7}
              src10={props.csesrc7}
              src11={props.csesrc7}
            
              />
            }/>

          <Route exact path='/cse' element={
              <Mechanical
                      
              year = {props.year}

              imk = {props.images1}
                      
              src1={props.csesrc1}
              src2={props.csesrc2}
              src3={props.csesrc3}
              src4={props.csesrc4}
              src5={props.csesrc5}
              src6={props.csesrc6}
              src7={props.csesrc7}
              src8={props.csesrc7}
              src9={props.csesrc7}
              src10={props.csesrc7}
              src11={props.csesrc7}


              alt1={props.csealt1}
              alt2={props.csealt2}
              alt3={props.csealt3}
              alt4={props.csealt4}
              alt5={props.csealt5}
              alt6={props.csealt6}
              alt7={props.csealt7}
              alt8={props.csealt8}
              alt9={props.csealt8}
              alt10={props.csealt10}

              subject1 = {props.csesub1}
              subject2 = {props.csesub2}
              subject3 = {props.csesub3}
              subject4 = {props.csesub4}
              subject5 = {props.csesub5}
              subject6 = {props.csesub6}
              subject7 = {props.csesub7}
              subject8 = {props.csesub8}
              subject9 = {props.csesub9}
              subject10 = {props.csesub10}
              subject11 = {props.csesub11}


              />
            }/>

          <Route exact path='/civil-engineering' element={
              <Mechanical

              year = {props.year}

              imk = {props.images1}        
                      
              src1={props.civsrc1}
              src2={props.civsrc2}
              src3={props.civsrc3}
              src4={props.civsrc4}
              src5={props.civsrc5}
              src6={props.civsrc6}
              src7={props.civsrc7}
              src8={props.civsrc8}
              src9={props.civsrc9}
              src10={props.civsrc10}

              alt1={props.civalt1}
              alt2={props.civalt2}
              alt3={props.civalt3}
              alt4={props.civalt4}
              alt5={props.civalt5}
              alt6={props.civalt6}
              alt7={props.civalt7}
              alt8={props.civalt8}
              alt9={props.civalt8}
              alt10={props.civalt10}

              subject1 = {props.civsub1}
              subject2 = {props.civsub2}
              subject3 = {props.civsub3}
              subject4 = {props.civsub4}
              subject5 = {props.civsub5}
              subject6 = {props.civsub6}
              subject7 = {props.civsub7}
              subject8 = {props.civsub8}
              subject9 = {props.civsub9}
              subject10 = {props.civsub10}

              />
            }/>

          <Route exact path='/electronics-engineering' element={
              <Mechanical

              year = {props.year}
              
              imk = {props.images1}        
                      
              src1={props.elosrc1}
              src2={props.elosrc2}
              src3={props.elosrc3}
              src4={props.elosrc4}
              src5={props.elosrc5}
              src6={props.elosrc6}
              src7={props.elosrc7}
              src8={props.elosrc8}
              src9={props.elosrc9}
              src10={props.elosrc10}

              alt1={props.eloalt1}
              alt2={props.eloalt2}
              alt3={props.eloalt3}
              alt4={props.eloalt4}
              alt5={props.eloalt5}
              alt6={props.eloalt6}
              alt7={props.eloalt7}
              alt8={props.eloalt8}
              alt9={props.eloalt8}
              alt10={props.eloalt10}

              subject1 = {props.elosub1}
              subject2 = {props.elosub2}
              subject3 = {props.elosub3}
              subject4 = {props.elosub4}
              subject5 = {props.elosub5}
              subject6 = {props.elosub6}
              subject7 = {props.elosub7}
              subject8 = {props.elosub8}
              subject9 = {props.elosub9}
              subject10 = {props.elosub10}lo

              />
            }/>



</Routes>    




          </div>


    </>
  )
}

export default Sports
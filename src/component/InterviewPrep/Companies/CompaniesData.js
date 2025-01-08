import React from 'react'
import ContactCard from '../../../Contact/ContactCard'
import './Companies.css'

const CompaniesData = (props) => {
  return (
    <>


        <div className="companies_data">
            <h1>{props.heading}</h1>
            <ContactCard

                sno="01"
                data={props.data1}   
            />
            <ContactCard
                sno="02"
                data={props.data2}
            />
            <ContactCard
                sno="03"
                data={props.data3}
            
            />
            <ContactCard
                sno="04"
                data={props.data4}
            
            />
            <ContactCard
                sno="05"
                data={props.data5}
            
            />
            <ContactCard
                sno="06"
                data={props.data6}
                
            />
            <ContactCard
                sno="07"
                data={props.data7}
            />
            <ContactCard
                sno="08"
                data={props.data8}            
            />
            <ContactCard
                sno="09"
                data={props.data9}            
            />
            <ContactCard
                sno="10"
                data={props.data10} 
                href={props.submit}       
            />



        </div>




    </>
  )
}

export default CompaniesData
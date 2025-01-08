import React from 'react'

const DataCard = (props) => {
  return (
    <>
        <div className="inside_data_page">       
            <h1>{props.heading}</h1>
            <br/>
            <h2>{props.subject}</h2>
            <br/>
            <h3></h3>

            <p>{props.info}</p>

            <br/>

            <p>{props.para_data1}</p><br/>

            <h2 className="hover_gayab">Read More</h2><br/>
            <p>{props.para_data2}</p><br/>
            <p>{props.para_data3}</p><br/>
            <p>{props.para_data4}</p><br/>
            <p>{props.para_data5}</p><br/>
            <p>{props.para_data6}</p><br/>
            <p>{props.must_read}</p>

        </div>
    </>
  )
}

export default DataCard
import React from 'react'
import TopTen from './TopTen'
import { Helmet } from 'react-helmet'

const TenData = (props) => {
  return (
    <>

          <Helmet>

            <title>{props.title}</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={props.description} />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />

        </Helmet>

     <div className="ten_data_page">
      <h1 className="ten_data_page_heading">
        {props.heading}
      </h1>

        <TopTen
            sno = "01"
            heading={props.heading1}
            duration ={props.duration1}
            lectures={props.lecture1}
            href={props.href1}
            price={props.price1}
            item="Go To PlayList"
        />
        <TopTen
            sno="02"
            heading={props.heading2}
            duration ={props.duration2}
            lectures={props.lecture2}
            href={props.href2}
            price={props.price2}
            item="Go To PlayList"
        />
        <TopTen
            sno="03"
            heading={props.heading3}
            duration ={props.duration3}
            lectures={props.lecture3}
            href={props.href3}
            price={props.price3}
            item="Go To PlayList"
        />
        <TopTen
            sno="04"
            heading={props.heading4}
            duration ={props.duration4}
            lectures={props.lecture4}
            href={props.href1}
            price={props.price4}
            item="Go To PlayList"
        />

          <TopTen
            sno="05"
            heading={props.heading5}
            duration ={props.duration5}
            lectures={props.lecture5}
            href={props.href5}
            price={props.price5}
            item="Go To PlayList"
        />
        <TopTen
            sno="06"
            heading={props.heading6}
            duration ={props.duration6}
            lectures={props.lecture6}
            href={props.href6}
            price={props.price6}
            item="Go To PlayList"
        />



     </div>


    
    
    
    </>
  )
}

export default TenData
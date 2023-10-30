
import Image from "next/image"

import React from 'react'
import { Carousel } from 'antd';


function Carosel() {
  
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
 <div>
   <Carousel afterChange={onChange}>
      <div>
       <img  className={"carosel"} src="/c11.jpg" alt="" />
      </div>
      <div>
      <img  className={"carosel"} src="/c2.jpg" alt="" />
      </div>
     
    </Carousel>
 </div>
  )
}

export default Carosel
import React from 'react'
import Img from './cardcontents/Img'
import Topic from './cardcontents/Topic'
import Date from './cardcontents/Date'
import Title from './cardcontents/Title'
import Content from './cardcontents/Content'
import Logo from './cardcontents/Logo'
import End from './cardcontents/End'

const Card = () => {
  return (
    <div className='h-56.5 w-42.5 bg-white rounded-[10px] border border-gray-950 font-figtree shadow-[4px_4px_0px_#121212]'>
        <Img />
        <Topic />
        <Date />
        <Title />
        <Content />
       <div className='flex items-center '>
         <Logo />
          <End />
       </div>
    </div>
  )
}

export default Card

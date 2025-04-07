import React from 'react'
import { Prsnlinfo } from './Prsnlinfo'
import { TechStack } from './Teckstack'
import Projects from './Projects'
import DownloadCV from './DownloadCV'
import Education from './Education'
import SocialLinks from './SocialLinks'

export const Main = () => {
  return (
    <div className='pt-18 bg-[#1A202C] '>
        <Prsnlinfo/>
        <TechStack/>
        <DownloadCV/>
        <Projects/>
       <Education/>
       <SocialLinks/>

    </div>
  )
}

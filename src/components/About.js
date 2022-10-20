import React from 'react'
import style from '../scss/about.module.scss'
const About = () => {
  return (
    <div className={`${style.con} `}>
        <h4  >About</h4>
        <p className={style.p}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </div>
  )
}

export default About
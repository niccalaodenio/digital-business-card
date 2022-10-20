import React from 'react'
import style from '../scss/footer.module.scss'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className={`${style.footerCon} d-flex center gap`}>
        <FaTwitterSquare className={`${style.icon}`}/> 
        <FaFacebookSquare className={`${style.icon}`}/>
        <FaInstagramSquare className={`${style.icon}`}/>
        <FaGithubSquare className={`${style.icon}`}/>

{/*         
        <FontAwesomeIcon icon={faTwitterSquare} ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faFacebookSquare} className={`${style.icon}`}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagramSquare}className={`${style.icon}`}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithubSquare}className={`${style.icon}`}></FontAwesomeIcon> */}
    </div>
  )
}

export default Footer
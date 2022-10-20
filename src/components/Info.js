import style from '../scss/info.module.scss'
import Button from './Button'
import ako from '../assets/ako.jpg'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Info = () => {
    const n0 = true;
  return (
    <> 
        <img src={ako} alt=""  className={`${style.img} `}/>
        <h2 className='mt text-center '>Nicca Laodenio</h2>
        <p className={`${style.p } text-center`}>Frontend Developer</p>
        <a href='http://facebook.com/nicx.neverland' className={`${style.website}`}>niccalaodenio.net</a>
        <div className={`${style.btn} gap mt`}>
            <Button name="Email"
             icon={ <FaEnvelope/>}  bg={n0 && 'white'}  
             Color={n0 && '#374151'}
             />
            <Button name="LinkedIn"
            icon={ <FaLinkedin/>}  bg={n0 ? "#5093E2" : 'white'}
            Color={n0 && 'white'}
            />
            
        </div>
    </>
  )
}

export default Info
import { useNavigate } from 'react-router-dom'
import facebook from'../../../assets/facebook.png';
import facebookBlack from'../../../assets/facebookBlack.png';
import phone from'../../../assets/phone.png';
import phoneBlack from'../../../assets/phoneBlack.png';
import telegram from'../../../assets/telegram.png';
import telegramBlack from'../../../assets/telegramBlack.png';
import tiktok from'../../../assets/tiktok.png';
import FooterImage from '../../../assets/FooterImage.png';
import instagram from '../../../assets/instagram.png'
import instagramBlack from '../../../assets/instagramBlack.png';
import ResourcesItem from '../Resources/ResourcesItem/ResourcesItem';
function MainPageFooter({}) {



  

  return (
    <div className='flex flex-col items-center justify-evenly relative lg:h-[30vh]' style={{backgroundColor:'#86a695'}}>
        <div className='flex flex-col items-center text-white mt-[10px]'>
            <p className='text-xl text-white'>Телефон</p>
            <p>+38 098 227 72 99</p>
            <p>+38 050 227 72 99</p>
        </div>
        <div className='text-white'>
            <p className='text-center text-lg mt-[15px]'>ginkgo.company.ua@gmail.com</p>
        </div>
        <div className='pb-[15px] text-white'>
            <p className='text-center text-lg mt-[15px]'>Природа створює красу<br/>
            <span>Ми її підкреслюємо</span></p>
        </div>
        <img src={FooterImage} className='w-screen h-[20vh] lg:hidden' style={{borderTop:'1px solid white'}}/>

        <div className='absolute h-[200px] left-5 top-3 flex flex-col justify-evenly lg:hidden'>
            <ResourcesItem src={telegram} />
            <ResourcesItem src={instagram}   />
            <ResourcesItem src={tiktok}  />
            <ResourcesItem src={facebook}  />
        </div>
    </div>
  )
}

export default MainPageFooter

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
    <div className='flex flex-col items-center justify-center relative min-h-[15vh] h-auto w-screen sm:max-md:pt-[30px] lg:text-xl font-light lg:pl-[83px]' style={{backgroundColor:'#86a695'}}>
        <div className='flex w-[90%]'>
            <div className='h-[200px] w-[10%] left-5 top-[0px] flex flex-col justify-evenly lg:hidden'>
            <a href='/contacts'><ResourcesItem src={phone}/></a>
            <a href='https://t.me/Ginkgo_ua' target="_blank"><ResourcesItem src={telegram} href/></a>
            <a href='https://www.instagram.com/ginkgo_landscape_design?igsh=MXM4N2xlbGk4YXltZQ%3D%3D&utm_source=qr' target="_blank"><ResourcesItem src={instagram}/></a>
            <a href='https://www.tiktok.com/@_ginkgo_?_t=8ltkmxNYShh&_r=1' target="_blank"><ResourcesItem src={tiktok}/></a>
            <a href='https://www.facebook.com/share/3L8uzffv5PTZEtw3/?mibextid=LQQJ4d' target="_blank"><ResourcesItem src={facebook}/></a>
            </div>
            <div className='w-[100%] sm:max-md:w-[75%] flex sm:max-md:flex-col items-center justify-evenly'>
                <div className='flex flex-col items-center text-white whitespace-nowrap lg:mr-[15px]'>
                    <p>+38 098 227 72 99</p>
                    <p>+38 050 227 72 99</p>
                </div>
                <div>
                    <div className='pb-[15px] text-white'>
                        <p className='text-center font-light text-md break-normal text-lg mt-[15px] whitespace-nowrap'>Природа створює красу<br/>
                        <span>Ми її підкреслюємо.</span></p>
                    </div>
                    


                </div>
                <div className='text-white lg:ml-[15px]'>
                    <p className='text-center text-lg'>ginkgo.company.ua@gmail.com</p>
                </div>
            </div>
        </div>
        <img src={FooterImage} className='w-screen h-[20vh] lg:hidden sm:max-md:mt-[30px]' style={{borderTop:'1px solid white'}}/>
    </div>
  )
}

export default MainPageFooter

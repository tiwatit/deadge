import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import facebook from'../../../assets/facebook.png';

import telegram from'../../../assets/telegram.png';

import tiktok from'../../../assets/tiktok.png';
import instagram from '../../../assets/instagram.png'
function Menu({show, setShow}) {

    const navigate = useNavigate();

  return (
    <div className={ show ? 'z-10 w-screen h-[140vh] pb-[40vh] flex flex-col justify-center items-center fixed top-0 left-0 bg-[#4b4f53] transition-all duration-500 text-[50px] lg:hidden' 
    : 'z-10 w-screen h-screen flex flex-col justify-center items-center fixed top-[-150vh] left-0 bg-[#4b4f53] transition duration-500 text-[50px]'}>

    <img className='w-[200px] h-[150px] mb-[20px]' src={logo} /> 
      <ul className='w-full h-auto list-none z-10 font-light'> 
        <li className='text-[40px]' onClick={()=>navigate('/deadge')}>Головна</li>
        <li className='text-[40px]' onClick={()=>navigate('/services')}>Послуги</li>
        <li className='text-[40px]' onClick={()=>navigate('/prices')}>Ціни</li>
        <li className='text-[40px]' onClick={()=>navigate('/portfolio')}>Портфоліо</li>
        <li className='text-[40px]' onClick={()=>navigate('/about')}>Про нас</li>
        <li className='text-[40px]' onClick={()=>navigate('/contacts')}>Контакти</li>
      </ul> 
      <div className='flex w-[70%] justify-evenly mt-[25px]'>
            <div>
            <a href='https://t.me/Ginkgo_ua' target="_blank"><img src={telegram} className='w-[50px] h-[50px]'/></a>
            </div>
            <div>
            <a href='https://www.instagram.com/ginkgo_landscape_design?igsh=MXM4N2xlbGk4YXltZQ%3D%3D&utm_source=qr' target="_blank"><img src={instagram} className='w-[50px] h-[50px]'/></a>
            </div>
            <div>
            <a href='https://www.tiktok.com/@_ginkgo_?_t=8ltkmxNYShh&_r=1' target="_blank"><img src={tiktok} className='w-[50px] h-[50px]'/></a>
            </div>
            <div>
            <a href='https://www.facebook.com/share/3L8uzffv5PTZEtw3/?mibextid=LQQJ4d' target="_blank"><img src={facebook} className='w-[50px] h-[50px]'/></a>
            </div>
        </div> 
    </div>
  )
}

export default Menu

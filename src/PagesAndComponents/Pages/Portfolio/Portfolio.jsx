import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import mainImage1 from '../../../assets/mainImage1.png'
import mainImage2 from '../../../assets/mainImage2.png'
import gatne from '../../../assets/gatne.png'
import gatne2 from '../../../assets/gatne2.png'
import hotyanivka from '../../../assets/hotyanivka.png'

import Header from '../../Components/Header/Header';
import MainPageFooter from '../../Components/MainPageFooter/MainPageFooter';
import Resources from '../../Components/Resources/Resources';
function Portfolio({}) {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const [colorFacebook,setColorFacebook] = useState(true)
    const [colorTiktok,setColorTiktok] = useState(true)
    const [colorInstagram,setColorInstagram] = useState(true)
    const [colorTelegram,setColorTelegram] = useState(true)
    const [colorPhone,setColorPhone] = useState(true)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
  
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        document.body.style.overflowX='hidden'
        return () => {
          window.removeEventListener('scroll', handleScroll);
          
        };
        
      }, []);

      



    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
      }, []);

  return (
    <div className='bg-white '>
        <Header show={show} setShow={setShow} offset={200}/>
        <div className='w-screen flex justify-center mt-[6vh] font-light'>
          <div className='flex flex-col lg:w-[60%] text-black '>
            <div className='flex justify-center relative overflow-hidden lg:mb-[30px]' onClick={()=>navigate('/projects/kozin')}>
              <img src={mainImage1} className='w-full h-[30vh] lg:w-[70vw] lg:h-[70vh] cursor-pointer hover:scale-125 transition delay-[150]'/>
              <div className='cursor-pointer sm:max-md:hidden absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150]  opacity-75 hover:opacity-100  hover:bg-[#00000099] p-[10px] text-center'>Козин
                  <span className='text-[23px]'>детальніше</span>
                </div>
            </div>
            <div className='flex justify-center'>
              <p className='mt-[10px] mb-[15px] lg:text-left lg:w-[70vw] cursor-pointer lg:hidden'><span style={{borderBottom:'1px solid black'}} onClick={()=>navigate('/projects/kozin')}>Об'єкт Козин</span></p>
            </div>
            <div className='relative flex justify-center overflow-hidden lg:mb-[30px]' onClick={()=>navigate('/projects/tarasivka')}>
              <img src={mainImage2} className='w-full h-[30vh] lg:w-[70vw] lg:h-[70vh] cursor-pointer hover:scale-125 transition delay-[150]' />
              <div className='cursor-pointer sm:max-md:hidden absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150]  opacity-75 hover:opacity-100  hover:bg-[#00000099] p-[10px] text-center'>Тарасівка
                  <span className='text-[23px]'>детальніше</span>
                </div>
            </div>
            <div className='flex justify-center'>
              <p className='mt-[10px] mb-[15px] lg:text-left lg:w-[70vw] cursor-pointer lg:hidden'><span style={{borderBottom:'1px solid black'}} onClick={()=>navigate('/projects/tarasivka')}>Об'єкт Тарасівка</span></p>
            </div>
            <div className='relative flex justify-center overflow-hidden lg:mb-[30px]' onClick={()=>navigate('/projects/gatne')}>
              <img src={gatne} className='w-full h-[30vh] lg:w-[70vw] lg:h-[70vh] cursor-pointer hover:scale-125 transition delay-[150]' />
              <div className='cursor-pointer sm:max-md:hidden absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150]  opacity-75 hover:opacity-100  hover:bg-[#00000099] p-[10px] text-center'>Гатне
                  <span className='text-[23px]'>детальніше</span>
                </div>
            </div>
            <div className='flex justify-center'>
              <p className='mt-[10px] mb-[15px] lg:text-left lg:w-[70vw] cursor-pointer lg:hidden'><span style={{borderBottom:'1px solid black'}} onClick={()=>navigate('/projects/gatne')}>Об'єкт Гатне</span></p>
            </div>
            <div className='relative flex justify-center overflow-hidden lg:mb-[30px]' onClick={()=>navigate('/projects/gatne2')}>
              <img src={gatne2} className='w-full h-[30vh] lg:w-[70vw] lg:h-[70vh] cursor-pointer hover:scale-125 transition delay-[150]' />
              <div className='cursor-pointer sm:max-md:hidden absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150]  opacity-75 hover:opacity-100  hover:bg-[#00000099] p-[10px] text-center'>Гатне 2
                  <span className='text-[23px]'>детальніше</span>
                </div>
            </div>
            <div className='flex justify-center'>
              <p className='mt-[10px] mb-[15px] lg:text-left lg:w-[70vw] cursor-pointer lg:hidden'><span style={{borderBottom:'1px solid black'}} onClick={()=>navigate('/projects/gatne2')}>Об'єкт Гатне 2</span></p>
            </div>
            <div className='relative flex justify-center overflow-hidden lg:mb-[30px]' onClick={()=>navigate('/projects/hotyanivka')}>
              <img src={hotyanivka} className='w-full h-[30vh] lg:w-[70vw] lg:h-[70vh] cursor-pointer hover:scale-125 transition delay-[150]' />
              <div className='cursor-pointer sm:max-md:hidden absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150]  opacity-75 hover:opacity-100  hover:bg-[#00000099] p-[10px] text-center'>Хотянівка
                  <span className='text-[23px]'>детальніше</span>
                </div>
            </div>
            <div className='flex justify-center'>
              <p className='mt-[10px] mb-[15px] lg:text-left lg:w-[70vw] cursor-pointer lg:hidden'><span style={{borderBottom:'1px solid black'}} onClick={()=>navigate('/projects/hotyanivka')}>Об'єкт Хотянівка</span></p>
            </div>
          </div>
        </div>
        <Resources phoneColor={colorPhone} telegramColor={colorTelegram} instagramColor={colorInstagram} tiktokColor={colorTiktok} facebookColor={colorFacebook} />
        <MainPageFooter/>
    </div>
  )
}

export default Portfolio
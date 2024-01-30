import { useEffect, useRef, useState } from 'react'
import video from './assets/video.mp4'
import logo from './assets/logo.png'
import buttonBackground from './assets/buttonbackground.png'
import mainImage1 from './assets/mainImage1.png'
import mainImage2 from './assets/mainImage2.png'
import {motion} from 'framer-motion'
import proecting from './assets/proecting.png'
import ozelenennya from './assets/ozelenennya.png'
import obslygov from './assets/obslygov.png'
import './App.css'
import Resources from './PagesAndComponents/Components/Resources/Resources'
import MainPageFooter from './PagesAndComponents/Components/MainPageFooter/MainPageFooter'
import Header from './PagesAndComponents/Components/Header/Header'

function App() {

  const carousel = useRef();

  const [carouselWidth, setCarouselWidth] = useState(0);

  const [show, setShow] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);


  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  document.body.style.overflowX='hidden'

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    setCarouselWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);

    window.addEventListener('scroll', handleScroll, { passive: true });


    window.addEventListener('resize', handleResize);
    console.log(screenHeight)
    console.log(screenWidth)





    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [show]);

  return (
    <div className='w-screen relative'>
      <Header offset={scrollPosition}/>
      <img className='absolute z-10 top-5 left-10 w-[295px] sm:max-xl:hidden' src={logo}/>
      <div className='md:h-screen w-screen h-[30vh]'>
        <video muted autoPlay loop className='w-full h-full aspect-auto object-fill brightness-75'><source type="video/mp4" src={video}/></video>
      </div>

      <div className='mt-[20px] lg:grid lg:grid-cols-2'>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-end'>
          <p className='text-left pl-[43px] break-normal w-[384px] lg:text-xl'>Ginkgo Landscape design Company - студія ландшафтного дизайну.</p>
          <div className='lg:hidden pl-[43px]' style={{height:'1px',width:"100vw",backgroundColor:'rgba(134, 166, 149, 1)',transform:"rotate(-2deg)",marginBottom:'20px',marginTop:'10px'}}/>
          <p className='text-left lg:text-xl text-[#86A695] pl-[43px] w-[384px] break-normal mt-[20px]'>
            <span className='bold'> Природа</span>
            <span> — найбільший художник, чий творчий потенціал безмежний.</span>
          </p>
          <div className='lg:hidden pl-[43px]' style={{height:'1px',width:"100vw",backgroundColor:'rgba(134, 166, 149, 1)',transform:"rotate(2deg)",marginTop:'20px'}}/>
          <p className='text-left pl-[43px] mt-[20px] w-[384px] lg:text-xl'>
              Кожен елемент природи є унікальним та неповторним .
              <br/> <br/>
              Її краса витає в кожному диханні вітру, в кожній розквітаючій квітці та в кожному величному пейзажі.
              <br/><br/>
          </p>
        </div>
        <div className='lg:flex lg:flex-col lg:items-start'>
          <div className='lg:hidden pl-[43px]' style={{height:'1px',width:"100vw",backgroundColor:'rgba(134, 166, 149, 1)',transform:"rotate(2deg)",marginBottom:'10px'}}/>
          <p className='font-bold text-[#86A695] lg:text-xl text-left pl-[43px] w-[384px]'>Природа створює красу.<br/>Ми її підкреслюємо.</p>
          <div className='lg:hidden pl-[43px]' style={{height:'1px',width:"100vw",backgroundColor:'rgba(134, 166, 149, 1)',transform:"rotate(-2deg)",marginTop:'10px'}}/>
          <p className='mt-[30px] pl-[43px] lg:text-xl text-left break-normal w-[384px]'>
            Наша мета – створювати естетично привабливий простір. Ми вдосконалюємо ваше середовище більше 15 років, і тому точно знаємо, що потрібно клієнту.
          </p>
        </div>
      </div>

      <div className='flex justify-center pb-[30px] mt-[30px]'>
          <div className='w-[270px] h-[70px] rounded-none border-2 border-[#86A695] font-normal flex justify-center items-center text-2xl	text-[#86A695] bg-no-repeat bg-cover cursor-pointer' style={{backgroundImage:`url(${buttonBackground})`}}>
              Про нас
          </div>
      </div>

      <div className='flex flex-col w-full px-[30px] pb-[30px] basis-full'>
          <div className='flex items-center justify-center'>
            <img src={mainImage1} className='w-full h-[30vh] lg:w-[70vw] lg:h-[70vh] lg:rounded-lg'/>
          </div>
          <p className='mt-[15px] mb-[30px] text-2xl'><span style={{borderBottom:'1px solid black'}}>Об'єкт Конче Заспа</span></p>
          <div className='flex items-center justify-center'>
            <img src={mainImage2} className='w-full h-[30vh] lg:w-[70vw] lg:h-[70vh] lg:rounded-lg'/>
          </div>
          <p className='mt-[15px] text-2xl'><span style={{borderBottom:'1px solid black'}}>Об'єкт Тарасівка</span></p>
        </div>


      <div className='flex justify-center pb-[30px]'>
          <div className='w-[270px] h-[70px] rounded-none border-2 border-[#86A695] font-normal flex justify-center items-center text-2xl	text-[#86A695] bg-no-repeat bg-cover cursor-pointer' style={{backgroundImage:`url(${buttonBackground})`}}>
              Портфоліо
          </div>
      </div>


      <div className='text-black lg:flex lg:flex-col lg:items-center'>
          <h1 className='text-3xl text-left pl-[43px] font-bold'>Що пропонує <br className='lg:hidden'/>компанія GINKGO?</h1>
          <div className='w-6/12 h-[2px] mt-[30px] ml-[43px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
          <p className='pl-[43px] mt-[20px] text-left font-normal text-lg'>Нас не лякає складність проекту. <br/><br/>
          Ми виконуємо всі види робіт та готові до будь-яких об`єктів.<br/><br/>
          Залюбки пройдемо  з вами шлях  від створення ідеї  і до втілення ваших мрій!</p>
          <div className='w-6/12 h-[2px] mt-[30px] ml-[43px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
      </div>

      <motion.div className='cursor-grab overflow-hidden pl-[43px] pt-[30px] lg:pl-[200px]' ref={carousel} whileTap={{cursor:'grabbing'}}>
            <motion.div drag="x" dragConstraints={{right:0,left:-carouselWidth}} className='flex'>
              <motion.div className='min-h-[30vh] min-w-[80vw]'>
                <img className='w-4/5 h-[70%] rounded pointer-events-none' src={proecting} />
                <p className='text-black text-left text-lg'>Проєктування</p>
                <div className='w-6/12 h-[2px] mt-[15px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
              </motion.div>
              <motion.div className='min-h-[30vh] min-w-[80vw]'>
                <img className='w-4/5 h-[70%] rounded pointer-events-none' src={ozelenennya} />
                <p className='text-black text-left text-lg'>Озеленення і благоустрій</p>
                <div className='w-6/12 h-[2px] mt-[15px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
              </motion.div>
              <motion.div className='min-h-[30vh] min-w-[80vw]'>
                <img className='w-4/5 h-[70%] rounded pointer-events-none' src={obslygov} />
                <p className='text-black text-left text-lg'>Обслуговування</p>
                <div className='w-6/12 h-[2px] mt-[15px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
              </motion.div>
            </motion.div>
        </motion.div>

      <div className='flex justify-center pb-[30px]'>
        <div className='w-[270px] h-[70px] rounded-none border-2 border-[#86A695] font-normal flex justify-center items-center text-2xl	text-[#86A695] bg-no-repeat bg-cover cursor-pointer' style={{backgroundImage:`url(${buttonBackground})`}}>
              Послуги
        </div>
      </div>

      <MainPageFooter/>

      <Resources scrollOffset={scrollPosition}/>
    </div>
  )
}

export default App

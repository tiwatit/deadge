import { useEffect, useRef, useState } from 'react'
import video from './assets/video.mp4'
import logo from './assets/logo.png'
import logoM from './assets/whiteLogo.png'
import buttonBackground from './assets/buttonbackground.png'
import mainImage1 from './assets/mainImage1.png'
import mainImage2 from './assets/mainImage2.png'
import {motion} from 'framer-motion'
import proecting from './assets/proecting.jpg'
import ozelenennya from './assets/ozelenennya.png'
import realOzelenennya from './assets/realOzelenennya.jpg'
import obslygov from './assets/obslygov.png'
import realObslygov from './assets/realService.png'
import meeting from './assets/meeting.png'
import developement from './assets/developement.png'
import realisation from './assets/realisation.png'
import service from './assets/service.png'
import restavration from './assets/restavration.png'
import test1 from './assets/test1.png'
import './App.css'
import Resources from './PagesAndComponents/Components/Resources/Resources'
import MainPageFooter from './PagesAndComponents/Components/MainPageFooter/MainPageFooter'
import Header from './PagesAndComponents/Components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Modal from './PagesAndComponents/Components/Modal/Modal'
import carouselbg from './assets/carouselbg.png'
import { ToastContainer } from 'react-toastify'

function App() {

  const carousel = useRef();
  const carousel2 = useRef();
  const carousel3 = useRef();
  const navigate = useNavigate();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselWidth2, setCarouselWidth2] = useState(0);
  const [carouselWidth3, setCarouselWidth3] = useState(0);
  const [show, setShow] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const [colorFacebook,setColorFacebook] = useState(false)
  const [colorTiktok,setColorTiktok] = useState(false)
  const [colorInstagram,setColorInstagram] = useState(false)
  const [colorTelegram,setColorTelegram] = useState(false)
  const [colorPhone,setColorPhone] = useState(false)

  const [modal,setModal] = useState(false)

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      console.log(position)
      if(position>300&&position<955||position>1281&&position<1870)
      {
        setColorPhone(true)}
      else{
        setColorPhone(false)
      }
  
      if(position>230&&position<882||position>1222&&position<1850){
        setColorTelegram(true)}
        else{
        setColorTelegram(false)
      }
      if(position>170&&position<825||position>1156&&position<1781){
        setColorInstagram(true)}
        else
        {setColorInstagram(false)
      }
      if(position>100&&position<765||position>1094&&position<1620){
        setColorTiktok(true)}
        else{setColorTiktok(false)
      }
      if(position>53&&position<700||position>1044&&position<1569){
        setColorFacebook(true)}
        else{setColorFacebook(false)
        }
  };
  document.body.style.overflowX='hidden'

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };



    setCarouselWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
    setCarouselWidth2(carousel2.current.scrollWidth-carousel2.current.offsetWidth);
    setCarouselWidth3(carousel3.current.scrollWidth-carousel3.current.offsetWidth);

    window.addEventListener('scroll', handleScroll, { passive: true });


    window.addEventListener('resize', handleResize);
    console.log(screenHeight)
    console.log(screenWidth)




    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [show]);


  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);




  const vid = useRef();
  function restart() {
    var video = document.getElementById("vid");

    video.pause();
    video.currentTime = 0;
    video.play();
}



  return (
    <div className='w-screen relative sm:overflow-y-hidden sm:overflow-x-hidden'>
      <Header offset={scrollPosition} setShow={setShow} show={show}/>
      {modal &&<Modal setmodal={setModal}/>}
      <ToastContainer         
            toastClassName={(context) =>
            contextClass[context?.type || "default"] +
            "flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            bodyClassName={() => "text-sm font-white font-med block p-3 flex items-center"}
            position="top-right"
            autoClose={3000}/>

      <div className='md:h-screen w-screen h-[36vh] flex flex-col  overflow-hidden'>
        <video id='vid' ref={vid} muted autoPlay playsInline className='w-full h-[36vh] lg:h-[100vh] aspect-auto object-fill brightness-75' onEnded={(e)=>restart()}><source type="video/mp4" src={video}/></video>
        <div className='absolute w-full h-[36vh] lg:h-[100vh] lg:text-4xl flex-col top-[0px] left-[0px] flex justify-center items-center text-white'>
          <div className='w-[100%] h-[50%] flex justify-center items-end'>
            <p className='lg:text-[45px] font-light'>Ginkgo landscape design company<br/>
            <span className='lg:text-3xl font-light'>студія ландшафтного дизайну</span></p>
          </div>
          <div className='w-full h-[30%] flex justify-center items-center'>
              <div className='cursor-pointer w-[600px] sm:max-md:w-[300px] font-light sm:max-md:h-[50px] h-[100px] flex justify-center items-center hover:bg-white hover:text-black' style={{border:'1px solid white'}} onClick={()=>setModal(true)}>
                <p className='lg:text-3xl '>Отримати консультацію</p>
              </div>
          </div>
          <div className='w-full h-[20%] flex items-end justify-center mb-[20px] font-light text-3xl sm:max-md:text-sm'>
            Природа створює красу. Ми її підкреслюємо.
          </div>
        </div>
      </div>
      <div className='w-[100%] flex flex-col'>
        <div className='w-full flex justify-center overflow-hidden mb-[5px]'>
          <p className='text-justify mt-[10px] text-[#86A695] break-normal font-normal sm:max-md:px-[10%]  sm:max-md:pr-[40px] lg:text-[26px] lg:w-[60%] lg:ml-[80px]'>
                <span className='font-normal'> Природа</span>
                <span className='font-light'> — найбільший художник, чий творчий потенціал безмежний.</span>
          </p>
        </div>
        <div className='lg:hidden pl-[43px]' style={{height:'1px',width:"100vw",backgroundColor:'rgba(134, 166, 149, 1)',transform:"rotate(-2deg)",marginBottom:'20px',marginTop:'10px'}}/>
            
        <div className=' flex justify-center'>
          <div className='flex sm:max-lg:flex-col lg:w-[60%] justify-between'>
            <div className='flex flex-col lg:justify-start items-start lg:w-[50%]   '>
              <p className='text-justify sm:max-lg:w-[384px] lg:pl-[43px] lg:text-xl sm:max-md:px-[10%] pr-[40px] font-light break-normal'>
                  Кожен елемент природи є унікальним та неповторним.
                  <br/> <br/>
                  Її краса витає в кожному диханні вітру, в кожній розквітаючій квітці та в кожному величному пейзажі.
              </p>
            </div>
            <div className='lg:hidden' style={{height:'1px',width:"100vw",backgroundColor:'rgba(134, 166, 149, 1)',transform:"rotate(2deg)",marginTop:'20px'}}/>
            <div className='flex flex-col lg:justify-start items-start lg:w-[50%]   '>
              <p className='text-justify lg:pl-[10px] w-auto lg:w-[384px] sm:max-md:px-[10%] lg:text-xl font-light sm:pr-[40px]'>
              <span className='font-normal'>Наша мета</span> – створювати естетично привабливий простір.
              <br/><br/>
              Ми вдосконалюємо ваше середовище більше 15 років, і тому точно знаємо, що потрібно клієнту. <br/>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-screen flex justify-center lg:pl-[43px]'>
        <div className='w-[80%] flex sm:max-md:flex-col justify-center'>
          <div className='relative flex justify-end mt-[10px] lg:w-auto lg:pr-[43px] cursor-pointer'>
              <div className='w-auto h-auto bg-black overflow-hidden ' onClick={()=>navigate(`/projects/kozin`)}>
                <img className='lg:w-[550px] lg:h-[300px] w-[100%] h-[200px] opacity-70 hover:opacity-100 hover:scale-125 transition delay-150' src={mainImage1} />
              </div>
              <p className='absolute bottom-[10px] left-[10px] lg:text-xl text-white font-light' >Об'єкт Козин</p>
          </div>
          <div className='relative flex justify-start mt-[10px] lg:w-auto lg:mr-[30px] lg:pr-[43px] cursor-pointer'>
                <div className='w-auto h-auto bg-black overflow-hidden ' onClick={()=>navigate(`/projects/tarasivka`)}>
                  <img className='lg:w-[550px] lg:h-[300px] w-[100%] h-[200px] opacity-70 hover:opacity-100 hover:scale-125 transition delay-150' src={mainImage2} />
                </div>
                <p className='absolute bottom-[10px] left-[10px] lg:text-xl text-white font-light' >Об'єкт Тарасівка</p>
          </div>
        </div>
      </div>
      {/* PC */}
      <div className='bg-[#86A695] mt-[30px] flex flex-col sm:max-lg:hidden' ref={carousel3}>
      <h1 className='bg-[#86A695] text-white lg:text-3xl font-light mt-[15px]'>Етапи роботи з нами</h1>
        <div style={{background:'#86A695'}} className='flex bg-white flex mt-[20px] justify-center items-center'>
          <img src={carouselbg}/>
        </div>
      </div>



      <motion.div className='cursor-grab bg-[#86A695] mt-[30px] flex flex-col lg:hidden' ref={carousel2}>
      <h1 className='bg-[#86A695] h-[10%] text-white text-xl lg:text-3xl font-light '>Етапи роботи з нами</h1>
        <motion.div drag="x" dragConstraints={{right:0,left:-carouselWidth2}} className='flex  h-[89%] bg-white ml-[50px]' whileDrag={{background:'#86A695'}}>
          <motion.div className='h-[100%] min-w-[300px] bg-[#86A695] font-light'>
            <div className='flex flex-col items-center justify-center h-[100%]'>
              <div className='rounded-full w-[160px] h-[160px] min-h-[160px] mr-[50px] bg-white flex justify-center items-center'>
                <img src={meeting} className='w-[110px] h-[110px]'/>
              </div>
              <div className='flex items-center justify-evenly w-full min-h-[90px]'>
                <div className='bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#86A695] text-xl pr-[50px]'><p className='ml-[50px]'>1</p></div>
                <p className='text-white text-lg text-xl'>Зустріч з замовником </p>
                <img src={test1} className='mr-[10px]'/>
              </div>
            </div>
          </motion.div>
          <motion.div className='h-[100%] min-w-[300px] bg-[#86A695] font-light'>
            <div className='flex flex-col items-center justify-center h-[100%]'>
              <div className='rounded-full w-[160px] h-[160px] min-h-[160px] mr-[50px] bg-white flex justify-center items-center'>
                <img src={developement} className='w-[110px] h-[110px]'/>
              </div>
              <div className='flex items-center justify-evenly w-full min-h-[90px]'>
                <div className='pl-[50px] bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#86A695] text-xl'><p className='mr-[50px]'>2</p></div>
                <p className='text-white text-lg text-xl'>Розробка та затвердження проекту</p>
                <img src={test1} />
              </div>
            </div>
          </motion.div>
          <motion.div className='h-[100%] min-w-[300px] bg-[#86A695] font-light'>
            <div className='flex flex-col items-center justify-center h-[100%]'>
              <div className='rounded-full w-[160px] h-[160px] min-h-[160px] mr-[50px] bg-white flex justify-center items-center'>
                <img src={realisation} className='w-[110px] h-[110px]'/>
              </div>
              <div className='flex items-center justify-evenly w-full min-h-[90px]'>
                <div className='pl-[50px] bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#86A695] text-xl'><p className='mr-[50px]'>3</p></div>
                <p className='text-white text-lg text-xl'>Реалізація</p>
                <img src={test1} />
              </div>
            </div>
          </motion.div>
          <motion.div className='h-[100%] min-w-[300px] bg-[#86A695] font-light'>
            <div className='flex flex-col items-center justify-center h-[100%]'>
              <div className='rounded-full w-[160px] h-[160px] min-h-[160px] mr-[50px] bg-white flex justify-center items-center'>
                <img src={service} className='w-[110px] h-[110px]'/>
              </div>
              <div className='flex items-center justify-evenly w-full min-h-[90px]'>
                <div className='pl-[50px] bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#86A695] text-xl'><p className='mr-[50px]'>4</p></div>
                <p className='text-white text-lg text-xl'>Обслуговування</p>
                <img src={test1} />
              </div>
            </div>
          </motion.div>
          <motion.div className='h-[100%] min-w-[300px] bg-[#86A695] font-light'>
            <div className='flex flex-col items-start justify-center h-[100%]'>
              <div className='rounded-full w-[160px] h-[160px] min-h-[160px] ml-[20px] bg-white flex justify-center items-center'>
                <img src={restavration} className='w-[110px] h-[110px]'/>
              </div>
              <div className='flex items-center justify-start w-full min-h-[90px]'>
                <div className='pl-[50px] bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[#86A695] text-xl'><p className='mr-[50px]'>5</p></div>
                <p className='text-white text-lg text-xl sm:max-xl:ml-[10px]'>Реставрація</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>


      <div className='text-black lg:flex lg:items-center lg:flex-col mb-[20px] overflow-hidden'>
        <div className='flex lg:w-[60%] flex-col'>
        <h1 className='text-3xl text-left font-normal text-center mt-[30px]'>Що пропонує <br className='lg:hidden'/>компанія GINKGO?</h1>
        <div className='w-[100%] flex justify-center'>
          <div className='flex flex-col items-center w-[80%]'>
            <p className='mt-[10px]   lg:text-xl text-justify break-normal font-normal'>Нас не лякає складність проекту. 
            <span className='font-light'> Ми виконуємо всі види робіт та готові до будь-яких об`єктів.</span></p>
            <p className='mt-[20px]   lg:text-xl text-justify break-normal font-normal'>Професійний ландшафтний дизайн <span className='font-light'>враховує як естетичні, так і практичні аспекти, створюючи гармонійні та функціональні зони для розваг , відпочинку,  роботи та життя.</span></p>
            <p className='my-[20px]   lg:text-xl text-center break-normal font-light'>Залюбки пройдемо з вами шлях від створення ідеї і до втілення ваших мрій!</p>
          </div> 
        </div>
        </div>
        <div className='flex justify-between  sm:max-md:hidden w-[80%]'>
          <div className='cursor-pointer relative bg-black h-[250px] w-[30%] overflow-hidden' onClick={()=>navigate('/services')}>
              <img className='h-[100%] w-[100%] opacity-60 hover:opacity-100 hover:scale-125 transition delay-150' src={proecting} />
              <p className='absolute bottom-[10px] left-[5px] lg:text-xl text-white font-light '>Проєктування</p>
          </div>
          <div className='cursor-pointer relative bg-black h-[250px] w-[30%] overflow-hidden' onClick={()=>navigate('/services')}>
            <img className='h-[100%] w-[100%] opacity-60 hover:opacity-100 hover:scale-125 transition delay-150' src={realOzelenennya} />
            <p className='absolute bottom-[10px] left-[5px] lg:text-xl text-white font-light'>Озеленення і благоустрій</p>
          </div>
          <div className='cursor-pointer relative bg-black h-[250px] w-[30%] overflow-hidden' onClick={()=>navigate('/services')}>
            <img className='h-[100%] w-[100%] opacity-60 hover:opacity-100 hover:scale-125 transition delay-150' src={realObslygov} />
            <p className='absolute bottom-[10px] left-[5px] lg:text-xl text-white font-light '>Обслуговування</p>
          </div>
        </div>
      </div>

      

      <motion.div className='cursor-grab overflow-hidden pl-[43px] pt-[30px] lg:pl-[200px] lg:hidden' ref={carousel} whileTap={{cursor:'grabbing'}}>
            <motion.div drag="x" dragConstraints={{right:0,left:-carouselWidth}} className='flex'>
              <motion.div className='cursor-pointer min-h-[30vh] min-w-[80vw]' onClick={()=>navigate('/services')}>
                <img className='w-4/5 h-[70%] rounded pointer-events-none' src={proecting} />
                <p className='text-black text-left text-lg font-light'>Проєктування</p>
                <div className='w-6/12 h-[2px] mt-[15px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
              </motion.div>
              <motion.div className='cursor-pointer min-h-[30vh] min-w-[80vw]' onClick={()=>navigate('/services')}>
                <img className='w-4/5 h-[70%] rounded pointer-events-none' src={ozelenennya} />
                <p className='text-black text-left text-lg font-light' >Озеленення і благоустрій</p>
                <div className='w-6/12 h-[2px] mt-[15px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
              </motion.div>
              <motion.div className='cursor-pointer min-h-[30vh] min-w-[80vw]' onClick={()=>navigate('/services')}>
                <img className='w-4/5 h-[70%] rounded pointer-events-none' src={obslygov} />
                <p className='text-black text-left text-lg font-light'>Обслуговування</p>
                <div className='w-6/12 h-[2px] mt-[15px]' style={{backgroundColor:'rgba(134, 166, 149, 1)'}}/>
              </motion.div>
            </motion.div>
        </motion.div>

      <MainPageFooter/>
      <Resources phoneColor={colorPhone} telegramColor={colorTelegram} instagramColor={colorInstagram} tiktokColor={colorTiktok} facebookColor={colorFacebook} />
    </div>
  )
}

export default App

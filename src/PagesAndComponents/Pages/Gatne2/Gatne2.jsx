import { useNavigate } from 'react-router-dom'
import TopImage from './Images/TopImage.png'
import image1 from './Images/image1.png'
import image2_1 from './Images/image2_1.png'
import image2_2 from './Images/image2_2.png'
import image3_1 from './Images/image3_1.png'
import image3_2 from './Images/image3_2.png'
import image4_1 from './Images/image4_1.png'
import image4_2 from './Images/image4_2.png'
import image5 from './Images/image5.png'
import image6 from './Images/image6.png'
import image7 from './Images/image7.png'
import image8_1 from './Images/image8_1.png'
import image8_2 from './Images/image8_2.png'
import image9 from './Images/image9.png'
import image10 from './Images/image10.png'
import image11 from './Images/image11.png'
import image12 from './Images/image12.png'
import image13_1 from './Images/image13_1.png'
import image13_2 from './Images/image13_2.png'
import image14 from './Images/image14.png'
import image15 from './Images/image15.png'
import { useRef, useState,useEffect } from 'react';
import FooterImg from './Images/Footer.png'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Gatne2({}) {

    const navigate = useNavigate();

    const [show,setShow] = useState();

    document.body.style.overflow='hidden'
    document.body.style.overflowY='auto'
    document.body.style.background='white'
    
    const ref0 = useRef()

    useEffect(()=>{
      ref0.current?.scrollIntoView();
    },[])

    
    const [offset,setOffset]=useState()

    const test = async()=>{
      setOffset(0+window.scrollY)
      console.log(offset)
      console.log(window.scrollY)
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);

  return (
    <div className='w-screen font-light' onWheel={()=>test()}>
      <div className="relative flex flex-col justify-center items-center md:h-screen w-screen h-[36vh] bg-topImage4 bg-cover">
        <p className='left-[0px] text-white text-4xl  p-[15px] sm:max-md:text-sm'>Гатне 2</p>
        <p className='text-white text-4xl  p-[15px]  sm:max-md:text-sm'>Дизайнер Анастасія Балаєва</p>
        <p className='text-white text-4xl  p-[15px] sm:max-md:text-sm'>2021 рік</p>
      </div>
      <Header offset={offset} setShow={setShow} show={show}/>

        <div className='flex flex-col justify-center items-center bg-white text-black font-[45px]'>
          <img className='w-[80%] mt-[10px]' src={image1} style={{marginTop:'15px'}}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]'   src={image2_1} />
            <img className='w-[49%] mt-[10px]'   src={image2_2} />
          </div>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]'   src={image3_1} />
            <img className='w-[49%] mt-[10px]'   src={image3_2} />
          </div>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]'   src={image4_1} />
            <img className='w-[49%] mt-[10px]'   src={image4_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image5}/>
          <img className='w-[80%] mt-[10px]' src={image6}/>
          <img className='w-[80%] mt-[10px]' src={image7}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]'   src={image8_1} />
            <img className='w-[49%] mt-[10px]'   src={image8_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image9}/>
          <img className='w-[80%] mt-[10px]' src={image10}/>
          <img className='w-[80%] mt-[10px]' src={image11}/>
          <img className='w-[80%] mt-[10px]' src={image12}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]'   src={image13_1} />
            <img className='w-[49%] mt-[10px]'   src={image13_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image14}/>
          <img className='w-[80%] mt-[10px]' src={image15}/>
        </div>
      <Footer id={4} image={FooterImg}/>
    </div>
  )
}

export default Gatne2

import { useNavigate } from 'react-router-dom'
import TopImage from './Images/TopImage.png'
import image1 from './Images/image1.png'
import image2_1 from './Images/image2_1.png'
import image2_2 from './Images/image2_2.png'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5_1 from './Images/image5_1.png'
import image5_2 from './Images/image5_2.png'
import image6 from './Images/image6.png'
import image7_1 from './Images/image7_1.png'
import image7_2 from './Images/image7_2.png'
import image8 from './Images/image8.png'
import image9 from './Images/image9.png'
import image10 from './Images/image10.png'
import image11_1 from './Images/image11_1.png'
import image11_2 from './Images/image11_2.png'
import image12 from './Images/image12.png'
import image13_1 from './Images/image13_1.png'
import image13_2 from './Images/image13_2.png'
import image14 from './Images/image14.png'
import image15 from './Images/image15.png'
import image16_1 from './Images/image16_1.png'
import image16_2 from './Images/image16_2.png'
import image17_1 from './Images/image17_1.png'
import image17_2 from './Images/image17_2.png'
import image18 from './Images/image18.png'
import image19 from './Images/image19.png'
import image20 from './Images/image20.png'
import image21 from './Images/image21.png'
import image22 from './Images/image22.png'
import image23_1 from './Images/image23_1.png'
import image23_2 from './Images/image23_2.png'
import image24_1 from './Images/image24_1.png'
import image24_2 from './Images/image24_2.png'
import { useRef, useState, useEffect } from 'react';
import FooterImg from './Images/Footer.png' 
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Tarasivka({}) {

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
      <div className="relative flex flex-col justify-center items-center md:h-screen w-screen h-[36vh] bg-topImage2 bg-cover">
        <p className='left-[0px] text-white text-4xl  p-[15px] sm:max-md:text-sm'>Тарасівка</p>
        <p className='text-white text-4xl  p-[15px]  sm:max-md:text-sm'>Дизайнер Анатолій Широконіс</p>
        <p className='text-white text-4xl  p-[15px] sm:max-md:text-sm'>2009 рік</p>
      </div>

      <Header offset={offset} setShow={setShow} show={show}/>

        <div className='flex flex-col justify-center items-center bg-white text-black font-[45px]'>
          <img className='w-[80%] mt-[10px]' src={image1} style={{marginTop:'15px'}}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]' src={image2_1} />
            <img className='w-[49%] mt-[10px]' src={image2_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image3}/>
          <img className='w-[80%] mt-[10px]' src={image4}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]' src={image5_1} />
            <img className='w-[49%] mt-[10px]' src={image5_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image6}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]' src={image7_1} />
            <img className='w-[49%] mt-[10px]' src={image7_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image8}/>
          <img className='w-[80%] mt-[10px]' src={image9}/>
          <img className='w-[80%] mt-[10px]' src={image10}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]' src={image11_1} />
            <img className='w-[49%] mt-[10px]' src={image11_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image12}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]' src={image13_1} />
            <img className='w-[49%] mt-[10px]' src={image13_2} />
          </div>
          <img className='w-[80%] mt-[10px]' src={image14}/>
          <img className='w-[80%] mt-[10px]' src={image15}/>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]' src={image16_1} />
            <img className='w-[49%] mt-[10px]' src={image16_2} />
          </div>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]' src={image17_1} />
            <img className='w-[49%] mt-[10px]' src={image17_2} />
          </div>
          <img className='w-[80%] mt-[10px]'   src={image18} />
          <img className='w-[80%] mt-[10px]'   src={image19} />
          <img className='w-[80%] mt-[10px]'   src={image20} />
          <img className='w-[80%] mt-[10px]'   src={image21} />
          <img className='w-[80%] mt-[10px]'   src={image22} />
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]'   src={image23_1} />
            <img className='w-[49%] mt-[10px]'   src={image23_2} />
          </div>
          <div className='w-[80%] mt-[0px] flex justify-between'>
            <img className='w-[49%] mt-[10px]'   src={image24_1} />
            <img className='w-[49%] mt-[10px]'   src={image24_2} />
          </div>
        </div>
      <Footer id={2} image={FooterImg}/>
    </div>
  )
}

export default Tarasivka

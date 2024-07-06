import { useEffect, useRef, useState } from 'react';
import topImageAbout from '../../../assets/topImageAbout.png'
import leaf from '../../../assets/leaf.png'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import MainPageFooter from '../../Components/MainPageFooter/MainPageFooter';
function About() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

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
    <div className='w-screen h-auto bg-white overflow-hidden font-light '>
      <Header setShow={setShow} show={show} offset={200}/>
      <div className='w-screen flex justify-center mt-[8vh] mb-[20px] lg:hidden'>
        <div className='lg:w-[60%] sm:max-md:w-[80%] flex flex-col justify-center items-center h-auto  font-light'>
            <h1 className='font-medium text-lg'>
                  Ginkgo Landscape Design Company</h1>
            <div className="text-left lg:text-lg break-normal xl:text-2xl  sm:max-lg:text-black text-justify  "> це не тільки дизайн і виконання робіт, не лише зовнішнє оформлення, але й вираз вашого стилю та індивідуальності в поєднанні з природою. 
            </div>
            <div className="text-left lg:text-xl break-normal mt-[20px]  sm:max-lg:text-black text-justify ">
              Кожен елемент ландшафту, який ми створюємо — це не просто рослинні композиції та архітектрурні форми, це вражаючі відображення особистості та унікального погляду на життя, які виносять простір на новий рівень естетики.
            </div>
        </div>
      </div>
      <div className=' bg-bgleaf2  sm:max-md:bg-bgleaf bg-cover bg-no-repeat lg:py-[40px] min-h-[85vh] flex justify-center '>
        <div className='w-[80%] flex flex-col lg:justify-center items-center '>
          <div className='w-[60%] h-[auto] text-left py-[15px] mt-[6vh] px-[10px]  xl:text-xl sm:max-lg:mb-[35px] sm:max-md:hidden' style={{background:'#CCD7D0D9', borderRadius:'25px'}}>
            <p><span className='xl:text-3xl'>Ginkgo Landscape design Company</span> це не тільки дизайн і виконання робіт, не лише зовнішнє оформлення, але й вираз вашого стилю та індивідуальності в поєднанні з природою. </p>
            <p className='mt-[10px] xl:mt-[20px]'>Кожен елемент ландшафту, який ми створюємо -це не просто  рослинні композиції та архітектрурні форми, це вражаючі відображення особистості та унікального погляду на життя, які виносять простір на новий рівень естетики.</p>
          </div>
         <div className='lg:w-[60%] mt-[20px]  px-[10px] h-[auto] text-justify  py-[15px]    xl:text-xl sm:max-lg:mb-[35px] bg-[#CCD7D0D9] sm:max-md:text-white sm:max-md:bg-inherit' style={{borderTopRightRadius:'25px',borderTopLeftRadius:'25px',borderBottomLeftRadius:'25px',borderBottomRightRadius:'25px'}}>
            <div className='lg:w-[60%] text-left mb-[10px]'><span className='xl:text-3xl text-xl text-left sm:max-md:bg-inherit sm:max-md:text-white'>Наш досвід роботи</span></div>
            <p className=''>В 2007 році, ми почали займатись озелененням прибудинкових ділянок, а через деякий час і обслуговуванням.</p>
            <p className='mt-[10px] xl:mt-[20px]'>На цьому шляху, нам вдалося подолали багато різноманітних викликів під час реалізації об'єктів. Це не тільки технічні особливості монтажу автоматичного поливу та висадки рослин, а й важливі навички по догляду за насадженнями.</p>
            <p className='mt-[10px] xl:mt-[20px]'>Незважаючи на це, про створення власної компанії не думали, але всьому свій час і ось він настав. Ухвалили рішення, що маючи великий досвід та знання,  ми готові розширювати наші можливості.</p>
          </div>
          <div className='  lg:mt-[20px] sm:max-md:mb-[40px] lg:w-[60%] text-center   rounded-[25px] bg-[#CCD7D0D9] sm:max-md:text-white sm:max-md:bg-inherit'>
            <p className=' xl:text-2xl  lg:hidden'>Тому зараз ми зміцнюємо команду Ginkgo яка і на далі  буде професійно втілювати ваші мрії у життя!</p>
            <p className='px-[20px] py-[10px] text-center xl:text-2xl sm:max-md:hidden'>Тому зараз ми зміцнюємо команду Ginkgo<br/>
              яка і на далі  буде професійно втілювати ваші мрії у життя!</p>
          </div>
        </div>
      </div>
      <MainPageFooter/>
    </div>

  )
}

export default About

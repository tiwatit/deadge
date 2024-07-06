import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import contactsbg from'../../../assets/contactsbg.jpg';
import tiktok from '../../../assets/greenTiktok.png'
import instagram from '../../../assets/greenInstagram.png'
import telegram from '../../../assets/greenTelegram.png'
import facebook from '../../../assets/greenFacebook.png'
import Header from '../../Components/Header/Header';
import MainPageFooter from '../../Components/MainPageFooter/MainPageFooter';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const ToastStyle = {
    width: "100px",
    height: "20px"
}

function Contacts({}) {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_oc8sepo', 'template_jntu7wp', form.current, {
            publicKey: 'KnROdNePtEMph3Ndu',
          })
          .then(
            () => {
                toast.success("Success Notification !", {
                    className: ToastStyle
                });
            },
            (error) => {
                toast.error("Error Notification !");
            },
          );
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
    },[]);
  return (
    <div className='w-[100vw] h-full font-light relative'>
        <Header show={show} setShow={setShow} offset={200}/>
        <div className='items-center justify-center flex flex-col mt-[8vh] min-h-[77vh] sm:max-lg:mt-[6vh] lg:bg-contactsbg bg-[#ccd7d0] bg-cover'>
            <ToastContainer         
            toastClassName={(context) =>
            contextClass[context?.type || "default"] +
            "flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            bodyClassName={() => "text-sm font-white font-med block p-3 flex items-center"}
            position="top-right"
            autoClose={3000}/>
            <div className='w-auto bg-[#ccd7d0] flex flex-col  rounded-[10px]'>
                <div className='text-center mt-[20px]'>
                    <p className='outline-none caret-black  text-xl text-[#86A695] mb-[10px]'>Залиште повідомлення <br className='md:hidden'/> і ми надамо консультацію</p>
                </div>
                <div className='flex justify-evenly sm:max-lg:flex-col items-center px-[20px]'>
                    <div className='w-full flex flex-col justify-center items-center w-[50%]'>
                        <div className='flex flex-col items-center relative lg:w-[300px] ' style={{color:'rgba(0, 0, 0, 0.6)'}}>
                            <p className='outline-none caret-black text-[20px] bg-[#86A695] text-white rounded-[5px] mb-[20px] px-[7px]'>+38 098 227 72 99</p>
                            <p className='outline-none caret-black text-[20px] bg-[#86A695] text-white rounded-[5px] mb-[20px] px-[7px]'>+38 050 227 72 99</p>
                            <p className='outline-none caret-black text-[20px] bg-[#86A695] text-white rounded-[5px] mb-[20px] px-[7px]'>ginkgo.company.ua@gmail.com</p>
                        </div>
                        <div className='sm:flex sm:justify-evenly sm:w-[300px]' style={{position:'initial'}}>
                            <div className='rounded-full flex justify-center items-center bg-white cursor-pointer'>
                                <a href='https://t.me/Ginkgo_ua' target="_blank"><img src={telegram} className='max-w-[50px] max-h-[50px] w-[50px] h-[50px] hover:brightness-75'/></a>
                            </div>
                            <div className='rounded-full flex justify-center items-center bg-white cursor-pointer'>
                                <a href='https://www.instagram.com/ginkgo_landscape_design?igsh=MXM4N2xlbGk4YXltZQ%3D%3D&utm_source=qr' target="_blank"><img src={instagram} className='max-w-[50px] max-h-[50px] w-[50px] h-[50px] hover:brightness-75' /></a>
                            </div>
                            <div className='rounded-full flex justify-center items-center bg-white cursor-pointer'>
                                <a href='https://www.tiktok.com/@_ginkgo_?_t=8ltkmxNYShh&_r=1' target="_blank"><img src={tiktok} className='max-w-[50px] max-h-[50px] w-[50px] h-[50px] hover:brightness-75' /></a>
                            </div>
                            <div className='rounded-full flex justify-center items-center bg-white cursor-pointer'>
                                <a href='https://www.facebook.com/share/3L8uzffv5PTZEtw3/?mibextid=LQQJ4d' target="_blank"><img src={facebook} className='max-w-[50px] max-h-[50px] w-[50px] h-[50px] hover:brightness-75'/></a>
                            </div>
                        </div>
                    </div>
                    <form className='flex flex-col justify-center items-center pb-[30px] px-[30px] mt-[10px]' ref={form} onSubmit={sendEmail}>

                        <input className='my-[10px] w-[300px] bg-[#86A695] placeholder-white text-white outline-none caret-black text-[20px] pl-[5px] rounded-[5px]'  placeholder='Як до вас звертатись?' name="user_name" required/>
                        <input type="tel"  className="w-[300px] bg-[#86A695] placeholder-white text-white outline-none caret-black text-[20px] pl-[5px] rounded-[5px]" placeholder='Ваш номер телефону' name="user_phone" required pattern="[0-9]{10,12}"/>
                            <input type="email"  className='my-[10px] w-[300px] bg-[#86A695] placeholder-white text-white outline-none caret-black text-[20px] pl-[5px] rounded-[5px]' placeholder='Ваша електронна адреса' name="user_email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                        <textarea  className='w-[300px] bg-[#86A695] placeholder-white outline-none text-white caret-black text-[20px] resize-none h-[70px] pl-[5px] rounded-[5px]' placeholder='Повідомлення' name="user_message" required/>
                        <div className='lg:w-[300px]'>
                            <button className='mt-[20px] w-[130px] h-[30px] bg-[#86A695] text-white rounded-[5px] hover:brightness-75'>Надіслати</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <MainPageFooter />
    </div>
  )
}

export default Contacts
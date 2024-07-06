
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import modalHead from'../../../assets/modalHead.png';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function Modal({setmodal}) {

    const form = useRef();


    const ToastStyle = {
        width: "100px",
        height: "20px"
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_oc8sepo', 'template_jntu7wp', form.current, {
            publicKey: 'KnROdNePtEMph3Ndu',
          })
          .then(
            () => {
                toast.success("Відправлено!", {
                    className: ToastStyle
                });
                setmodal(false);
            },
            (error) => {
                toast.error("Помилка!");
            },
          );
      };
    

  return (
    <div className='fixed top-0 left-0 w-screen md:h-100vh w-screen h-[100vh] z-50 flex sm:max-md:flex-col justify-center items-center font-light' style={{background:'rgb(0, 0, 0, 0.7)'}} onClick={()=>setmodal(false)}>
        <div className=' sm:max-md:h-auto h-auto lg:w-[30vw] justify-center flex sm:max-md:flex-col sm:max-md:w-[90vw] flex-col' onClick={(e)=>e.stopPropagation()}>
            <img src={modalHead} style={{borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}/>
            <form className='bg-[#ccd7d0] flex flex-col justify-center items-center pb-[30px] px-[30px]' ref={form} onSubmit={sendEmail}>
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
  )
}

export default Modal

import { useNavigate } from 'react-router-dom'
import Menu from '../Menu/Menu';
import { useEffect, useState } from 'react';
import HeaderLogo from'../../../assets/whiteLogo.png';
function Header({offset,setShow, show}) {
  const navigate = useNavigate();
  return (
    <div className='px-4 z-5 fixed top-0 left-0 w-screen lg:h-[8vh] h-[6vh] flex justify-between items-center text-white z-30' style={show?{background:'none'}:offset>=200?{background:'#86a695'}:null}>
        <div className='w-[30vw] z-30'>
          <img className='lg:h-[50px] z-30 h-[25px] cursor-pointer' src={HeaderLogo} onClick={()=>{navigate('/deadge/')}} />
        </div>
        <div className='flex flex-col text-3xl lg:text-4xl w-[70vw] items-end' >
          {/* <div className='text-3xl'>Меню</div> */}
          <div className='h-[27px] flex flex-col justify-between items-center flex-col z-[11] lg:hidden' onClick={()=>{setShow(!show)}} style={show ? {alignItems:'center',justifyContent:'center'}:null}>
            <div className='bg-white w-[40px] h-[2px]' style={show ? {rotate:'45deg',width:'50px',translate:"0px 3px",backgroundColor:'white'} : null} />
            <div className='bg-white w-[40px] h-[2px]' style={show ? {display:'none'} : null} />
            <div className='bg-white w-[40px] h-[2px]' style={show ? {rotate:'-45deg',width:'50px',backgroundColor:'white'} : null} />
          </div> 
          <div className=' w-[100vw] sm:max-md:h-7vh px-4 z-20 flex justify-end items-center lg:h-[100px]'>
            <div className='lg:flex lg:justify-between lg:text-xl sm:max-md:text-xl sm:hidden text-white font-light'>
              <p className='cursor-pointer mr-[20px] hover:underline' onClick={()=>navigate('/deadge/about')}>Про нас</p>
              <p className='cursor-pointer mr-[20px] hover:underline' onClick={()=>navigate('/deadge/contacts')}>Контакти</p>
              <p className='cursor-pointer mr-[20px] hover:underline' onClick={()=>navigate('/deadge/services')}>Послуги</p>
              <p className='cursor-pointer mr-[20px] hover:underline' onClick={()=>navigate('/deadge/prices')}>Ціни</p>
              <p className='cursor-pointer mr-[20px] hover:underline' onClick={()=>navigate('/deadge/portfolio')}>Портфоліо</p>
              <p className='mr-[20px]'>+38 098 227 72 99</p>
              <p>+38 050 227 72 99</p>
            </div>
          </div>
        </div>
        <Menu show={show} setShow={setShow}/>
    </div>
  )
}

export default Header
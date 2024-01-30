import { useNavigate } from 'react-router-dom'
// import Menu from './Menu';
import { useEffect, useState } from 'react';
import HeaderLogo from'../../../assets/logo.png';
function Header({offset,setShow, show}) {

  return (
    <div className='px-4 lg:px-10 z-20 fixed top-0 left-0 w-screen h-[10vh] flex justify-between items-center bg-[#86a695] text-white' style={show?{background:'none'}:offset<100?{display:'none'}:null}>
        <img className='h-[85px]' src={HeaderLogo} onClick={()=>{setShow(false);navigate('/deploy-test/')}}/>
        <div className='flex text-3xl lg:text-4xl lg:hidden' onClick={()=>setShow(!show)}>
          <div className='text-3xl'>Меню</div>
          <div className='h-[30px] flex flex-col justify-between items-center flex-col' style={show ? {alignItems:'center',justifyContent:'center'}:null}>
            <div className='bg-black w-[40px] h-[2px]' style={show ? {rotate:'45deg',width:'50px',translate:"0px 3px",backgroundColor:'white'} : null} />
            <div className='bg-black w-[40px] h-[2px]' style={show ? {display:'none'} : null} />
            <div className='bg-black w-[40px] h-[2px]' style={show ? {rotate:'-45deg',width:'50px',backgroundColor:'white'} : null} />
          </div> 
        </div>
        <div className='lg:flex lg:justify-between lg:w-1/2 lg:text-2xl sm:hidden'>
            <p>Про нас</p>
            <p>Контакти</p>
            <p>Послуги</p>
            <p>Портфоліо</p>
            <p>+380944568822</p>
            <p>+380944568822</p>
        </div>
        {/* <Menu show={show} setShow={setShow}/> */}
    </div>
  )
}

export default Header
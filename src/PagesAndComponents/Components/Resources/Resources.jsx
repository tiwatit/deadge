import { useNavigate } from 'react-router-dom'
import facebook from'../../../assets/facebook.png';
import facebookBlack from'../../../assets/greenFacebook.png';
import phone from'../../../assets/phone.png';
import phoneBlack from'../../../assets/greenPhone.png';
import telegram from'../../../assets/telegram.png';
import telegramBlack from'../../../assets/greenTelegram.png';
import tiktok from'../../../assets/tiktok.png';
import tiktokBlack from'../../../assets/greenTiktok.png';
import instagram from '../../../assets/instagram.png'
import instagramBlack from'../../../assets/greenInstagram.png';

import { useEffect, useRef, useState } from 'react';
import ResourcesItem from './ResourcesItem/ResourcesItem';


function Resources({phoneColor,telegramColor,instagramColor,tiktokColor,facebookColor}) {



  return (
    <div className='hidden lg:block fixed bottom-10 left-5 md:left-10 z-10 flex flex-col justify-between lg:flex lg:justify-between h-[200px] lg:h-[300px]' >
      <a href='/contacts'><ResourcesItem src={phoneColor?phoneBlack:phone}/></a>
      <a href='https://t.me/Ginkgo_ua' target="_blank"><ResourcesItem src={telegramColor?telegramBlack:telegram} href/></a>
      <a href='https://www.instagram.com/ginkgo_landscape_design?igsh=MXM4N2xlbGk4YXltZQ%3D%3D&utm_source=qr' target="_blank"><ResourcesItem src={instagramColor?instagramBlack:instagram}/></a>
      <a href='https://www.tiktok.com/@_ginkgo_?_t=8ltkmxNYShh&_r=1' target="_blank"><ResourcesItem src={tiktokColor?tiktokBlack:tiktok}/></a>
      <a href='https://www.facebook.com/share/3L8uzffv5PTZEtw3/?mibextid=LQQJ4d' target="_blank"><ResourcesItem src={facebookColor?facebookBlack:facebook}/></a>
    </div>
  )
}

export default Resources

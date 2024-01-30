import { useNavigate } from 'react-router-dom'
import facebook from'../../../assets/facebook.png';
import facebookBlack from'../../../assets/facebookBlack.png';
import phone from'../../../assets/phone.png';
import phoneBlack from'../../../assets/phoneBlack.png';
import telegram from'../../../assets/telegram.png';
import telegramBlack from'../../../assets/telegramBlack.png';
import tiktok from'../../../assets/tiktok.png';
import tiktokBlack from'../../../assets/tiktokBlack.png';
import instagram from '../../../assets/instagram.png'
import instagramBlack from'../../../assets/instagramBlack.png';

import { useEffect, useRef, useState } from 'react';
import ResourcesItem from './ResourcesItem/ResourcesItem';


function Resources({scrollOffset}) {





  return (
    <div className='hidden lg:block fixed bottom-10 left-5 md:left-10 z-20 flex flex-col justify-between lg:flex lg:justify-between h-[200px] lg:h-[300px]' >
      <ResourcesItem  src={scrollOffset>100?phoneBlack:phone}/>
      <ResourcesItem src={scrollOffset>100?telegramBlack:telegram}/>
      <ResourcesItem src={scrollOffset>100?instagramBlack:instagram}/>
      <ResourcesItem src={scrollOffset>100?tiktokBlack:tiktok}/>
      <ResourcesItem src={scrollOffset>100?facebookBlack:facebook}/>
    </div>
  )
}

export default Resources

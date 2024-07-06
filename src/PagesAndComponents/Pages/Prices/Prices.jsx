import { useEffect, useRef, useState } from 'react';
import topImageAbout from '../../../assets/topImageAbout.png'
import leaf from '../../../assets/leaf.png'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import MainPageFooter from '../../Components/MainPageFooter/MainPageFooter';
import proecting2 from '../../../assets/proecting2.png'
import ozelenennya2 from '../../../assets/ozelenennya2.png'
import obslygov2 from '../../../assets/obslygov2.png'
import packets from '../../../assets/packets.png'
import Resources from '../../Components/Resources/Resources';
function Prices() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const [colorFacebook,setColorFacebook] = useState(true)
    const [colorTiktok,setColorTiktok] = useState(true)
    const [colorInstagram,setColorInstagram] = useState(true)
    const [colorTelegram,setColorTelegram] = useState(true)
    const [colorPhone,setColorPhone] = useState(true)

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
    <div className='w-screen h-auto bg-white overflow-hidden font-light text-white'>
      <Header setShow={setShow} show={show} offset={200}/>
      <div className=' w-screen h-auto mt-[10vh] flex flex-col items-center sm:max-lg:pl-[43px] sm:max-lg:pr-[30px]'>
        <div className='lg:w-[60%]'>
            <div className='relative mt-[20px]'>
                    <img src={proecting2}  className='lg:h-[200px] w-[100%] sm:max-sm:h-[100px]' />
                    <p className='absolute text-white bottom-[15px] left-[15px] lg:text-4xl sm:text-xl'>Проєктування</p>
            </div>
            {/* <div className='mt-[20px] flex flex-col items-center justify-between text-white bg-cover bg-no-repeat lg:bg-bgproect  sm:max-md:bg-[#00000099]'>
                <div className='bg-[#86A69599] w-[auto] rounded-b-[5px] text-xl px-[10px]'>
                    Пакети Проєктування
                </div>
                <div className='w-[100%] flex sm:max-md:flex-col lg:justify-evenly pb-[20px]'>
                    <div className='flex flex-col mt-[20px] bg-[#00000099] px-[20px] py-[20px]'>
                        <div className='bg-[#86A69599] px-[15px] py-[5px]' style={{border:'1px solid white', borderRadius:'10px'}}>Мінімальний<br/>2500 грн/100 м²</div> 
                        <ol className='text-left mt-[10px]'>
                            <li className='mt-[10px]'>1.Генеральний план</li>
                            <li className='mt-[10px]'>2.Дендроплан</li>
                            <li className='mt-[10px]'>3.Розбивочне креслення</li>
                            <li className='mt-[10px]'>4.Посадкове креслення</li>
                            <li className='mt-[10px]'>5.План покриттів</li>
                            <li className='mt-[10px]'>6.Схема автоматичного поливу</li>
                        </ol>
                    </div>
                    <div className='flex flex-col mt-[20px] bg-[#00000099] px-[20px] py-[20px]'>
                        <div className='bg-[#86A69599] px-[15px] py-[5px]' style={{border:'1px solid white', borderRadius:'10px'}}>Базовий<br/>3900 грн/100 м</div>
                        <ol className='text-left mt-[10px]'>
                            <li className='mt-[10px]'>1.Генеральний план</li>
                            <li className='mt-[10px]'>2.Дендроплан</li>
                            <li className='mt-[10px]'>3.Розбивочне креслення</li>
                            <li className='mt-[10px]'>4.Посадкове креслення</li>
                            <li className='mt-[10px]'>5.План покриттів</li>
                            <li className='mt-[10px]'>6.Схема автоматичного поливу</li>
                            <li className='mt-[10px]'>7.3D візуалізація</li>
                            <li className='mt-[10px]'>8.Схема освітлення</li>
                        </ol>
                    </div>
                    <div className='flex flex-col mt-[20px] bg-[#00000099] px-[20px] py-[20px]'>
                        <div className='bg-[#86A69599] px-[15px] py-[5px]'  style={{border:'1px solid white', borderRadius:'10px'}}>Максимальний<br/>6800 грн/100 м²</div>     
                        <ol className='text-left mt-[10px]'>
                            <li className='mt-[10px]'>1.Генеральний план</li>
                            <li className='mt-[10px]'>2.Дендроплан</li>
                            <li className='mt-[10px]'>3.Розбивочне креслення</li>
                            <li className='mt-[10px]'>4.Посадкове креслення</li>
                            <li className='mt-[10px]'>5.План покриттів</li>
                            <li className='mt-[10px]'>6.Схема автоматичного поливу</li>
                            <li className='mt-[10px]'>7.3D візуалізація</li>
                            <li className='mt-[10px]'>8.Схема освітлення</li>
                            <li className='mt-[10px]'>9.План дренажної системи</li>
                            <li className='mt-[10px]'>10.План водовідведення дощових вод</li>
                            <li className='mt-[10px]'>11.Вертикальне планування</li>
                            <li className='mt-[10px]'>12.Топографічна зйомка</li>
                        </ol>
                    </div>
                </div>
            </div>   */}
            <img src={packets} className='mt-[20px] '/>
            <div className='w-[100%]'>
                <p className='text-white lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] ' style={{border:"1px solid #CCD7CF"}}>ПРОЄКТНІ РОБОТИ З ЛАНДШАФТНОГО ДИЗАЙНУ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Генеральний план</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td className="w-[100px]" >800</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Дендроплан</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td >1200</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Розбивочне креслення</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td>3900</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>4</td>
                            <td style={{borderRight:'1px solid white'}}>Посадкове креслення</td>
                            <td style={{borderRight:'1px solid white'}}>100 м<sup>2</sup></td>
                            <td>350</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>5</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3D візуалізація</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td>1100</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>6</td>
                            <td style={{borderRight:'1px solid white'}}>План покриттів</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>7</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Схема автоматичного поливу</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>8</td>
                            <td style={{borderRight:'1px solid white'}}>Схема освітлення</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td>350</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>9</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>План дренажної системи</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>10</td>
                            <td style={{borderRight:'1px solid white'}}>План системи водовідведення дощових вод</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>11</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Вертикальне планування</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td>від 1000</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>12</td>
                            <td style={{borderRight:'1px solid white'}}>Топографічна зйомка</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td>від 3500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='relative mt-[20px]'>
                    <img src={ozelenennya2}  className='lg:h-[200px] w-[100%] sm:max-sm:h-[100px]' />
                    <p className='absolute text-white bottom-[15px] left-[15px] lg:text-4xl sm:text-xl'>Озеленення і благоустрій</p>
            </div>

            <div className='w-[100%]'>
                <p className='text-black lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] text-white' style={{border:"1px solid #CCD7CF"}}>ПІДГОТОВКА ДІЛЯНКИ ДО ОЗЕЛЕНЕННЯ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Прибирання ділянки від сміття</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td className="w-[100px]" >від 30</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Завантаження та вивіз сміття</td>
                            <td style={{borderRight:'1px solid white'}}>тонна</td>
                            <td >від 1200</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Обробка ділянки гербіцидом від бур'янів</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 5</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>4</td>
                            <td style={{borderRight:'1px solid white'}}>Розбивка ділянки</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 30</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>5</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Чорнове планування ділянки під рівень</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 35</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>6</td>
                            <td style={{borderRight:'1px solid white'}}>Чорнове планування ділянки зі зміною рельєфу</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 45</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>7</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Розробка грунту до 10 см</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 45</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>8</td>
                            <td style={{borderRight:'1px solid white'}}>Розробка грунту понад 10 см вручну</td>
                            <td style={{borderRight:'1px solid white'}}>м³</td>
                            <td>від 500</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>9</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Розробка грунту на ущільнених грунтах</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>коєфіцієнт</td>
                            <td>1,3</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>10</td>
                            <td style={{borderRight:'1px solid white'}}>Переміщення грунту тачками до 50 м</td>
                            <td style={{borderRight:'1px solid white'}}>м³</td>
                            <td>від 750</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>11</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Переміщення грунту тачками понад 50 м</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 950</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>12</td>
                            <td style={{borderRight:'1px solid white'}}>Зняття дернини вручну</td>
                            <td style={{borderRight:'1px solid white'}}>шт</td>
                            <td>від 60</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>13</td>
                            <td style={{borderRight:'1px solid white'}}>Культивація</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 60</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>14</td>
                            <td style={{borderRight:'1px solid white'}}>Ущільнення грунту</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 10</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>15</td>
                            <td style={{borderRight:'1px solid white'}}>Ущільнення грунту</td>
                            <td style={{borderRight:'1px solid white'}}>м/п</td>
                            <td>від 55</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>16</td>
                            <td style={{borderRight:'1px solid white'}}>Чистове планування </td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 50</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='w-[100%]'>
                <p className='text-black lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] text-white' style={{border:"1px solid #CCD7CF"}}>ПОСАДКОВІ РОБОТИ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Підбір рослин в садових центрах та розсадниках</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>шт</td>
                            <td className="w-[100px]" >10 % від вартості</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Посадка дерев та кущів</td>
                            <td style={{borderRight:'1px solid white'}}>шт</td>
                            <td >35-55 % від вартості</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Посадка крупномірів та ексклюзивних рослин</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>шт</td>
                            <td>30-50 % від вартості</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>4</td>
                            <td style={{borderRight:'1px solid white'}}>Посадка крупномірів та ексклюзивних рослин зимовий час</td>
                            <td style={{borderRight:'1px solid white'}}>шт/коєфіцієнт</td>
                            <td>1,4</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>5</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Посадка багаторічників </td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>шт</td>
                            <td>від 50 % від вартості</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>6</td>
                            <td style={{borderRight:'1px solid white'}}>Розмітка посадок</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td>від 30</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>7</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Змішування грунтосуміші вручну(торф, пісок, чорнозем)</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 850</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>8</td>
                            <td style={{borderRight:'1px solid white'}}>Укладання геотекстилю з фіксацією</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 60</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>9</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Мульчування корою</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 40</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>10</td>
                            <td style={{borderRight:'1px solid white'}}>Мульчування гравієм</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 120</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>11</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Посадка цибулинних</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 20</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>12</td>
                            <td style={{borderRight:'1px solid white'}}>Вкладання каменів, валунів(без вартості крану)</td>
                            <td style={{borderRight:'1px solid white'}}>тонна</td>
                            <td>від 4500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='w-[100%]'>
                <p className='text-black lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] text-white' style={{border:"1px solid #CCD7CF"}}>ОБЛАШТУВАННЯ ГАЗОНУ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Внесення добрив під газон</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td className="w-[100px]" >від 6</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Розвантаження та розвезення рулонів по ділянці</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td >від 12</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Укладання сітки від кротів без земляних робіт</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 30</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>4</td>
                            <td style={{borderRight:'1px solid white'}}>Укладання сітки від кротів з фіксацією на глибині 20 см</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 120</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>5</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Укладка рулонного газону</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 55</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>6</td>
                            <td style={{borderRight:'1px solid white'}}>Посів газону(без вартості насіння)</td>
                            <td style={{borderRight:'1px solid white'}}>від 40</td>
                            <td>від 30</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>7</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Влаштування газону на схилах з використанням георешітки</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 350</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='w-[100%]'>
                <p className='text-black lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] text-white' style={{border:"1px solid #CCD7CF"}}>РОБОТИ ПО БЛАГОУСТРОЮ ДІЛЯНКИ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Монтаж системи автоматичного поливу</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>проєкт</td>
                            <td className="w-[100px]" >40%</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Монтаж ландшафтного освітлення</td>
                            <td style={{borderRight:'1px solid white'}}>проєкт</td>
                            <td >30-40 % від вартості</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Влаштування системи грунтового дренажу</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м/пог.</td>
                            <td>від 750</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>4</td>
                            <td style={{borderRight:'1px solid white'}}>Влаштування підпірних стінок</td>
                            <td style={{borderRight:'1px solid white'}}>м/пог.</td>
                            <td>від 900</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>5</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Мощення доріжок</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 350</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='relative mt-[20px]'>
                    <img src={obslygov2}  className='lg:h-[200px] w-[100%] sm:max-sm:h-[100px]' />
                    <p className='absolute text-white bottom-[15px] left-[15px] lg:text-4xl sm:text-xl'>Обслуговування</p>
            </div>

            <div className='w-[100%]'>
                <p className='text-black lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] text-white' style={{border:"1px solid #CCD7CF"}}>ОБСЛУГОВУВАННЯ ДІЛЯНКИ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Комплексний догляд за садом (4 рази на місяць)</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td className="w-[100px]" >від 3000</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Обробка рослин від хвороб та шкідників</td>
                            <td style={{borderRight:'1px solid white'}}>10 л</td>
                            <td >від 950</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Внесення  добрив під рослини</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>шт</td>
                            <td>від 45</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>4</td>
                            <td style={{borderRight:'1px solid white'}}>Формуюча обрізка дерев</td>
                            <td style={{borderRight:'1px solid white'}}>шт</td>
                            <td>від 200</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>5</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Санітарна обрізка дерев</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>шт</td>
                            <td>від 150</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>6</td>
                            <td style={{borderRight:'1px solid white'}}>Омолоджувальна обрізка крон плодових дерев</td>
                            <td style={{borderRight:'1px solid white'}}>шт</td>
                            <td>від 2000</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>7</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Обрізання чагарників</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>шт</td>
                            <td>від 100</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>8</td>
                            <td style={{borderRight:'1px solid white'}}>Обрізання живоплотів</td>
                            <td style={{borderRight:'1px solid white'}}>м/пог.</td>
                            <td>від 100</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>9</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Топіарна стрижка рослин</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>шт</td>
                            <td>від 500</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>10</td>
                            <td style={{borderRight:'1px solid white'}}>Укриття на зиму теплолюбних рослин</td>
                            <td style={{borderRight:'1px solid white'}}>шт</td>
                            <td>від 150</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>11</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Прополювання декоративних композицій вручну</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 30</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>12</td>
                            <td style={{borderRight:'1px solid white'}}>Корчування пнів</td>
                            <td style={{borderRight:'1px solid white'}}>шт</td>
                            <td>від 700</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>13</td>
                            <td style={{borderRight:'1px solid white'}}>Спилювання дерев</td>
                            <td style={{borderRight:'1px solid white'}}>шт</td>
                            <td>від 1000</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>14</td>
                            <td style={{borderRight:'1px solid white'}}>Побілка дерев</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td>від 65</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='w-[100%]'>
                <p className='text-black lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] text-white' style={{border:"1px solid #CCD7CF"}}>ОБСЛУГОВУВАННЯ ГАЗОНУ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Викошування газону до 400 м2</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td className="w-[100px]" >7</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Викошування газону  400- 1000 м²</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td >6</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Викошування газону від 1000 м²</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>4</td>
                            <td style={{borderRight:'1px solid white'}}>Аерація та скарифікація газону</td>
                            <td style={{borderRight:'1px solid white'}}>м<sup>2</sup></td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>5</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Внесення добрив</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>6</td>
                            <td style={{borderRight:'1px solid white'}}>Обробка від хвороб (фунгіцидами)</td>
                            <td style={{borderRight:'1px solid white'}}>100 м²</td>
                            <td>від 650</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>7</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Знищення бур'янів (обробка гербіцидами)</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>100 м²</td>
                            <td>від 650</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>8</td>
                            <td style={{borderRight:'1px solid white'}}>Знищення бур'янів (прополювання вручну)</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 40</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>9</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Обрізка краю газону</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 30</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>10</td>
                            <td style={{borderRight:'1px solid white'}}>Підсів газону</td>
                            <td style={{borderRight:'1px solid white'}}>м²</td>
                            <td>від 300</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>11</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Піскування газону (без вартості піску)</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>м²</td>
                            <td>від 45</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='w-[100%]'>
                <p className='text-black lg:text-xl mt-[20px] bg-[#86A695] py-[5px] w-[100%] text-white' style={{border:"1px solid #CCD7CF"}}>ОБСЛУГОВУВАННЯ СИСТЕМИ ЗРОШЕННЯ</p>
                <table className="table-fixed text-black lg:text-xl mb-[20px]" style={{border:"1px solid #CCD7CF"}}>
                    <thead className='text-white'>
                        <tr style={{background:'#86A695',borderBottom:'1px solid white'}}>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >№</th>
                            <th style={{borderRight:'1px solid white'}} className='font-light' >Види робіт </th>
                            <th style={{borderRight:'1px solid white'}} className='font-light w-[10%]' >Одиниця виміру</th>
                            <th className='font-light' >Ціна/грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>1</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>Консервація системи</td>
                            <td className="w-[400px]" style={{borderRight:'1px solid #CCD7CF'}}>зона</td>
                            <td className="w-[100px]" >від 300</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid white'}}>2</td>
                            <td style={{borderRight:'1px solid white'}}>Запуск системи</td>
                            <td style={{borderRight:'1px solid white'}}>зона</td>
                            <td >від 150</td>
                        </tr>
                        <tr>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>3</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>Налаштування, регулювання, чистка фільтрів і тд</td>
                            <td style={{borderRight:'1px solid #CCD7CF'}}>виїзд</td>
                            <td>від 1500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      <Resources phoneColor={colorPhone} telegramColor={colorTelegram} instagramColor={colorInstagram} tiktokColor={colorTiktok} facebookColor={colorFacebook}/>
      <MainPageFooter/>
    </div>

  )
}

export default Prices

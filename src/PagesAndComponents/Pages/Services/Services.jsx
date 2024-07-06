import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import { useState,useEffect } from 'react';
import Resources from '../../Components/Resources/Resources';
import proect from'../../../assets/proect.png';
import MainPageFooter from '../../Components/MainPageFooter/MainPageFooter';
import proect2 from '../../../assets/proect2.png';
import proecting from '../../../assets/proecting3.png'
import realOzelenennya from '../../../assets/ozelenennya3.png'
import realObslygov from '../../../assets/obslygov3.png'
function Services({id,image}) {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [colorFacebook,setColorFacebook] = useState(true)
    const [colorTiktok,setColorTiktok] = useState(true)
    const [colorInstagram,setColorInstagram] = useState(true)
    const [colorTelegram,setColorTelegram] = useState(true)
    const [colorPhone,setColorPhone] = useState(true)

    const [proectingToggle,setProectingToggle] = useState(false)
    const [ozelenennyaToggle,setOzelenennyaToggle] = useState(false)
    const [serviceToggle,setServiceToggle] = useState(false)

    const handleScroll = () => {
        // const position = window.pageYOffset;
        // console.log(position)
        // setScrollPosition(position);
        // if(position>2542){
        //     setColorFacebook(false)}
        // else{
        //     setColorFacebook(true)
        // }

        // if(position>2620){
        //     setColorTiktok(false)}
        // else{
        //     setColorTiktok(true)
        // }
        
        // if(position>2800){
        //     setColorInstagram(false)
        // }
        // else{
        //     setColorInstagram(true)
        // }
        
        // if(position>2850){
        //     setColorTelegram(false)
        // }
        // else{
        //     setColorTelegram(true)
        // }

        // if(position>2935){
        //     setColorPhone(false)
        // }
        // else{
        //     setColorPhone(true)
        // }
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
    <div className='w-screen font-light lg:text-xl sm:overflow-hidden'>
        <Header setShow={setShow} show={show} offset={200}/>
        <div className='sm:max-lg:pl-[43px] w-screen h-auto mt-[10vh] sm:max-lg:pr-[30px] flex flex-col items-center'>
          <div className='lg:w-[60%]'>
            <div className='w-auto h-auto text-left'>
              <p className='text-justify	'><span className='font-medium text-[#86A695] text-2xl'>
                Ландшафтний дизайн</span> - результат комплексної роботи над створенням та озелененням зовнішніх просторів: саду, подвір'я, територорій загального користування. Він включає в себе вивчення та аналіз природного середовища, рельєфу, ґрунтів, клімату, а також реалізацію побажань та потреб замовника.
              </p>
              <p className='mt-[20px] text-justify	'>
                Після зустрічі із замовником, обміру території та вивчення особливостей ділянки створюється стилістична концепція саду.  А саме : встановлення цілей та задач проєкту, розташування функціональних зон за врахування потреб і естетичних вимог замовника. Враховуючи складність ділянки і побажання замовника, визначаємо час виконання та вартість робіт.
              </p>
              <div className='relative mt-[20px] cursor-pointer bg-black' onClick={()=>{setProectingToggle(!proectingToggle)}}>
                <img src={proecting}  className='lg:h-[400px] w-[100%] sm:max-sm:h-[100px] opacity-100 hover:opacity-60' />
                <div className='absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150]  opacity-75 hover:opacity-100 sm:max-md:opacity-100 hover:bg-[#00000099] p-[10px] text-center'>Проєктування
                  <span className='lg:text-2xl sm:text-xl'>детальніше</span>
                </div>

              </div>
              {proectingToggle==true?
              <div>
                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190]'>Проєктування ландшафтного дизайну</span></div>
                  <p className='bg-[#CCD7CF] p-[8px]'>Створення  робочих планів та креслень, які знадобляться для виконання робіт, то ж розповімо про основну документацію.</p>
                </div>

                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] rounded-[5px]'>Генеральний план</span></div>
                  <p className='bg-[#CCD7CF] p-[8px] rounded-[5px]'>Детальне креслення, що включає в себе розміщення рослин, доріжок, об'єктів архітектури, водних елементів та інших об'єктів.</p>
                </div>

                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] rounded-[5px]'>Дендроплан</span></div>
                  <p className='bg-[#CCD7CF] p-[8px] rounded-[5px]'>На цьому кресленні представлені за номерами всі запроєктовані рослини. Вказані види, сорти та кількість посадкового матеріалу.</p>
                </div>

                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] rounded-[5px]'>Розбивочне креслення</span></div>
                  <p className='bg-[#CCD7CF] p-[8px] rounded-[5px]'>Прив'язка запроєктованих елементів до наявних об'єктів згідно генерального плану.</p>
                </div>

                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] rounded-[5px]'>Посадкове креслення</span></div>
                  <p className='bg-[#CCD7CF] p-[8px] rounded-[5px]'>Позначення місця для висаджування кожної рослини відносно наявних елементів саду.</p>
                </div>

                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] rounded-[5px]'>Схема зрошувальної системи</span></div>
                  <p className='bg-[#CCD7CF] p-[8px] rounded-[5px]'>Необхідна для монтажу системи поливу. На ній позначаються шляхи проходження трубопроводів, розташування зрошувальних пристроїв, елекромагнітних клапанів, контролера та інших елементів.</p>
                </div>

                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] rounded-[5px]'>Схема дренажної системи</span></div>
                  <p className='bg-[#CCD7CF] p-[8px] rounded-[5px]'>Застосовується для монтування інженерних елементів для збору та відведення дощової або надлишкової води від споруд та інших об'єктів ділянки , а також для пониження рівня грунтових вод.</p>
                </div>

                <div className='my-[20px]'>
                  <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] rounded-[5px]'>Схема освітлення</span></div>
                  <p className='bg-[#CCD7CF] p-[8px] rounded-[5px]'>На цій схемі зображений шлях прокладання кабельної мережі до місця розташування садових світильників та  ліхтарів, які використовуються для підсвілення ділянки, доріжок, рослин, малих архітектурних форм.</p>
                </div>
              </div>
              :null}


              <div className='relative mt-[40px] cursor-pointer bg-black' onClick={()=>{setOzelenennyaToggle(!ozelenennyaToggle)}}>
                <img src={realOzelenennya}  className='lg:h-[400px] w-[100%] sm:max-sm:h-[100px] opacity-100 hover:opacity-60' />
                <div className='absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150] opacity-75 hover:opacity-100 sm:max-md:opacity-100 hover:bg-[#00000099] p-[10px] text-center'>Озеленення та благоустрій
                  <span className='lg:text-2xl sm:text-xl'>детальніше</span>
                </div>
              </div>
              {ozelenennyaToggle==true?
              <div className='flex justify-between sm:max-md:flex-col'>
                <div className='md:w-[48%]'>
                  <div>
                    <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] '>Послуги з Озеленення</span></div>
                    <ul className='bg-[#CCD7CF] p-[8px] '>
                      <li>-створення декоративних композицій з рослин</li>
                      <li>-створення газонних покриттів</li>
                      <li>-створення декоративних городів</li>
                      <li>-гравійні сади</li>
                      <li>-вертикальне озеленення</li>
                      <li>-озеленення дахів</li>
                    </ul>
                  </div>
                </div>
                <div className='md:w-[48%]'>
                  <div>
                    <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] '>Послуги з Благоустрою</span></div>
                    <ul className='bg-[#CCD7CF] p-[8px]'>
                      <li>-система зрошення</li>
                      <li>-дренажні системи</li>
                      <li>-створення доріжок та мощення</li>
                      <li>-підпірні стінки</li>
                      <li>-освітлення</li>
                      <li>-зміцнення схилів</li>
                    </ul>
                  </div>
                </div>
              </div>:null}

              <div className='relative mt-[40px] cursor-pointer bg-black' onClick={()=>{setServiceToggle(!serviceToggle)}} style={serviceToggle?{}:{marginBottom:'40px'}}>
                <img src={realObslygov}  className='w-[100%] sm:max-sm:h-[100px] lg:h-[400px]' />
                <div className='absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150]  opacity-75 hover:opacity-100 sm:max-md:opacity-100 hover:bg-[#00000099] p-[10px] text-center'>Обслуговування
                  <span className='lg:text-2xl sm:text-xl'>детальніше</span>
                </div>
              </div>

              {serviceToggle==true?
              <div className='flex justify-between mb-[20px] sm:max-md:flex-col'>
                <div className='md:w-[48%]'>
                  <div>
                    <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] '>Послуги з Обслуговування</span></div>
                    <ul className='bg-[#CCD7CF] p-[8px] '>
                      <li>-Комплексний догляд за садом (4 рази на місяць)</li>
                      <li>-Обробка рослин від хвороб та шкідників</li>
                      <li>-Внесення добрив під рослини </li>
                      <li>-Укриття на зиму теплолюбних рослин</li>
                      <li>-Прополювання декоративних композицій вручну</li>
                      <li>-Формуюча обрізка дерев</li>
                      <li>-Санітарна обрізка дерев</li>
                      <li>-Омолоджувальна обрізка дерев</li>
                      <li>-Топіарна стрижка рослин</li>
                      <li>-Обрізання чагарників</li>
                      <li>-Обрізання живоплотів</li>
                      <li>-Корчування пнів</li>
                      <li>-Спилювання дерев</li>
                      <li>-Побілка дерев</li>
                    </ul>
                  </div>
                </div>
                
                <div className='md:w-[48%]'>
                  <div className='h-[65%]'>
                    <div className='mt-[20px] mb-[-12px] ml-[12px]'><span className='px-[4px] text-left text-white bg-[#80A190] '>Послуги з Обслуговування</span></div>
                    <ul className='bg-[#CCD7CF] p-[8px] '>
                      <li>-Викошування газону</li>
                      <li>-Аерація та скарифікація газону</li>
                      <li>-Внесення добрив</li>
                      <li>-Обробка від хвороб (фунгіцидами)</li>
                      <li>-Знищення бур'янів (обробка гербіцидами)</li>
                      <li>-Знищення бур'янів (прополювання вручну)</li>
                      <li>-Обрізка краю газону</li>
                      <li>-Підсів газону</li>
                      <li>-Піскування газону (без вартості піску)</li>
                    </ul>
                  </div>
                  <div className='flex flex-col h-[28%]'>
                    <div className='mt-[20px] z-[10] mb-[-12px] ml-[12px] sm:max-md:text-sm'><span className='px-[4px] text-left text-white bg-[#80A190] '>Обслуговування зрошувальної системи</span></div>
                    <ul className='bg-[#CCD7CF] p-[8px] '>
                      <li>-Консервація  та запуск системи </li>
                      <li>-Налаштування, регулювання</li>
                      <li>-Чистка фільтрів</li>
                    </ul>
                  </div>
                </div>
              </div>:null}



            </div>
          </div>
        </div>
        <Resources phoneColor={colorPhone} telegramColor={colorTelegram} instagramColor={colorInstagram} tiktokColor={colorTiktok} facebookColor={colorFacebook}/>
        <MainPageFooter/>
    </div>
  )
}

export default Services

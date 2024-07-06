import { useNavigate } from 'react-router-dom'
function Footer({id,image}) {

    const navigate = useNavigate();
    const arr = ['kozin','tarasivka','gatne','gatne2','hotyanivka']
    const arr2=['Козин', 'Тарасівка','Гатне','Гатне 2','Хотянівка']
  

  return (
    <div className='relative w-screen h-[10vh] text-[20px] lg:h-[30vh] lg:text-[45px] flex flex-col justify-center items-center font-light cursor-pointer' style={{background:`url(${image})`,marginTop:'20px'}} onClick={()=>navigate(`/projects/${arr[id]}`)}>
        <div className='absolute w-[100%] h-[100%] flex flex-col justify-center items-center text-white top-[0px] left-[0px] lg:text-3xl sm:text-xl transition delay-[150] opacity-75 hover:opacity-100  hover:bg-[#00000099] p-[10px] text-center' >Наступний проєкт
          <span>{arr2[id]}</span>
        </div>
    </div>
    
  )
}

export default Footer

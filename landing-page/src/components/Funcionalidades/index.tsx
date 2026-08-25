import Cards from "../Cards";
import {LuCalendarDays} from 'react-icons/lu'

export default function Funcionalidades(){
    return(
            <section className='items-center flex justify-center flex-col'>
                <div className='flex gap-2 items-center mt-10 md:mt-20 bg-[#DCEFE4] p-2 rounded-full'>
                    <p className='text-[12px] md:text-xs text-bold text-[#153229] font-display'>Funcionalidades</p>
                </div>
                <div className='text-center justify-center mt-5 items-center w-xs md:w-lg'>
                    <h1 className='font-black text-[#153229] text-3xl md:text-4xl'>Tudo que o seu pet precisa, num só lugar</h1>
                    <p className='text-wrap mt-4 mb-6 text-[#4B5A54] text-sm md:text-base'>Da vacina ao passeio, o Petcare acompanha cada etapa do cuidado - pra você nunca perder nada de vista</p>
                </div>
                <div className='grid grid-cols-3 mt-14'>
                    <Cards title='actual shit?' info='in a kettle' icon={<LuCalendarDays />}  />
                </div>
            </section>

    )
}
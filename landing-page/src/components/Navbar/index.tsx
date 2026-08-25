import { MdOutlinePets } from 'react-icons/md'
import {LuCalendarDays} from 'react-icons/lu'
export default function Navbar() {
    return (
        <header className='md:px-20 px-5 py-6 flex justify-between items-center border-b border-b-[#ccc]'>
            
            <div className='flex gap-2 items-center'>
                <MdOutlinePets size={24} color="#3F9271" />
                <span className='font-black text-[#153229] text-xs md:text-xl'>pet</span>
                <span className='font-black text-[#FF6B4A] text-xs md:text-xl'>care</span>
            </div>
            <nav className=''>
                <ul className='flex gap-2 md:gap-8'>
                    <li>
                        <a href='' className='text-[#1F4136] text-xs md:text-base'>Início</a>
                    </li>
                    <li>
                        <a href='' className='text-[#1F4136] text-xs md:text-base'>Funcionalidades</a>
                    </li>
                    <li>
                        <a href='' className='text-[#1F4136] text-xs md:text-base'>Contato</a>
                    </li>
                </ul>
            </nav>

            <a href='' className=' hidden md:block bg-[#1F4136] text-white rounded-full font-medium text-xs px-6  py-3 shadow-2xl'>
                Agendar Consulta
            </a>
            <div className='block md:hidden bg-[#153229] p-2 rounded-full'>
                <a ><LuCalendarDays color='#fff' size={14} /></a>
            </div>
        </header>
    )
}


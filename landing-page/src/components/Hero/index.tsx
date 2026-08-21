import { MdOutlinePets } from "react-icons/md";
import { FaStar } from 'react-icons/fa'
export default function Hero() {
    return (
        <section className='items-center flex justify-center flex-col'>
            <div className='flex gap-2 items-center mt-10 md:mt-20 bg-[#DCEFE4] p-2 rounded-full'>
                <MdOutlinePets size={20} color="#3F9271" />
                <p className='text-[12px] md:text-xs text-[#153229] font-display'>Feito para tutores atentos</p>
            </div>
            <div className='text-center justify-center mt-5 items-center w-xs md:w-md'>
                <h1 className='font-black text-[#153229] text-3xl md:text-4xl'>Toda a rotina do seu pet,</h1>
                <h1 className='font-black text-[#FF6B4A] text-3xl md:text-4xl'>numa coleira só.</h1>
                <p className='text-wrap mt-4 mb-6 text-[#4B5A54] text-sm md:text-base'>Agende consultas, acompanhe vacinas e fale com veterinários sem sair do app. O PetCare organiza o que seu pet precisa, antes de você precisar lembrar.</p>
                <div className='flex justify-center gap-5'>
                    <a href='' className='text-bold text-xs md:text-sm p-2 text-white rounded-full bg-[#FF6B4A] shadow-2xl '>Ver Funcionalidades</a>
                    <a href='' className='text-bold text-xs md:text-sm p-2 border rounded-full border-[#ccc] shadow-2xl'>Falar com um veterinário</a>
                </div>
                <div className='flex justify-center gap-8 mt-10 items-center content-center'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='font-bold'>12 mil+</p>
                        <p className='text-[#4B5A54] text-xs md:text-sm'>pets cadastrados</p>
                    </div>
                    <div className='flex-col flex gap-2 justify-center items-center '>
                        <div className='flex gap-2 justify-center items-center'>
                            <p className='font-bold'>4.9 </p> <FaStar />
                        </div>
                        <p className='text-[#4B5A54] text-xs md:text-sm'>avaliação média</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center '>
                        <p className='font-bold'>24/7</p>
                        <p className='text-[#4B5A54] text-xs md:text-sm'>suporte via chat</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
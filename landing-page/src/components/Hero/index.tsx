import { MdOutlinePets } from "react-icons/md";

export default function Hero (){
    return(
        <section className='items-center flex justify-center flex-col'>
            <div className='flex gap-2 mt-10 bg-[#1f9271] p-4 rounded-full'>
                <MdOutlinePets size={24} color="#3F9271" />
                <p>Feito para tutores atentos</p>
            </div>
            <div className='text-center justify-center mt-15  items-center'>
                <h1 className='font-black text-[#153229] text-4xl'>Toda a rotina do seu pet</h1>
                <h1 className='font-black text-[#FF6B4A] text-4xl'>numa coleira só.</h1>
            </div>
        </section>
    )
}
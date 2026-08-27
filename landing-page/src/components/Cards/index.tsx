
interface CardProps {
    title: string;
    info: string;
    icon: React.ReactElement;
    color: string;
}

export default function Cards ({title, info, icon, color}: CardProps){
    return(
        
            <div className='bg-white rounded-lg w-md p-5 m-3 shadow-xs'>
                <div className={`items-center bg-[${color}] inline-flex p-2 mt-3 mb-3 rounded-lg`}>
                    {icon}
                </div>
                    <h1 className='font-black text-3xl'>{title}</h1>
                <p className={`text-wrap mt-4 mb-6 text-[${color}] text-sm md:text-base text-left`}>{info}</p>
            </div>
    )
}
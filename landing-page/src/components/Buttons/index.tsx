interface ButtonProps {
    text: string;
    link?: string;
    color: string;
    bg_color: string;
    border?: string;
    bd_color?: string;
}
export default function Button ({text, link, color, bg_color, border, bd_color}: ButtonProps){
    return(
            <div className='flex justify-center gap-5'>
                    <a href={`${link}`} className={`${color} text-bold text-xs md:text-sm p-2 ${border} ${bd_color} rounded-full ${bg_color} shadow-2xl`}>{text}</a>
            </div>
    )
}
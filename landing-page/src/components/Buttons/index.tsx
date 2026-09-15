interface ButtonProps {
    text: string;
    link?: string;
    color: string;
    bg_color: string;
    border?: string;
    bd_color?: string;
    font_size?: string;
}
export default function Button ({text, link, color, bg_color, border, bd_color, font_size}: ButtonProps){
    return(
            <div className='flex justify-center gap-5'>
                    <a href={`${link}`} className={`${color} text-bold ${font_size} md:text-sm p-2 ${border} ${bd_color} rounded-full ${bg_color} shadow-2xl`}>{text}</a>
            </div>
    )
}
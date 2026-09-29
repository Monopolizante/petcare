import { FiMessageSquare } from "react-icons/fi"
export default function WhatsButton () {
    return(
        <div className="bg-[#FF6B4A] w-max p-4 rounded-full fixed right-5 bottom-22.5">
            <a href="">
                <FiMessageSquare size={24} color="#fff"/>
            </a>
        </div>
    )
}
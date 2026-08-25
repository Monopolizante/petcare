import {ReactNode} from "react"

interface ContainerProps {
    children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps){
    return(
        <div className="md:px-20 px-5">
            {children}
        </div>
    )
}

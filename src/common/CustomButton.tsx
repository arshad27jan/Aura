import { ReactNode } from "react"

interface Button {
    classes : string
    children:ReactNode;
}
export default function CustomButton ({classes,children}:Button){
    return (
        <button className={`font-main bg-aura-secondary border border-aura text-white p-2 lg:mr-20 rounded-lg hover:cursor-pointer hover:bg-aura ${classes}`}>
                        {children}
                    </button>
    )
}
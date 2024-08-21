import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Container = ({children} : Props) => {
    return(
        <div className="w-full max-w-7xl mx-auto px-2">
            {children}
        </div>
    )
}
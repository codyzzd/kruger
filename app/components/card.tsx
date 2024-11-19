import Image from "next/image"
import { ReactNode } from "react"

interface CardProps {
    imagePath: string
    title: string
    subtitle: ReactNode
}

export default function Card({ imagePath, subtitle, title }: CardProps) {

    return (
        <div className="h-[284px] max-w-sm flex flex-col text-center items-center gap-4 sm:border-none border px-4 py-8 rounded-xl sm:py-0 sm:px-0">
            <div className="relative w-20 h-20">
                <Image
                    src={`/images/card/${imagePath}.png`}
                    alt=""
                    objectFit="contain"
                    layout="fill"
                />
            </div>
            <h4 className="text-[#0E0C07] text-2xl font-bold">{title}</h4>
            <p className="text-[#0E0C07] merriwather text-lg">{subtitle}</p>
        </div>
    )
}
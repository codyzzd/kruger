'use client'

import { ReactNode, useContext } from "react"
import { PopupContext } from "./context/popup"
import Image from "next/image"

interface ModalButtonProps {
    children?: ReactNode
}

export function ModalButton({ children }: ModalButtonProps) {
    const { isActive, setIsActive } = useContext(PopupContext)

    return (
        <button
            onClick={() => setIsActive(!isActive)}
            className="flex justify-center flex-row space-x-4 w-full sm:max-w-sm sm:px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 transition rounded"
        >
            <Image
                src="/images/wpp.png"
                width={24}
                height={24}
                alt="Whatsapp Icon"
                className="hidden sm:block max-h-[40px] max-w-[40px]"
            />
            {children ? (
                <span>{children}</span>
            ): <span>Calcule a redução da sua dívida</span>}
        </button>
    )
}
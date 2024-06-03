'use client'

import { useContext } from "react"
import { PopupContext } from "./context/popup"
import Image from "next/image"

export function ModalButton() {
    const { isActive, setIsActive } = useContext(PopupContext)

    return (
        <button
            onClick={() => setIsActive(!isActive)}
            className="flex flex-row space-x-4 px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 transition rounded"
        >
            <Image
                src="/images/wpp.png"
                width={24}
                height={24}
                alt="Whatsapp Icon"
                className=" max-h-[40px] max-w-[40px]"
            />
            <span>Fale agora com um advogado</span>
        </button>
    )
}
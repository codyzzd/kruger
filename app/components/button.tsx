'use client'

import { ReactNode, useContext } from "react";
import { PopupReduzaDividasContext } from "./context/popup-reduzadividas";

export default function Button({ children }: { children: ReactNode }) {

    const { isActive, setIsActive } = useContext(PopupReduzaDividasContext)

    return (
        <button
            onClick={() => setIsActive(!isActive)}
            className="sm:max-w-xs w-full bg-gradient-to-br text-white from-[#05081B] to-[#2A3162] text-center border py-4 px-4 rounded-md text-lg font-semibold">
            {children}
        </button>
    )
}
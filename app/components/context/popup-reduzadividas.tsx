'use client'

import { ReactNode, SetStateAction, createContext, useState } from "react";

interface popupModalProps {
    isActive: boolean
    setIsActive: React.Dispatch<SetStateAction<boolean>>
}

export const PopupReduzaDividasContext = createContext({} as popupModalProps)

interface PopupProviderProps {
    children: ReactNode
}

export function PopupReduzaDividasProvider({ children }: PopupProviderProps) {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <PopupReduzaDividasContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </PopupReduzaDividasContext.Provider>
    )
}
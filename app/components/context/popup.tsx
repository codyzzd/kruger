'use client'

import { ReactNode, SetStateAction, createContext, useState } from "react";

interface popupModalProps {
    isActive: boolean
    setIsActive: React.Dispatch<SetStateAction<boolean>>
}

export const PopupContext = createContext({} as popupModalProps)

interface PopupProviderProps {
    children: ReactNode
}

export function PopupProvider({ children }: PopupProviderProps) {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <PopupContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </PopupContext.Provider>
    )
}
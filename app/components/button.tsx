import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
    return (
        <a
            href=""
            className="max-w-xs w-full bg-gradient-to-br text-white from-[#05081B] to-[#2A3162] text-center border py-4 px-4 rounded-md text-lg font-semibold">
            {children}
        </a>
    )
}
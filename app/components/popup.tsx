'use client'

import { FormEvent, useContext, useEffect, useState } from "react"
import { PopupContext } from "./context/popup"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"

interface PopupProps {
    utm_term: string
    utm_medium: string
    utm_content: string
    utm_campaign: string
    utm_source: string
}

interface dataProps {
    name: string
    email: string
    phone: string
    utm_term: string
    utm_medium: string
    utm_content: string
    utm_campaign: string
    utm_source: string
}
let initialData = {
    name: '',
    email: '',
    phone: '',
    utm_term: '',
    utm_medium: '',
    utm_content: '',
    utm_campaign: '',
    utm_source: ''
}

export function Popup({ utm_campaign, utm_content, utm_medium, utm_source, utm_term }: PopupProps) {
    const { isActive, setIsActive } = useContext(PopupContext)
    const [data, setData] = useState<dataProps>(initialData)
    const router = useRouter()

    function handleChange(type: keyof dataProps, value: string) {
        let hlp = { ...data }
        if (type === 'phone') {
            hlp[type] = formatPhoneNumber(value)
        } else {
            hlp[type] = value
        }
        setData(hlp)
    }

    function formatPhoneNumber(value: string) {
        if (value.length > data.phone.length) {
            if (value.length <= 1) {
                value = `(${value}`
            } else if (value.length <= 3) {
                value = `${value}) 9 `
            } else if (value.length === 11) {
                value = `${value}-`
            }
        }

        return value
    }

    useEffect(() => {
        if (isActive) {
            document.querySelector('body')?.classList.add('overflow-hidden')
        } else {
            document.querySelector('body')?.classList.remove('overflow-hidden')
        }
    }, [isActive])

    async function formSubmited(e: FormEvent) {
        e.preventDefault()
        let dataHlp = data

        dataHlp['utm_campaign'] = window.location.href.split('?')[1]?.split("&")[0]?.split("=")[1] || 'AQUI'
        dataHlp['utm_content'] = window.location.href.split('?')[1]?.split("&")[1]?.split("=")[1] || 'AQUI'
        dataHlp['utm_medium'] = window.location.href.split('?')[1]?.split("&")[1]?.split("=")[1] || 'AQUI'
        dataHlp['utm_source'] = window.location.href.split('?')[1]?.split("&")[2]?.split("=")[1] || 'AQUI'
        dataHlp['utm_term'] = window.location.href.split('?')[1]?.split("&")[3]?.split("=")[1] || 'AQUI'
        setData(dataHlp)
        e.preventDefault()
        await fetch("https://webhook.sellflux.com/webhook/v2/form/lead/91747b8002b99dd51d584db8e3b6ab3e?not_query=true&redirect_url=google.com", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async res => {
            router.push('/obrigado')
        }).catch(e => console.log(e))
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center transition ${isActive ? 'z-50 opacity-100' : '-z-50 opacity-0'}`}>
            <div onClick={() => setIsActive(!isActive)} className={`absolute top-0 left-0 w-full h-full bg-black/80`}></div>
            <form
                className="relative rounded-md w-full sm:max-w-xl bg-white z-50 py-8 px-6 sm:mx-0 mx-2"
                onSubmit={(e) => formSubmited(e)}
                // method="post"
                // action="https://webhook.sellflux.com/webhook/v2/form/lead/91747b8002b99dd51d584db8e3b6ab3e?not_query=true&redirect_url=google.com"
            >
                <button type="button" className="absolute top-4 right-6" onClick={() => setIsActive(!isActive)}>
                    <svg className="w-8 h-8 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>
                </button>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Preencha para calcular a redução.</h2>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('name', e.target.value)} value={data.name} className="outline-none border rounded py-2 px-4" type="text" id="name" name="name" placeholder="Insira seu nome" min={2} required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('email', e.target.value)} value={data.email} className="outline-none border rounded py-2 px-4" type="text" id="email" name="email" placeholder="Insira seu melhor e-mail" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('phone', e.target.value)} value={data.phone} className="outline-none border rounded py-2 px-4" type="tel" id="tel" name="phone" maxLength={16} placeholder="WhatsApp: (00) 00000-0000" required />
                    </div>
                    <button className="w-full text-sm sm:text-base text-center flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 transition rounded" type="submit">
                        <Image
                            src="/images/wpp.png"
                            width={20}
                            height={20}
                            alt="Whatsapp Icon"
                            className="hidden sm:block"
                        />
                        <span>Calcule a redução da sua dívida</span>
                    </button>
                    <div>
                        <input type="hidden" id="utm_term" value={utm_term || 'AQUI'} name="utm_term" placeholder="utm_term" />
                        <input type="hidden" id="utm_medium" value={utm_medium || 'AQUI'} name="utm_medium" placeholder="utm_medium" />
                        <input type="hidden" id="utm_content" value={utm_content || 'AQUI'} name="utm_content" placeholder="utm_content" />
                        <input type="hidden" id="utm_campaign" value={utm_campaign || 'AQUI'} name="utm_campaign" placeholder="utm_campaign" />
                        <input type="hidden" id="utm_source" value={utm_source || 'AQUI'} name="utm_source" placeholder="utm_source" />
                    </div>
                </div>
            </form>
        </div>
    )
}

'use client'

import { FormEvent, useContext, useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PopupReduzaDividasContext } from "./context/popup-reduzadividas"

interface PopupProps {
    utm_term: string
    utm_medium: string
    utm_content: string
    utm_campaign: string
    utm_source: string
    title?: string
}

interface dataProps {
    name: string
    email: string
    phone: string
    valor_divida: string,
    divida_esta_atrasada: string,
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
    valor_divida: '',
    divida_esta_atrasada: '',
    utm_term: '',
    utm_medium: '',
    utm_content: '',
    utm_campaign: '',
    utm_source: ''
}

export function PopupReduzaDividas({ utm_campaign, utm_content, utm_medium, utm_source, utm_term, title }: PopupProps) {
    const { isActive, setIsActive } = useContext(PopupReduzaDividasContext)
    const [data, setData] = useState<dataProps>(initialData)
    const router = useRouter()
    const [firstSelectErrorMessage, setFirstSelectErrorMessage] = useState<string>('')
    const [secondSelectErrorMessage, setSecondSelectErrorMessage] = useState<string>('')

    function formatCurrency(value: string) {
        // Remove any existing commas or periods
        const numericValue = value.replace(/\D/g, '');

        // Format the number with periods as thousand separators
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return formattedValue;
    }

    function handleChange(type: keyof dataProps, value: string) {
        let hlp = { ...data }

        hlp[type] = value
    
        if (type === 'valor_divida') {

            setFirstSelectErrorMessage('')
        } else if (type === 'divida_esta_atrasada') {

            setSecondSelectErrorMessage('')
        } else if (type === 'phone') {
            let phone = formatPhone(value)
            
            hlp[type] = phone
        }

        setData(hlp)
    }

    function formatPhone(phone: string): string {
        phone = phone.replace(/\D/g, '');

        phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
        phone = phone.replace(/(\d{5})(\d)/, '$1-$2');

        return phone;
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

        setFirstSelectErrorMessage('')
        setSecondSelectErrorMessage('')

        if (data.valor_divida.length === 0) {
            setFirstSelectErrorMessage('Preencha o campo acima corretamente.')

            return
        }

        if (data.divida_esta_atrasada.length === 0) {
            setSecondSelectErrorMessage('Preencha o campo acima corretamente.')

            return
        }

        let dataHlp = data

        dataHlp['utm_campaign'] = window.location.href.split('?')[1]?.split("&")[0]?.split("=")[1] || 'nao-traqueado'
        dataHlp['utm_content'] = window.location.href.split('?')[1]?.split("&")[1]?.split("=")[1] || 'nao-traqueado'
        dataHlp['utm_medium'] = window.location.href.split('?')[1]?.split("&")[1]?.split("=")[1] || 'nao-traqueado'
        dataHlp['utm_source'] = window.location.href.split('?')[1]?.split("&")[2]?.split("=")[1] || 'nao-traqueado'
        dataHlp['utm_term'] = window.location.href.split('?')[1]?.split("&")[3]?.split("=")[1] || 'nao-traqueado'
        setData(dataHlp)

        // const sheetsResponse = await fetch('/api/sheets', {
        // await fetch('https://sheet.best/api/sheets/f339703c-2197-4e48-b4d5-5889c07e144c', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ ...data, pagina: pathname[pathname.length - 1] })
        // })

        await fetch("/api/send-data", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(async res => {

            if (data.valor_divida !== 'Abaixo de 80 mil') {
                router.push('/agendamento')
            } else {
                router.push('/obrigado')
            }
        }).catch(e => console.log(e))
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center transition ${isActive ? 'z-50 opacity-100' : '-z-50 opacity-0'}`}>
            <div onClick={() => setIsActive(!isActive)} className={`absolute top-0 left-0 w-full h-full bg-black/80`}></div>
            <form
                className="relative rounded-xl w-full sm:max-w-xl bg-white z-50 sm:mx-0 mx-2 overflow-y-hidden"
                onSubmit={(e) => formSubmited(e)}
            >
                <div className="w-full flex justify-center py-4 bg-[#022341]">
                    <div className="relative w-[124px] h-[48px]">
                        <Image
                            src="/images/logokruger.png"
                            alt="Logo Kruger Toledo Advocacia"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <button type="button" className="absolute sm:top-4 sm:right-6 top-2 right-2" onClick={() => setIsActive(!isActive)}>
                    <svg className="sm:w-8 sm:h-8 w-6 h-6 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>
                </button>

                <div className="flex flex-col gap-4 pt-12 pb-6 px-10">
                    <h2 className="text-xl font-bold text-center">Preencha seus dados e agende uma análise com nossos especialistas:</h2>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('name', e.target.value)} value={data.name} className="shadow text-zinc-500 outline-none border rounded-xl py-2 px-4" type="text" id="name" name="name" placeholder="Insira seu nome" min={2} required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('email', e.target.value)} value={data.email} className="shadow text-zinc-500 outline-none border rounded-xl py-2 px-4" type="text" id="email" name="email" placeholder="Insira seu melhor e-mail" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('phone', e.target.value)} value={data.phone} className="shadow text-zinc-500 outline-none border rounded-xl py-2 px-4" type="text" id="phone" name="phone" placeholder="Insira seu telefone" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <select
                            onChange={(e) => handleChange('valor_divida', e.target.value)}
                            value={data.valor_divida}
                            name="valor_divida"
                            className="shadow outline-none border rounded-xl py-2 px-4"
                            required
                        >
                            <option>Qual o valor da sua dívida?</option>
                            <option value="Abaixo de 80 mil">Abaixo de 100 mil</option>
                            <option value="Entre 80 a 500 mil">Entre 100 a 500 mil</option>
                            <option value="Entre 500 a 1 milhão">Entre 500 a 1 milhão</option>
                            <option value="Acima de 1 milhão">Acima de 1 milhão</option>
                        </select>
                        <span className="text-sm text-red-400 ms-2">{firstSelectErrorMessage}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <select
                            onChange={(e) => handleChange('divida_esta_atrasada', e.target.value)}
                            value={data.divida_esta_atrasada}
                            name="divida_esta_atrasada"
                            className="shadow outline-none border rounded-xl py-2 px-4"
                            required
                        >
                            <option>Sua dívida está em atraso?</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                        <span className="text-sm text-red-400 ms-2">{secondSelectErrorMessage}</span>
                    </div>
                    <button className="shadow w-full text-sm sm:text-base text-center flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 transition rounded" type="submit">
                        <Image
                            src="/images/wpp.png"
                            width={20}
                            height={20}
                            alt="Whatsapp Icon"
                            className="hidden sm:block"
                        />
                        {title ? (
                            <span>{title}</span>
                        ) : <span>Solicitar análise de passivos</span>}
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

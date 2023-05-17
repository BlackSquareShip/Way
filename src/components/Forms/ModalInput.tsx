import React, {ChangeEvent} from "react";

interface InputProps {
    inputId: string
    value: string
    labelText: string
    name: string
    type: string
    handleChange: (e: ChangeEvent<HTMLInputElement>, type: string) => void
}

export function ModalInput({inputId, value,name, labelText, type, handleChange}: InputProps) {
    return (
        <div className="flex flex-col w-5/6 m-auto">
            <label htmlFor={inputId} className="text-black text-2xl font-bold">{labelText}</label>
            <input type={type} name={inputId} id={inputId}
                   className="pl-3 text-gray-700 font-bold text-xl bg-[#ECECEC]
                     h-14 rounded-xl border-4 border-white outline-none"
                   onChange={(e) => handleChange(e, name)}
                   value={value}
            />
        </div>
    )
}
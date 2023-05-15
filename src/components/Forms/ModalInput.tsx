interface inputProps{
    inputId: string,
    inputType: string,
    labelText: string,
    name: string
    handleChange: (event : React.FormEvent) => void
}

export function ModalInput({inputId, inputType, labelText, name, handleChange} : inputProps){
    return(
        <div className="flex flex-col w-5/6 m-auto">
            <label htmlFor={inputId}  className="text-black text-2xl font-bold">{labelText}</label>
            <input  type={inputType} name={name}  id={inputId} onChange={handleChange}
            className="pl-3 text-gray-700 font-bold text-xl bg-[#ECECEC] h-14 rounded-xl border-4 border-white outline-none" />
        </div>
    )
}
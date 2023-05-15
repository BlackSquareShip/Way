import { RegistrationForm } from "../Forms/RegistrationForm"

interface RegistrationProp{
    onClose: () => void
}

const inputStyle = "pl-3 text-gray-700 font-bold text-xl bg-[#ECECEC] h-14 rounded-xl border-4 border-white outline-none"

export function RegistrationPage({onClose} : RegistrationProp){
    return (
        <>
        <div className={"fixed bg-black/50 top-0 right-0 left-0 bottom-0"} onClick={onClose}/>
            <div className={"flex flex-col items-center justify-between w-1/3 h-4/5 rounded-3xl bg-[#D9D9D9] absolute top-28 left-1/2 -translate-x-1/2"}>
                <div className="h-5 w-5 bg-[url('../public/icons/close.svg')] bg-contain bg-center cursor-pointer absolute right-3 top-3" onClick={onClose}/>
                <h1 className="text-5xl text-white font-bold m-8">Регистрация</h1>

                <RegistrationForm/>
        </div>
        </>
    )
}
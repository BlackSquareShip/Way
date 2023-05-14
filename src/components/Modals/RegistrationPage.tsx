
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
                <form className="w-full h-5/6 flex flex-col mb-10">

                    <div className="flex flex-col w-5/6 m-auto">
                        <label htmlFor="fioField" className="text-black text-2xl font-bold">ФИО</label>
                        <input  type="text" name="fioField" id="fioField" className={inputStyle} />
                    </div>

                    <div className="flex flex-col w-5/6 m-auto">
                        <label htmlFor="loginField" className="text-black text-2xl font-bold">Email</label>
                        <input  type="text" name="loginField" id="loginField" className={inputStyle} />
                    </div>

                    <div className="flex flex-col w-5/6 m-auto">
                        <label htmlFor="passwordField" className="text-black text-2xl font-bold">Пароль</label>
                        <input  type="password"name="passwordField" id="passwordField" className={inputStyle}   />
                    </div>

                    <div className="flex flex-col w-5/6 m-auto">
                        <label htmlFor="passwordConfirmField" className="text-black text-2xl font-bold">Подтвердите пароль</label>
                        <input  type="password"name="passwordConfirmField" id="passwordConfirmField" className={inputStyle}   />
                    </div>


                    <input type="button" value="Зарегистрироваться" 
                        className="cursor-pointer w-1/2 m-auto text-gray-700 font-bold text-2xl bg-[#ECECEC] h-16 rounded-2xl border-[4px] border-black
                        hover:bg-white hover:text-black"/>
                    <a className="text-black m-auto mb-2" href="">У меня уже есть аккаунт</a>
                </form>
            </div>
        </>
    )
}
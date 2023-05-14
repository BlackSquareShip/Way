
interface modalProps {
    onClose: () => void;
}

export function LoginPage({onClose}: modalProps){
    // const inputStyle = "bg-[#ECECEC] h-14 w-5/6 m-auto rounded-md border-4 border-white"
    return(
        <div className={"fixed bg-black/50 top-0 right-0 left-0 bottom-0"}>
                <div className={"flex flex-col items-center justify-between w-1/3 h-3/5 rounded-3xl bg-[#D9D9D9] absolute top-32 left-1/2 -translate-x-1/2"}>
                    <div className="h-5 w-5 bg-[url('../public/icons/close.svg')] bg-contain bg-center cursor-pointer absolute right-3 top-3" onClick={onClose}/>
                    <h1 className="text-5xl text-white font-bold m-8">Вход</h1>
                    <form className="w-full h-4/6 flex flex-col mb-10">
                        <div className="flex flex-col w-5/6 m-auto">
                            <label htmlFor="loginField" className="text-black text-2xl font-bold">Email</label>
                            <input  type="text"
                                    name="loginField" id="loginField"
                                    className="pl-3 text-gray-700 font-bold text-xl bg-[#ECECEC] h-14 rounded-md border-4 border-white outline-none" 
                            />
                        </div>

                        <div className="flex flex-col w-5/6 m-auto">
                            <label htmlFor="loginField" className="text-black text-2xl font-bold">Пароль</label>
                            <input  type="password"
                                    name="loginField" id="loginField"
                                    className="pl-3 text-gray-700 font-bold text-xl bg-[#ECECEC] h-14 rounded-md border-4 border-white outline-none" 
                            />
                        </div>

                        <input type="button" value="Войти" className="cursor-pointer w-1/2 m-auto text-gray-700 font-bold text-2xl bg-[#ECECEC] h-14 rounded-2xl border-[4px] border-black"/>
                        <a className="text-black m-auto mb-5" href="">У меня еще нет аккаунта</a>
                    </form>
                </div>
        </div>
    )
}
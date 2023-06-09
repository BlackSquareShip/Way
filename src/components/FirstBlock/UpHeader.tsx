import React from "react";

const loginBtnStyle = "text-yellow-800 text-xl font-semibold cursor-pointer"

interface upHeaderProperties{
    openLoginModal: () => void
    openRegistrationModal: () => void
}

export function UpHeader({openLoginModal, openRegistrationModal} : upHeaderProperties) {
    return(
        <div className={"flex w-full h-32 items-center justify-between"}>
            <div>
                <a className={"text-6xl font-bold"}>ПУТЬ</a>
            </div>
            <div className={""}>
                <a className={loginBtnStyle} onClick={openLoginModal}>войти</a>
                <span className={"px-2 text-gray-500 text-xl font-semibold"}>или</span>
                <a className={loginBtnStyle} onClick={openRegistrationModal}>зарегистрироваться</a>
            </div>
        </div>
    )
}
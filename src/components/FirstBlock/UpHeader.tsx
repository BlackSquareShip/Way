import React from "react";

const loginBtnStyle = "text-yellow-800 text-xl font-semibold cursor-pointer"

interface upHeaderProperties{
    openModal: () => void
}

export function UpHeader({openModal} : upHeaderProperties) {
    return(
        <div className={"flex w-full h-32 items-center justify-between"}>
            <div>
                <a className={"text-6xl font-bold"}>ПУТЬ</a>
            </div>
            <div className={""}>
                <a className={loginBtnStyle} onClick={openModal}>войти</a>
                <span className={"px-2 text-gray-500 text-xl font-semibold"}>или</span>
                <a className={loginBtnStyle}>зарегистрироваться</a>
            </div>
        </div>
    )
}
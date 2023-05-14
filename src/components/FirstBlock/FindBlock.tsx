import React from "react";

export function FindBlock() {
    return(
        <div>
            <form className={"flex justify-around w-5/6 m-auto pt-10"}>
                <input className={"w-1/3 rounded-xl pl-3 text-black"} type={"text"} placeholder={"введите адрес отправления..."}/>
                <input className={"w-1/3 rounded-xl pl-3 text-black"} type={"text"} placeholder={"введите адрес прибытия..."}/>
                <button
                    className={"w-1/6 border-black bg-blue-800 p-2 rounded-xl items-center font-bold flex justify-center"}
                    type={"submit"}> Найти <img className={"w-8 pl-3"} alt={""} src={"search.png"} /></button>
            </form>
        </div>
    )
}
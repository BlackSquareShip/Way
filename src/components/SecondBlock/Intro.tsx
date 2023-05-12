import React from "react";

export function Intro() {
    return(
        <div className={"bg-cover bg-no-repeat bg-[url('../public/trafic.jpeg')] introBg h-[600px]"}>
            <div className={"h-full bg-black/50"}>
                <div className={"flex w-1/2 m-auto flex-col h-full justify-center text-3xl font-bold"}>
                    Путь - это проект, который призван уменьшить количество трафика на дорогах, сплотив людей, и дав им возможность находить компанию в дорогу до работы.
                </div>
            </div>

        </div>
    )
}
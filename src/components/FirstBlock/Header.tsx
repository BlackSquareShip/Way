import React, { SetStateAction } from "react";
import {UpHeader} from "./UpHeader";
import {FindBlock} from "./FindBlock";

interface headerProps{
    openLoginModal: () => void
    openRegistrationModal: () => void
}

export function Header({openLoginModal, openRegistrationModal} : headerProps) {
    return (
        <div
            className={"h-80 pl-10 bg-gradient-to-r from-indigo-500 to-yellow-200 background-animate"}>
            <div className={"container m-auto p-5"}>
                <UpHeader openLoginModal={openLoginModal} openRegistrationModal={openRegistrationModal}/>
                <FindBlock/>
            </div>
            {/*<div className={"relative transition-all ease-linear delay-100 bg-gradient-to-r from-indigo-500 to-yellow-200 h-full w-[5000px] hover:translate-x-1/2 duration-[10000ms]"}/>*/}

        </div>
    )
}
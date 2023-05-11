import React from "react";
import {UpHeader} from "./UpHeader";
import {FindBlock} from "./FindBlock";

export function Header() {
    return (
        <div
            className={"h-80 pl-10 bg-gradient-to-r from-indigo-500 to-yellow-200"}>
            <div className={"container m-auto p-5"}>
                <UpHeader/>
                <FindBlock/>
            </div>
        </div>
    )
}
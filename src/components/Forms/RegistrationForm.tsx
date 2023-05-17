import React, {ChangeEvent, useState} from "react";
import {ModalInput} from "./ModalInput";
import {IUser} from "../../models/User";
import axios from 'axios';

const User = {
    fio: "",
    email: "",
    password: ""
}

export function RegistrationForm() {
    const [formData, setFormData] = useState<IUser>(User);
    console.log(formData)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // const response = axios.post<IUser>("http://localhost:3030/users/createUser", state).then()

        // onCreate((await response).data)
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {

        setFormData(prev => ({...prev, [field]: event.target.value}))

    };


    return (
        <form className="w-full h-5/6 flex flex-col mb-10" onSubmit={handleSubmit}>

            <ModalInput inputId="fioField" name='fio' value={formData.fio} labelText="ФИО" type="text"
                        handleChange={handleChange}/>

            {/*<ModalInput inputId="loginField" inputType="text" labelText="Email" name="email"*/}
            {/*            handleChange={handleChange}/>*/}

            {/*<ModalInput inputId="passwordField" inputType="password" labelText="Пароль" name="password"*/}
            {/*            handleChange={handleChange}/>*/}

            {/*<ModalInput inputId="passwordConfirmField" inputType="password" labelText="Подтвердите пароль" name=""*/}
            {/*            handleChange={handleChange}/>*/}

            <input type="submit" value="Зарегистрироваться"
                   className="cursor-pointer w-1/2 m-auto text-gray-700 font-bold text-2xl bg-[#ECECEC] h-16 rounded-2xl border-[4px] border-black
                hover:bg-white hover:text-black"/>
            <a className="text-black m-auto mb-2" href="">У меня уже есть аккаунт</a>
        </form>
    )
}
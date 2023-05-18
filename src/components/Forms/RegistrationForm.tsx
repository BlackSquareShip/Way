import React, {ChangeEvent, useState} from "react";
import {ModalInput} from "./ModalInput";
import {IUser} from "../../models/User";
import axios from 'axios';

const User = {
    fio: "",
    email: "",
    password: ""
}

interface RegistrationFormProps{
    onClose: () => void
}

export function RegistrationForm({onClose} : RegistrationFormProps) {
    const [formData, setFormData] = useState<IUser>(User);
    console.log(formData)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const response = axios.post<IUser>("http://localhost:3030/users/createUser", formData).then()
        //
        // onCreate((await response).data)
        onClose();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {

        setFormData(prev => ({...prev, [field]: event.target.value}))

    };


    return (
        <form className="w-full h-5/6 flex flex-col mb-10" onSubmit={handleSubmit}>

            <ModalInput inputId="fioField" name='fio' value={formData.fio} labelText="ФИО" type="text"
                        handleChange={handleChange}/>

            <ModalInput inputId="loginField" name="email" value={formData.email} labelText="Email"  type="text"
                        handleChange={handleChange}/>

            <ModalInput inputId="passwordField" name="password" value={formData.password} labelText="Пароль" type="password"
                        handleChange={handleChange}/>

            <ModalInput inputId="passwordConfirmField" name="" value={""} labelText="Подтвердите пароль" type="password"
                        handleChange={handleChange}/>

            <input type="submit" value="Зарегистрироваться"
                   className="cursor-pointer px-3 mx-auto my-5 text-gray-700 font-bold text-xl bg-[#ECECEC] h-16 rounded-2xl border-[4px] border-black
                hover:bg-white hover:text-black"/>
            <a className="text-black m-auto mb-2" href="">У меня уже есть аккаунт</a>
        </form>
    )
}
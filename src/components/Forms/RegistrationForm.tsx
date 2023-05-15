import { useState } from "react";
import { ModalInput } from "./ModalInput";
import { IUser } from "../../models/User";
import axios from 'axios';

const User: IUser= {
    fio: "",
    email: "",
    password: ""
}



export function RegistrationForm(){
    const [state, setState] = useState({User});

    const handleSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        
        const response = axios.post<IUser>("http://localhost:3030", User)

        // onCreate((await response).data)
    };
  
    const handleChange = (event : any) => {
      const fio = event.target.fio;
      const email = event.target.email;
      const password = event.target.password;
      User.fio = fio
      User.email = email
      User.password = password
      setState({User});
    };
  

    return (
        <form className="w-full h-5/6 flex flex-col mb-10">

            <ModalInput inputId="fioField" inputType="text" labelText="ФИО" name="fio" handleChange={handleChange}/>

            <ModalInput inputId="loginField" inputType="text" labelText="Email" name="email"  handleChange={handleChange}/>

            <ModalInput inputId="passwordField" inputType="password" labelText="Пароль" name="password"  handleChange={handleChange}/>

            <ModalInput inputId="passwordConfirmField" inputType="password" labelText="Подтвердите пароль" name=""  handleChange={handleChange}/>

            <input type="submit" value="Зарегистрироваться" onSubmit={handleSubmit}
                className="cursor-pointer w-1/2 m-auto text-gray-700 font-bold text-2xl bg-[#ECECEC] h-16 rounded-2xl border-[4px] border-black
                hover:bg-white hover:text-black"/>
            <a className="text-black m-auto mb-2" href="">У меня уже есть аккаунт</a>
        </form>
    )
}
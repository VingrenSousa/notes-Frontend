import type {InputHTMLAttributes, ReactNode } from "react";
import { Conteiner } from "./styles";

interface propsInput extends  InputHTMLAttributes<HTMLInputElement>{
    children?:ReactNode
    
}

export default function Input({children,...rest}:propsInput){
    return(
        <Conteiner>
            {  children}
            <input {...rest}/>
        </Conteiner>
    )
}
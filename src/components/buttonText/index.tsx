import type { ButtonHTMLAttributes } from "react";
import { Conteniner } from "./styles";
interface propsbutom extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string,
    isActive?:boolean
}
export default function ButtonText({title,isActive=false,...rest}:propsbutom){
    return(
        <Conteniner
        isActive={isActive}
        type="button"
        {...rest}>
            {title}
        </Conteniner>
    )
}
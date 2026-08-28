import { useEffect, useState, type ButtonHTMLAttributes } from "react";
import { Container } from "./styles";


interface props extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string,
    loadding?:boolean
    
}
export default function Button ({title,loadding=false,...rest}:props){

    const [isLoadding,setIsLoadding]=useState(title)
    useEffect(()=>{
        if(loadding){
            setIsLoadding("Carregando")
        }
    },[loadding])
    return(
        <Container
        {...rest}
        disabled={loadding}
   >
            {
                isLoadding 
            }
        </Container>

      
    )
}
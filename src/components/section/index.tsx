import type { PropsWithChildren } from "react";
import { Conteniner } from "./styles";


interface porpssetion{
 title:string
 direction:"column"|"row"
}

export default function Section({title,children,direction}:PropsWithChildren<porpssetion>){
    return(
        <Conteniner direction={direction}>
            <h2>{title}</h2>
            <div>
            {
                children
            }
            </div>
            
        </Conteniner>
    )
}
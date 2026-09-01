import type { ButtonHTMLAttributes } from "react";
import type { propsDateNote } from "./date";
import { Conteiner } from "./styles";
import Tags from "../tags";


interface props  extends  ButtonHTMLAttributes<HTMLButtonElement> {
 date:propsDateNote
}

export default function Note({date,...rest}:props){
    return(
        <Conteiner {...rest}>
            <h1>{date.title}</h1>
            {
                date&&
                <footer>
                    {
                        date.tags.map((tag,index)=>(
                            <Tags title={ tag.name} key={index}/>
                               
                        ))
                    }
                </footer>
            }
        </Conteiner>
    )
}
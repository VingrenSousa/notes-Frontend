import { Conteiner } from "./styles"

type propsTags={
    title:string
}
export default function Tags({title}:propsTags){
return(
    <Conteiner>
        {title}
    </Conteiner>
)
}
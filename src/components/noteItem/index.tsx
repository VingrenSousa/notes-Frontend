import { FiPlus, FiX} from "react-icons/fi";
import { Container } from "./styles";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
     isNew: boolean;
     value?: string;
    onClick?:() => void;
}
export default function NoteItem({isNew=false,value,onClick,...rest}:Props) {

   

    return (
        <Container isNew={isNew} onClick={onClick}>
            <input type="text" value={value} readOnly={!isNew} {...rest} placeholder="Digite o link..."/>
            <button className={!isNew?"button-delete":"button-add"} type="button" onClick={onClick}>
                {isNew ? <FiPlus /> :<FiX/>} 
            </button>
               
      
        </Container>
    )
}
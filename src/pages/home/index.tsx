import ButtonText from "../../components/buttonText";
import Header from "../../components/header/indeex";
import { Conteiner,Brand,Content,Menu,NewNote,Search } from "./styles";





export default function Home(){
    return(
        <Conteiner>
            
            <Brand>
                <h1> ANotei </h1>
            </Brand>

            <Header/>
            <Menu>
               <li>
                <ButtonText isActive title="Todos"/>
                <ButtonText title="react"/>
                <ButtonText title="Node"/>
                </li>
            </Menu>

            <Search></Search>

            <Content></Content>

            <NewNote></NewNote>
        </Conteiner>
    )
}
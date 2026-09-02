import ButtonText from "../../components/buttonText";
import Header from "../../components/header/indeex";
import Input from "../../components/input";
import Note from "../../components/note";
import Section from "../../components/section";
import { Conteiner,Brand,Content,Menu,NewNote,Search } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";




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

            <Search>
                <Input placeholder="pesquisa">
                    <FiSearch/>
                </Input>
            </Search>

            <Content>
                <Section title=" Minhas notas" direction="column">
                    <Note date={{
                        title:"node",
                        tags:[
                            {name:"node" , id:1 ,id_note:1}
                        ]
                        }}
                        />
                         <Note date={{
                        title:"node",
                        tags:[
                            {name:"node" , id:1 ,id_note:1}
                        ]
                        }}
                        />
                         <Note date={{
                        title:"node",
                        tags:[
                            {name:"node" , id:1 ,id_note:1}
                        ]
                        }}
                        />
                         <Note date={{
                        title:"node",
                        tags:[
                            {name:"node" , id:1 ,id_note:1}
                        ]
                        }}
                        />
                         <Note date={{
                        title:"node",
                        tags:[
                            {name:"node" , id:1 ,id_note:1}
                        ]
                        }}
                        />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar notas
            </NewNote>
        </Conteiner>
    )
}
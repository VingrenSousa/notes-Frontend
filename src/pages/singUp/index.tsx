import Button from "../../components/buttons";
import Input from "../../components/input";
import { Background, Container, Form } from "./styles";
import { FiMail,FiLock,FiUser} from "react-icons/fi";

import backgroundImg from "../../assets/back.jpg";
import { Link } from "react-router-dom";
export default function SignUp() {
    return (
        <Container>
             <Background backgroundImg={backgroundImg}/>
            <Form>
                <h1>Notes</h1>
                <p>aplicação de notas</p>
                <h2>Criar uma conta</h2>

                <Input placeholder="Nome" type="text" >
                    <FiUser size={20}/>
                </Input>
                <Input placeholder="E-mail" type="text" >
                    <FiMail size={20}/>
                </Input>
                <Input placeholder="Senha" type="password" >
                    <FiLock size={20}/>
                </Input>
                <Button title="Criar Conta"/>

                <Link to="/">
                    Voltar para login 
                </Link>
            </Form>
           
        </Container>
    )

}
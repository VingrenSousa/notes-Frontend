import Button from "../../components/buttons";
import Input from "../../components/input";
import { Background, Container, Form } from "./styles";
import { FiMail,FiLock } from "react-icons/fi";

import backgroundImg from "../../assets/back.jpg";
import { Link } from "react-router-dom";
export default function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicación de notas</p>
                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" type="text" >
                    <FiMail size={20}/>
                </Input>
                <Input placeholder="Senha" type="password" >
                    <FiLock size={20}/>
                </Input>
                <Button title="Entrar"/>

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
            <Background backgroundImg={backgroundImg}/>
        </Container>
    )

}
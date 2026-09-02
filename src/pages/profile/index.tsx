import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Form ,Avatar} from "./styles";
import Input from "../../components/input";
import Button from "../../components/buttons";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft size={38}/>
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/VingrenSousa.png" alt="Foto do usuário"/>
                    <label htmlFor="avatar">
                        <FiCamera size={25}/>
                        <input id="avatar" type="file"/>    
                    </label>

                </Avatar>
                <Input type="text" placeholder="Nome">
                    <FiUser size={20}/>
                </Input>

                <Input type="text" placeholder="E-mail">
                    <FiMail size={20}/>
                </Input>
            
                <Input type="password" placeholder="Senha atual">
                    <FiLock size={20}/>
                </Input>
                <Input type="password" placeholder="Nova senha">
                    <FiLock size={20}/>
                </Input>

                <Button title="Salvar" type="submit"/>
            </Form>
            
        </Container>
    )
}
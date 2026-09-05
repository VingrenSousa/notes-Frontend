import Button from "../../components/buttons";
import Input from "../../components/input";
import { Alert, Background, Container, Form } from "./styles";
import { FiMail,FiLock,FiUser} from "react-icons/fi";

import backgroundImg from "../../assets/back.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api";
export default function SignUp() {
    
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[conPassword,setConPassword]=useState("")

    const[descriptAlert,setDescriptAlert]=useState("")

     const navigete = useNavigate()
     function handleSignUp(){
         setDescriptAlert("")
        if (!name || !email || !password || !conPassword) {
            return setDescriptAlert("todo os campos sao obrigatorio")
        }
         if (password.length < 8) {
            return setDescriptAlert("A senha deve ter pelo menos 8 caracteres");
        }
        if(password!==conPassword){
           return setDescriptAlert("As senhas não coincidem");
        }

       api.post("/users",{name,email,password})
       .then(()=>{alert("usuario cadastrado com sucesso!") 
            navigete("/")
       })
        .catch((error)=>{
            if(error.response){
                setDescriptAlert(error.response.data.error  );
                console.log(error.response.data.error  );
            }else{
                setDescriptAlert("erro au cadastra, tente novamnete")
            }
      })
       


    }
    return (
        <Container>
             <Background backgroundImg={backgroundImg}/>
            <Form>
                <h1>Notes</h1>
                <p>aplicação de notas</p>
                <h2>Criar uma conta</h2>

                <Input 
                    onChange={({target})=>{setName(target.value)}}
                    placeholder="Nome"
                    type="text" >
                    <FiUser size={20}/>
                </Input>
                <Input 
                    onChange={({target})=>{setEmail(target.value)}}
                    placeholder="E-mail"
                    type="text" >
                    <FiMail size={20}/>
                </Input>
                <Input 
                  placeholder="Senha" 
                  type="password"
                   onChange={({target})=>{setPassword(target.value)}} >
                    <FiLock size={20}/>
                </Input>
                <Input 
                placeholder="confirme a senha" 
                type="password"
                 onChange={({target})=>{setConPassword(target.value)}} >
                    <FiLock size={20}/>
                </Input>
                {
                  descriptAlert&&  
                    <Alert>
                        {descriptAlert}
                    </Alert>
                }
                <Button 
                type="button"
                onClick={handleSignUp}
                title="Criar Conta"/>

                <Link to="/">
                    Voltar para login 
                </Link>
            </Form>
           
        </Container>
    )

}
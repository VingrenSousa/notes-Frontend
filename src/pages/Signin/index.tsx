import Button from "../../components/buttons";
import Input from "../../components/input";
import { Background, Container, Form } from "./styles";
import { FiMail,FiLock } from "react-icons/fi";

import backgroundImg from "../../assets/back.jpg";
import { Link } from "react-router-dom";
import { userAuth } from "../../hooks/auth";
import { useState } from "react";
export default function SignIn() {

    const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")

    const {signIn} = userAuth();

    function hendleSignIn(){
        if(!email||!password){
            alert("emeil e senha e necesario")
        }
       signIn({email,password})
    }
    return (
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicación de notas</p>
                <h2>Faça seu login</h2>

                <Input 
                onChange={({target})=>{setEmail(target.value)}}
                placeholder="E-mail" 
                type="text" >
                    <FiMail size={20}/>
                </Input>
                <Input 
                onChange={({target})=>{setPassword(target.value)}}
                placeholder="Senha" 
                type="password" >
                    <FiLock size={20}/>
                </Input>
                <Button 
                type="button"
                onClick={hendleSignIn}
                title="Entrar"/>

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
            <Background backgroundImg={backgroundImg}/>
        </Container>
    )

}
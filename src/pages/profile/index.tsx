import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Form ,Avatar} from "./styles";
import Input from "../../components/input";
import Button from "../../components/buttons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAuth } from "../../hooks/auth";
import imgUser from "../../assets/default.jfif"
import { api } from "../../service/api";
export default function Profile() {
    const {user,updateProfile}=userAuth()

    const avatarView=user?.avatar?`${api.defaults.baseURL}/file/${user.avatar}`:imgUser

    const[avatar,setAvatar]=useState(avatarView)
    const[avatarFile,setAvatarFile]=useState<File | null>(null)

    

    const[name,setName]=useState(user?.name)
    const[email,setEmail]=useState(user?.email)
    const[passwordOld,setPasswprdOld]=useState("")
    const[passwordNew,setPasswordNew]=useState("")

    const navigate=useNavigate()

    function UpdateProfile(){
        const user={
            name:name??"",
            email:email??"",
            password:passwordNew,
            old_password:passwordOld

        }
        updateProfile({user,avatarFile})
        navigate("/")
    }

    function hendleChangeAvatar(event:React.ChangeEvent<HTMLInputElement>){
        const file = event.target.files?.[0]
        if(file){    
            setAvatarFile(file);
            const ImagePreview=URL.createObjectURL(file);
            setAvatar(ImagePreview);
        }

    }
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft size={38}/>
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário"/>
                    <label htmlFor="avatar">
                        <FiCamera size={25}/>
                        <input id="avatar" type="file" onChange={hendleChangeAvatar}/>    
                    </label>

                </Avatar>
                <Input type="text" onChange={n=>setName(n.target.value)} value={name} placeholder="Nome">
                    <FiUser size={20}/>
                </Input>

                <Input type="text"  value={email} onChange={n=>setEmail(n.target.value)}  placeholder="E-mail">
                    <FiMail size={20}/>
                </Input>
            
                <Input type="password"  onChange={n=>setPasswprdOld(n.target.value)} placeholder="Senha atual">
                    <FiLock size={20}/>
                </Input>
                <Input type="password" onChange={n=>setPasswordNew(n.target.value)} placeholder="Nova senha">
                    <FiLock size={20}/>
                </Input>

                <Button onClick={UpdateProfile} title="Salvar" type="button"/>
            </Form>
            
        </Container>
    )
}
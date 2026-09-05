import { useState } from "react";
import { HeaderConteiner,Profile,Logout } from "./styles";
import {RiShutDownLine}from "react-icons/ri"
import thema from "../../styles/thema";
import { userAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import imgUser from "../../assets/default.jfif"
export default function Header(){
    const {signOut,user}=userAuth()
    const [avatar,setAvatar]=useState()
     const[srcImag,setSrcImag]=useState("https://github.com/VingrenSousa.png")

        const avatarView=user?.avatar?`${api.defaults.baseURL}/file/${user.avatar}`:imgUser
    return(
        <HeaderConteiner>
            <Profile to="/profile">
                <img
                    src={avatarView}
                    alt="foto do usuario"
                    />
                <div>
                    <span> Bem-Vindo</span>
                    <strong>{user?.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine color={thema.COLOR.GRAY_100}  size={36}/>
            </Logout>

        </HeaderConteiner>
    )
}
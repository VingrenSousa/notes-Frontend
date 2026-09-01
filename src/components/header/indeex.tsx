import { useState } from "react";
import { HeaderConteiner,Profile,Logout } from "./styles";
import {RiShutDownLine}from "react-icons/ri"
import thema from "../../styles/thema";

export default function Header(){
    const[user,setUser]=useState("vingren")
     const[srcImag,setSrcImag]=useState("https://github.com/VingrenSousa.png")
    return(
        <HeaderConteiner>
            <Profile>
                <img
                    src={srcImag}
                    alt="foto do usuario"
                    />
                <div>
                    <span> Bem-Vindo</span>
                    <strong>{user}</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine color={thema.COLOR.GRAY_100}  size={36}/>
            </Logout>

        </HeaderConteiner>
    )
}
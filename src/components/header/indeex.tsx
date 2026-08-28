import { useState } from "react";
import { HeaderConteiner,Profile } from "./styles";


export default function Header(){
    const[user,setUser]=useState("vingren")
    return(
        <HeaderConteiner>
            <Profile>

                <img
                    src="https://github.com/VingrenSousa.png"
                    alt="foto do usuario"
                    />
                <div>
                    <span> Bem-Vindo</span>
                    <strong>{user}</strong>
                </div>
            </Profile>

        </HeaderConteiner>
    )
}
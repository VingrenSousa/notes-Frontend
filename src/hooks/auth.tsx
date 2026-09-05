import { createContext,useContext, useEffect, useState, type ReactNode } from "react";

const AuthContext = createContext({} as AuthContextData);
import { api } from "../service/api";
import axios  from "axios";

type Props = {
    children: ReactNode;
};
type PropsSingIn = {
    email:string,
    password:string
};

type AuthContextData = {
    signIn: ({ email, password }: PropsSingIn) => Promise<void>,
    signOut():void
    user:propsUser | null;
    updateProfile({}:PropsUpdata):void,
    }
type propsData={
      user:propsUser
      token:string
}
export type propsUser={
        avatar?: null|string
        create_at?:string
        email: string
        id?:number
        name: string
        password:string
        update_at?:string
        old_password?: string;
}

type PropsUpdata={
    user:propsUser
    avatarFile:File | null
}


function AuthProvider({ children }: Props) {

    const[date,setDate]=useState<propsData | null>(null) // date recebe nosso token e obejeto user e passado para nosso context react

        
    async function signIn({email,password}:PropsSingIn) {
        
        try {
            const response = await api.post("/sessions",{email,password})
            const {user,token}=response.data;
            setDate({user,token })
            localStorage.setItem("@note:user",JSON.stringify(user)) 
            localStorage.setItem("@note:token",token)   
            api.defaults.headers.common["authorization"]="Bearer "+token

        } catch (error: unknown) {

            if (axios.isAxiosError(error)) {
              alert(error.response?.data);
            } else {
              alert("Erro de autenticação, tente novamente");
            }
        }
    }
    function signOut(){
        localStorage.removeItem("@note:token")
        localStorage.removeItem("@note:user")

        setDate(null)
    }
    async function updateProfile({user,avatarFile}:PropsUpdata){

        
        try {
            if(avatarFile){
                const fileUpdateForm=new FormData()
                fileUpdateForm.append("avatar",avatarFile)
                const res = await api.patch("/users/avatar",fileUpdateForm)
                console.log(res)
                user.avatar=res.data.image
            }
            await api.put("/users",user);

            localStorage.setItem("@note:user",JSON.stringify(user))

            if(date?.token){
                setDate({user,token:date?.token})
            }else{
                setDate(null)
            }     
        } catch (error) {
             if (axios.isAxiosError(error)) {
              alert(error.response?.data);
            } else {
              alert("Erro de autenticação, tente novamente");
            }
        }


    }
 
    useEffect(()=>{
        const token = localStorage.getItem("@note:token")
        const user = localStorage.getItem("@note:user")
        if(token&&user){
            api.defaults.headers.common["authorization"]="Bearer "+token
            setDate({
                token,
                user:JSON.parse(user)
            })

        }
    },[])

    return (
        <AuthContext.Provider value={{updateProfile,signOut,signIn, user: date?.user ?? null}}>
            {children}
        </AuthContext.Provider>
    );
}
function userAuth(){
    const context =useContext(AuthContext)
    return(context)

}

export{AuthProvider,userAuth,AuthContext} 
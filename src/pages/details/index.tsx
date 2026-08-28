import { useState } from "react"
import Button from "../../components/buttons"
import {Conteiner} from "./styles"
import Header from "../../components/header/indeex"







export default function Details(){
  const[isLoadding,setIsLoadding]=useState(false)

  return(
    <Conteiner>
        <Header/>
        <Button  title="entre"/>
    </Conteiner>
  );
};
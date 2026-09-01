import { useState } from "react"
import Button from "../../components/buttons"
import {Conteiner, Links,Content} from "./styles"
import Header from "../../components/header/indeex"
import Section from "../../components/section"
import Tags from "../../components/tags"
import ButtonText from "../../components/buttonText"







export default function Details(){
  const[isLoadding,setIsLoadding]=useState(false)
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto culpa distinctio dolor corrupti laboriosam deserunt deleniti! Deserunt, tempora totam reprehenderit repudiandae, inventore dignissimos exercitationem nesciunt distinctio voluptatem saepe itaque."
  return(
    <Conteiner>
      <Header/>
      <main>
        <Content>
          <ButtonText isActive={true} title="Excluir Nota"/>

          <h1> Aprentacao React </h1>
          <p>{lorem}</p>
          <Section direction="column" title="links">
            <Links>
              <li>
                <a href="../home">link 1</a>
              </li>
              <li> 
                <a href="#">link 2</a>
              </li>
              <li>
                <a href="#">link 3</a>
              </li>
            </Links>
          </Section>

          <Section direction="row" title="Marcadores">
              <Tags title="Node"/>
              <Tags title="Expres"/>
              
            </Section>
          <Button  title="Voltar"/>
        </Content>
      </main>
    </Conteiner>
  );
};
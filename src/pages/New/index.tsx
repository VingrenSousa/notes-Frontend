import { Link } from "react-router-dom";
import Button from "../../components/buttons";
import Header from "../../components/header/indeex";
import Input from "../../components/input";
import NoteItem from "../../components/noteItem";
import Section from "../../components/section";
import TextArea from "../../components/textArea";
import { Container,Form } from "./styles";

export default function New() {
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>
                    <Section direction="column" title="Links úteis">
                        <NoteItem value="https://www.rocketseat.com.br" isNew={false}/>
                        <NoteItem  isNew/>
                    </Section>
                    <Section direction="row" title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" isNew={false}/>
                            <NoteItem value="rocketseat" isNew={false}/>
                            <NoteItem  isNew/>
                        </div>
                    </Section>
                    <div className="button">
                        <Button type="submit" title="Salvar"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}
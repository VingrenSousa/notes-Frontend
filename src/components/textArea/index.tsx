import type { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
}


export default function TextArea({value, ...rest}:Props) {
    return (
        <Container {...rest}>
           {value}
        </Container>
    )
}
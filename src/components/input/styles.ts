import styled from "styled-components";

export const Conteiner= styled.div`
width:100%;
display: flex;
align-items: center;

background-color:${({theme})=>theme.COLOR.BACKGROUND_900};
color:${({theme})=>theme.COLOR.GRAY_300};
margin-bottom:8px;
border-radius:10px;

>input{
    height: 56px;
    width: 100%;
    padding: 12px;

    color:${({theme})=>theme.COLOR.WHITE};
    background-color:transparent;
    border: 0;
    &:placeholder{
        color:${({theme})=>theme.COLOR.GRAY_300};
    };
   
}
>svg{
    margin-left: 16px
}

`
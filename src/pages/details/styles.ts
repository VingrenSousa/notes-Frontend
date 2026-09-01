import styled from "styled-components";



export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-rows:105px auto;
    grid-template-areas:
    "header"
    "content";
    > main{
        grid-area:content;
        overflow-y:auto;
        padding:64px 0;
        &::-webkit-scrollbar {
        display: none;
        }
    }
    

`
export const Links = styled.ul`
list-style: none;

>li{
    margin-top:12px;


    a{
        color: ${({theme})=>theme.COLOR.WHITE};
    }
};


`

export const Content = styled.div`
    max-width:550px;
    margin:0 auto;
    
    display:flex;
    flex-direction: column;

    >button:first-child{
        align-self:flex-end;
    };
    >h1 {
        font-size: 36px;
        font-weight:500;
        padding-top:64px;
    };
    >p{
         font-size: 16px;
         margin-top:16px;
         text-align:justify;
    }

`
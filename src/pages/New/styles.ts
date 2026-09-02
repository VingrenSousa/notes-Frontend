import styled from "styled-components";

export const Container=styled.div`
width:100%;
height:100vh;
display: grid;
grid-template-rows: 144px auto;
grid-template-areas:
"header"
"content";
>main{
    grid-area:content;
    overflow-y:auto;

};
.button{
    display:flex;
    justify-content:center;
    
}
.tags{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
};
/* Largura da barra */
::-webkit-scrollbar {
    width: 8px;
}

/* Fundo da barra */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Parte que você arrasta */
::-webkit-scrollbar-thumb {
    background: ${({theme})=>theme.COLOR.ORANGE};
    border-radius: 10px;
}

/* Quando passa o mouse */
::-webkit-scrollbar-thumb:hover {
    background: #666;
}

`



export const Form=styled.form`
 max-width:550px;
 margin:64px auto;
 >header{
    display:flex;
    align-items:center;
    justify-content:space-between;

    margin-bottom:40px;

    a{
        font-size:16px;
        color:${({theme})=>theme.COLOR.GRAY_100};
    }
 }
 >h1{
    font-size:36px;
    color:${({theme})=>theme.COLOR.ORANGE};
 }
`
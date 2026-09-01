import styled from "styled-components";



interface Props {
  direction: "row" | "column";
}

export const Conteniner= styled.section<Props>`
margin: 28px 0 ;
padding:0,10px;
>div{
    display: flex;
    flex-direction:${({direction})=>direction};
    width: 100%;
    padding:10px 0px;
};

>h2{
    border-bottom-width:1px;
    border-bottom-style:solid;
    border-bottom-color:${({theme})=>theme.COLOR.BACKGROUND_700};

    padding-bottom:16px;

   




    color:${({theme})=>theme.COLOR.GRAY_100};
    font-size:20px;
    font-weight:400;
}
`
import styled from "styled-components";

export const Container=styled.div<{isNew:boolean}>`
display:flex;
align-items:center;

background-color:${({theme,isNew})=>isNew?"transparent":theme.COLOR.BACKGROUND_900};
color:${({theme})=>theme.COLOR.GRAY_300};

border:${({theme,isNew})=>isNew?`1px dashed ${theme.COLOR.GRAY_300}`:"none"};

margin-bottom:8px;
border-radius:10px;
padding-right:16px;
>button{
    border:none;   
    background:none;
}
.button-delete{
    color:${({theme})=>theme.COLOR.RED};
}
.button-add{
    color:${({theme})=>theme.COLOR.ORANGE};
}
>input{
    width:100%;
    height:56px;

    padding:12px ;
    color:${({theme})=>theme.COLOR.WHITE};
    background:transparent;

    border:none;
    &::placeholder{
        color:${({theme})=>theme.COLOR.GRAY_300};
    }
}
`
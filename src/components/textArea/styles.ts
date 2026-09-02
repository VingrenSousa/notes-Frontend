import styled from "styled-components";

export const Container=styled.textarea`
    width:100%;
    height:150px;
    background-color:${({theme})=>theme.COLOR.BACKGROUND_900};
    border:none;
    resize:none;
    border-radius:10px;
    margin-bottom:10px;
    padding:16px;
    color:${({theme})=>theme.COLOR.WHITE};
    

`
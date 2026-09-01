import styled from "styled-components";
type props={
    isActive:boolean
}
export const Conteniner=styled.button<props>`
    background:none;
    color:${({theme,isActive})=>isActive?theme.COLOR.ORANGE:theme.COLOR.GRAY_100};

    border:none;

    font-size: 16px;
`
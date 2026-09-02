import styled from "styled-components";
type BackgroundProps={
    backgroundImg:string;
}
export const Container=styled.div`
height:100vh;

display:flex;
align-items:stretch;

`
export const Form=styled.form`
padding:0 136px;
display:flex;
flex-direction:column;  
justify-content:center;
align-items:center;

text-align:center;

>h1{
    font-size:48px;
    color:${({theme})=>theme.COLOR.ORANGE};

};

>h2{
    font-size:24px;
    margin:48px 0;
    

};
>p{
    font-size:14px;
    color:${({theme})=>theme.COLOR.GRAY_100};

};
>a{
    margin-top:124px;
    color:${({theme})=>theme.COLOR.ORANGE};
};
`

export const Background=styled.div<BackgroundProps>`
flex:1;
background: url(${({backgroundImg})=>backgroundImg}) no-repeat center center; // seto background image to not repeat and center it
background-size:cover; 
`

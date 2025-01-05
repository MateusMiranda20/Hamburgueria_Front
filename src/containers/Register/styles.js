import styled from "styled-components";
import BackgroundLogin from "../../assets/Fundo negro.svg"
import Background from "../../assets/Fundo-login.svg"
import { Link as ReactLink } from "react-router-dom";

export const Container  = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`
export const LeftContainer  = styled.div`
   background: url('${BackgroundLogin}');
   background-size: cover;
   background-position: center;

   width: 100%;
   height: 100%;
   max-width: 50%;

   display: flex;
   align-items: center;
   justify-content: center;

   img{
    width: 60%;
   }

`
export const RightContainer  = styled.div`
   width: 100%;
   height: 100%;
   max-width: 50%;
   
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

    background: url('${Background}');
    background-color: #1e1e1e;


    P{
        font-size: 18px;
        font-weight: 800;
        color: ${(props) =>props.theme.white};
        font-family: 'poppins', sans-serif;
        font-style: normal;
    }
    
    a{
        text-decoration: underline;
        font-family: 'poppins', sans-serif;
        font-weight: 400;
        font-style: normal;
        cursor: pointer;
    }
`
export const Title  = styled.h1`
   font-family: "Road Rage", sans-serif;
   font-size: 40px;
   color: ${(props) =>props.theme.white};
`
export const Form  = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`
export const Input  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    
    input{
        width: 100%;
        border: none;
        height: 42px;
        border-radius: 10px;
        padding: 0 15px;
    }

    label{
        font-size: 18px;
        font-weight: 600px;
        color: ${(props) =>props.theme.white};
        font-family: 'poppins', sans-serif;
        font-style: normal;
    }

    P{
        font-size: 12px;
        color: ${(props) =>props.theme.darkRed};
        font-weight: 600;
        height: 10px;
        line-height: 80%;
        margin-left: 10px;
    }
`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: ${(props) =>props.theme.white};
`
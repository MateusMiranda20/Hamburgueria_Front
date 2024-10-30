import styled from "styled-components";
import { Link } from "react-router-dom";

import BannerFundoo from '../../assets/Banner-fundo.svg'
import  FundoImg from "../../assets/Fundo-login.svg"

export const Container = styled.div `

    width: 100%;
    min-width: 100vh;
    background-color: #f0f0f0;

    background: 
    linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ),
    url('${FundoImg}');

`
export const Banner = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerFundoo}'), no-repeat;
    background-size: cover;
    background-color: #1f1f1f;
    background-position: center;
    
    color: #fafafa;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
        position: absolute;

        right: 20%;
        top: 20%;

        span{
            display: block;
            font-size: 20px;
            font-weight: 400;
        }
    }

`
export const CategoryMenu = styled.div `
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`
export const CategoryButton = styled(Link)`

    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#000')};
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${ (props) => props.$isActiveCategory && '3px solid #9758a6'};
`
export const ProductMenu = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;
`
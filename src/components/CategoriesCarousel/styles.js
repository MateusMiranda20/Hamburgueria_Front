import styled from "styled-components";

export const Container = styled.div`

    .carousel-item{
        padding: 40px;
    }

    .react-multiple-carousel__arrow--right {
        top: 50px;
    }
    .react-multiple-carousel__arrow--left {
        top: 50px;
    }

`

export const Title = styled.h2`
    font-size: 30px;
    font-family: sans-serif;
    color: #9758a6;
    font-weight: 800;
    padding-bottom: 20px;
    position: relative;
    text-align: center;
    top: 10px;

    &::after{
        content:'' ;
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: 50%;
        transform: translateX(-50%);
        top: 60px;
    }
`

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    cursor: pointer;


    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;

    p{
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 18px;
        font-size: 20px;
        font-weight: bold;
        font-family: sans-serif;
        margin-top: 100px;
        text-transform: capitalize; /* Faz com que a primeira letra de cada palavra seja maiúscula */
    }
`
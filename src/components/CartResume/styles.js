import styled from "styled-components";

export const Container = styled.div`
background-color: #484848;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 20px;


*{
    color: #000;
    font-weight: 500;
}

.container-top{
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
    'title title'
    'itens itens-price'
    'delivery-tax delivery-price';
    

    .title {
    grid-area: title;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    background-color: #fff;
    color: #000;
    padding: 15px;
    width: 100%;
    text-align: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    }

    .itens{
        grid-area: itens;
        padding-left: 15px;
    }

    .itens-price {
        grid-area:itens-price ;
        padding-right: 15px;
    }

    .delivery-tax {
        grid-area: delivery-tax ;
        padding-left: 20px;
    }

    .delivery-price{
        grid-area:delivery-price ;
        padding-right: 15px;
    }
}

.container-bottom{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bolder;
    margin-top: 24px;
    padding: 20px;

    *{
        font-weight: bolder;
        color: #000;
    }
}
`


export const Button = styled.button`
width: 100%;
padding: 10px;
border: none;
border-radius: 5px;
color: #000;
font-weight: 800;
background-color: #9758a6;
`
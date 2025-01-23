import  Select  from 'react-select';
import styled from "styled-components";


export const ProductImg  = styled.img`
    height: 80px;
    padding: 8px;
    border-radius: 16px;
`

export const SelectStatus = styled(Select)`

width: 240px;
`
export const Filter  = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap:50px ;
`
export const FilterOption  = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${props => props.theme.darkGray};
    border-bottom: ${(props) => props.$isctiveStatus ? `2px solid ${props.theme.purple}` : 'none'};
    font-size: 15px;
    line-height: 20px;
    padding-bottom: 5px;
`
 
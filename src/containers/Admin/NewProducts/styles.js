import styled from "styled-components";
import ReactSelect from 'react-select'
import { Button } from '../../../components/Button/index'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const Form = styled.form`
    border-radius: 20px;
    background-color: ${(props) => props.theme.black};
    padding: 30px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const Label = styled.label`
    color: ${(props) => props.theme.white};
    font-weight: 600;
    font-size: 15px;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: none;
    padding: 0 15px;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed ${(props) => props.theme.white};
    border-radius: 5px;
    padding: 10px;
    display: flex;
    margin-top: 20px;

    > svg {
        width: 25px;
        height: 25px;
        color:${(props) => props.theme.white};
        margin-right: 5px;
    }

    input{
        display: none;
    }
`

export const Select = styled(ReactSelect)``

export const SubmitButton = styled(Button)`
    margin-top: 50px;
`
export const ErrorMenseger = styled.span`
    color: ${(props) => props.theme.darkRed};
    font-size: 12px;
    line-height: 80%;
    font-weight: 600;
`
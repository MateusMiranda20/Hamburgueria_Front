import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    Input
} from "./styles"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button } from '../../components/Button'
import logo from "../../assets/Hamburgueria-logo.png"

import { api } from '../../services/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha.   '),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        try {
            const response = await toast.promise(
                api.post("/session", {
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando seus dados',
                    success: 'seja bem vindo(a) 👌',
                    error: 'Email ou senha Incorretos 🤯',
                },
            )
        console.log(response.data); // Processa a resposta conforme necessário
    } catch (error) {
        console.error("Erro na solicitação", error);
    }
}

return (
    <Container>
        <LeftContainer>
            <img src={logo} alt="" />
        </LeftContainer>

        <RightContainer>
            <img src="" alt="" />
            <Title>
                Olá, seja bem-vindo à <span>Coruja Hambúrgueres!</span>
                <br />
                Acesse com seu <span>Login e senha.</span>
            </Title>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input>
                    <label> Email</label>
                    <input type="email" {...register("email")} />
                    <p>{errors?.email?.message}</p>
                </Input>

                <Input>
                    <label>Senha</label>
                    <input type="password" {...register("password")} />
                    <p>{errors?.password?.message}</p>
                </Input>

                <Button type="submit" >Entrar</Button>
            </Form>
            <p>Não possui conta? <a>Clique aqui.</a></p>
        </RightContainer>
        <ToastContainer autoClose={4000} theme="colored" />
    </Container>
)
}

export default Login
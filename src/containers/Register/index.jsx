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

function Register() {

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha.   '),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirme sua senha')
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
                api.post("/users", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando seus dados',
                    success: 'Cadastro efetuado com sucesso!👌',
                    error: 'Ops, algo deu errado! Tente novamente. 🤯',
                }
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
                <Title>Criar conta</Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                <Input>
                        <label>Nome</label>
                        <input type="text" {...register("nome")} />
                        <p>{errors?.name?.message}</p>
                    </Input>

                    <Input>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </Input>

                    <Input>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </Input>

                    <Input>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </Input>

                    <Button type="submit" >Criar Conta</Button>
                </Form>
                <p>Já possui conta ? <a>Clique aqui.</a></p>
            </RightContainer>
            <ToastContainer autoClose={4000} theme="colored" />
        </Container>
    )
}

export default Register
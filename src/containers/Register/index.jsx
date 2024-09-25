import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    Input,
    Link
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
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            },
                {
                    validateStatus: () => true
                }
            );

            if (status === 200 || status === 201) {
                toast.success('Conta criada com sucesso!');
            } else if (status === 400) {
                toast.error('Email já cadastrado! Faça o login para continuar');
            } else {
                throw new Error(); //qualquer outro erro manda o erro para o catch
            }

        } catch (error) {
            toast.error('Falha no sistema! tente novamente.')
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
                        <input type="text" {...register("name")} />
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
                <p>
                    Já possui conta ? <Link to="/Login"> Clique aqui.</Link>
                </p>
            </RightContainer>
            <ToastContainer autoClose={4000} theme="colored" />
        </Container>
    )
}

export default Register
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Image } from "@phosphor-icons/react";
import { api } from "../../../services/api";

import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMenseger, ContainerCheckbox } from './styles'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
    category: yup.object().required('Selecione uma categoria'),
    offer: yup.boolean(),
    file: yup.mixed().
        test('required', 'Carregue arquivos até 3mb', (value) => {
            return value && value.lenght > 0
        })
        .test('fileSize', 'Carregue arquivos até 3mb', (value) => {
            return value && value.lenght > 0 && value[0].size <= 30000
        }).test('type', 'Carregue apenas imagem PNG ou JPEG', value => {
            return value && value.lenght > 0 && (value[0].type === 'image/png' || value[0].type === 'image/jpeg')
        })
});


export function NewProducts() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {
        const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando o produto',
            success: 'Produto adicionado com sucesso',
            error: 'Erro ao adicionar o produto, tente novamente!'
        });

        setTimeout(() => {
            navigate('/admin/produtos');
        }, 2000)

    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErrorMenseger>{errors?.name?.message}</ErrorMenseger>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
                    <ErrorMenseger>{errors?.price?.message}</ErrorMenseger>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type="file"
                            {...register('file')}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value.target?.files[0]?.name);
                                register('file').onChange(value)
                            }}
                        />

                        {fileName || 'Upload do Produto'}
                    </LabelUpload>
                    <ErrorMenseger>{errors?.file?.message}</ErrorMenseger>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={(field) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder='Categorias'
                            />
                        )}
                    />
                    <ErrorMenseger>{errors?.category?.message}</ErrorMenseger>
                </InputGroup>

                <InputGroup>
                    <ContainerCheckbox>
                        < input type="checkbox"
                            {...register('offer')}
                        />
                        <Label>Produto em Oferta?</Label>
                    </ContainerCheckbox>
                </InputGroup>

                <SubmitButton>
                    Editar Produto
                </SubmitButton>
            </Form>
        </Container>
    )
}
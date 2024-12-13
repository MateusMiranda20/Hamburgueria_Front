import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/CartContext"
import { api } from "../../services/api"
import { formatPrice } from '../../utils/formatPrice.js';
import { Container, Button } from "./styles"


export function CartResume () {

    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(500)

    const navigate = useNavigate()

    const {cartProducts, clearCart} = useCart()

    useEffect(() => {
        const sumAll = cartProducts.reduce( (acc, current) => {
            return current.price * current.quantity + acc;
        }, 0)

        setFinalPrice(sumAll)
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map( (product ) => {
            return {id: product.id, quantity: product.quantity, price: product.price}
        }); 

        try {
            const { data } = await api.post('/create-payment-intent', { products })

            navigate('/checkout', {
                state: data,
            })

        } catch (err) {
            toast.error('Erro, tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        // try {
        //     const { status } = await api.post('/orders', 
        //         { products },
        //         {
        //             validateStatus: () => true
        //         }
        //     );

        //     if (status === 200 || status === 201) {
        //         setTimeout(() => {
        //         }, 2000);
        //         navigate('/')

        //         clearCart() 
        //         toast.success('Pedido realizado com sucesso!');
        //     } else if (status === 400) {
        //         toast.error('Falha ao realizar o pedido');
        //     } else {
        //         throw new Error(); //qualquer outro erro manda o erro para o catch
        //     }

        // } catch (error) {
        //     toast.error('Falha no sistema! tente novamente.')
        // }
    }
    return(
        <div>
            <ToastContainer autoClose={4000} theme="colored" />
            <Container>
            <div className="container-top">
                <h2 className="title">Resumo do Pedido</h2>
                <p className="itens">Itens</p>
                <p className="itens-price">{formatPrice(finalPrice)}</p>
                <p className="delivery-tax">Taxa entrega</p>
                <p className="delivery-price">{formatPrice(deliveryTax)}</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>{formatPrice(finalPrice + deliveryTax)}</p>
            </div>
        </Container>
        <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}
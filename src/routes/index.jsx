import { createBrowserRouter } from "react-router-dom";

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Menu from '../containers/Menu'
import { Carrinho } from "../containers/Carrinho";
import { Footer } from '/src/components/Footer/index.jsx';
import { Header } from '/src/components/Header/index.jsx';
import { Checkout } from "../containers/Checkout";
import { CompletePayment } from "../containers/CompletePayment";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/',
        element:(
            <>
            <Header />
            <Home />
            <Footer />
            </>
        ),
    },
    {
        path: '/cardapio',
        element: (
            <>
            <Header />
            <Menu />
            </>
        ),
    }, 
    {
        path: '/carrinho',
        element: (
            <Carrinho />
        )
    },
    {
        path: '/checkout',
        element: (
            <Checkout />
        )
    },
    {
        path: '/pagamento',
        element: (
            <CompletePayment />
        )
    }
])
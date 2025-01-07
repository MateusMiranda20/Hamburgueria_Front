import { Routes, Route } from "react-router-dom";

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Menu from '../containers/Menu'
import { Carrinho } from "../containers/Carrinho";
import { Checkout } from "../containers/Checkout";
import { CompletePayment } from "../containers/CompletePayment";
import { UserLayout } from "../Layout/UserLayout"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/pagamento" element={<CompletePayment />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />

        </Routes>
    )
}


//     {
//         path: '/carrinho',
//         element: (
//             <Carrinho />
//         )
//     },
//     {
//         path: '/checkout',
//         element: (
//             <Checkout />
//         )
//     },
//     {
//         path: '/pagamento',
//         element: (
//             <CompletePayment />
//         )
//     }
// ])
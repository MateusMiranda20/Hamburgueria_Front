import { Banner, Title, Content, Container } from './styles'
import {CartItems } from '../../components/CartItems'
import {CartResume} from '../../components/CartResume'
import Logo from '../../assets/Burguer.png'

export function Carrinho() {

    return(
        <Container>
            <Banner>
                <img src={Logo} alt="Logo fundo" />
            </Banner>
            <Title> Checkout - Pedidos</Title>
            <Content>
                <CartItems />
                <CartResume />
            </Content>
        </Container>
    )
}
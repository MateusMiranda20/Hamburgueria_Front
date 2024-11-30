import { Container, Button } from "./styles"


export function CartResume () {
    return(
        <div>
            <Container>
            <div className="container-top">
                <h2 className="title">Resumo do Pedido</h2>
                <p className="itens">Itens</p>
                <p className="itens-price">R$ 20,00</p>
                <p className="delivery-tax">Taxa entrega</p>
                <p className="delivery-price">R$ 5,00</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>R$ 25,00</p>
            </div>
        </Container>
        <Button>Finalizar Pedido</Button>
        </div>
    )
}